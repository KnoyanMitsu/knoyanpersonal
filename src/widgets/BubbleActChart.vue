<template>
    <div>
      <VueApexCharts
        class="rounded-full"
        type="bubble"
        height="200"
        :options="chartOptions"
        :series="linechartseries"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
// import Language from '../controller/FetchLanguage';

  // Register VueApexCharts component
  const linechartseries = ref({
    data: {
          
          series: [{
            name: 'Product1',
            data: '20-12-2022'
          },
          {
            name: 'Product2',
            data: '21-12-2022'
          },
          {
            name: 'Product3',
            data: '22-12-2022'
          },
          {
            name: 'Product4',
            data: '23-12-2022'
          }]
        }
    }
        ); // Reactive series data
  const chartOptions = ref({
    chart: {
              height: 350,
              type: 'bubble',
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              type: 'gradient',
            },
            title: {
              text: '3D Bubble Chart'
            },
            xaxis: {
              tickAmount: 12,
              type: 'datetime',
              labels: {
                  rotate: 0,
              }
            },
            yaxis: {
              max: 70
            },
            theme: {
              palette: 'palette2'
            }
          },
          
  );
  
//   onMounted(async () => {
//     const langInstance = new Language(import.meta.env.VITE_NAME, import.meta.env.VITE_API_KEY);
//     try {
//       const stats = await langInstance.GetStats();
//       const targetLanguages = ["Vue", "PHP", "Python"];
//       const filteredStats = stats.filter((stat) =>
//         targetLanguages.includes(stat.language)
//       );
//       // Map stats to chart series format
//       linechartseries.value = filteredStats.map((stat) => ({
//         name: stat.language,
//         data: [stat.percentage],
//         color: stat.color
//       }));
//       console.log(linechartseries.value);
//       // Update chart options dynamically
//       chartOptions.value.xaxis.categories = filteredStats.map((stat) => stat.language);
//     } catch (error) {
//       console.error('Failed to fetch stats:', error.message);
//     }
//   });
  </script>
  
  <style scoped>
  /* Your custom styles here */
  </style>
  