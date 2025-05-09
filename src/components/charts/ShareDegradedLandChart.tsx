'use client';

import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  region: string;
  value: number;
}

interface ApiResponse {
  chart: {
    title: string;
    subtitle: string;
    citation: string;
    originalChartUrl: string;
    selection: string[];
  };
  columns: {
    [key: string]: {
      titleShort: string;
      descriptionShort: string;
      shortUnit: string;
      timespan: string;
      citationShort: string;
    };
  };
  dateDownloaded: string;
}

type TabType = 'table' | 'map' | 'chart';

// Sample data based on the API response
const sampleData: ChartData[] = [
  { region: 'Latin America and the Caribbean (UN)', value: 21.89 },
  { region: 'World', value: 15.54 },
  { region: 'Sub-Saharan Africa (UN)', value: 14.63 },
  { region: 'Central and Southern Asia (UN)', value: 14.04 },
  { region: 'India', value: 9.45 },
  { region: 'Oceania (UN)', value: 8.65 },
  { region: 'Northern Africa (UN)', value: 4.57 }
];

export default function ShareDegradedLandChart() {
  const [activeTab, setActiveTab] = useState<TabType>('chart');
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  } | null>(null);
  const [metadata, setMetadata] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://ourworldindata.org/grapher/share-degraded-land.metadata.json?v=1&csvType=full&useColumnShortNames=true'
        );
        const data = await response.json();
        setMetadata(data);
        
        // Sort data by value in descending order
        const sortedData = [...sampleData].sort((a, b) => b.value - a.value);

        setChartData({
          labels: sortedData.map(item => item.region),
          datasets: [
            {
              label: 'Share of Degraded Land (%)',
              data: sortedData.map(item => item.value),
              backgroundColor: 'rgba(94, 114, 158, 0.8)',
              borderColor: 'rgba(94, 114, 158, 1)',
              borderWidth: 1
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData || !metadata) {
    return <div className="w-full max-w-4xl mx-auto p-4">Loading chart data...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">{metadata.chart.title}</h2>
        {/* <p className="text-sm text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: metadata.chart.subtitle }} />
        <p className="text-xs text-gray-500">
          Source: {metadata.columns['_15_3_1__ag_lnd_dgrd'].citationShort}
        </p>
        <p className="text-xs text-gray-500">
          Timespan: {metadata.columns['_15_3_1__ag_lnd_dgrd'].timespan}
        </p> */}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`px-4 py-2 mr-2 ${activeTab === 'table' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('table')}
        >
          Table
        </button>
        <button
          className={`px-4 py-2 mr-2 ${activeTab === 'map' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('map')}
        >
          Map
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'chart' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('chart')}
        >
          Chart
        </button>
      </div>

      {/* Table View */}
      {activeTab === 'table' && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Share of Degraded Land (%)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {chartData.labels.map((region, index) => (
                <tr key={region}>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                    {region}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                    {chartData.datasets[0].data[index].toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Map View */}
      {activeTab === 'map' && (
        <div className="h-[350px] bg-white flex items-center justify-center">
          <img 
            src="/images/map.png" 
            alt="Degraded Land Map" 
            className="max-w-full max-h-full object-cover"
          />
        </div>
      )}

      {/* Chart View */}
      {activeTab === 'chart' && (
        <div className="h-[300px]">
          <Bar
            data={chartData}
            options={{
              indexAxis: 'y',
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      return `${context.formattedValue}%`;
                    }
                  }
                }
              },
              scales: {
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Percentage (%)'
                  }
                },
                y: {
                  ticks: {
                    font: {
                      size: 11
                    }
                  },
                  grid: {
                    display: false
                  }
                }
              }
            }}
          />
        </div>
      )}

     
    </div>
  );
} 