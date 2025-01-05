<template>
    <div>
      <VueApexCharts
        class="rounded-full"
        type="bar"
        height="100"
        :options="chartOptions"
        :series="linechartseries"
      />
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import Language from '../controller/FetchLanguage';
  
  // Register VueApexCharts component
  const linechartseries = ref([]); // Reactive series data
  const chartOptions = ref({
    chart: {
      type: 'bar',
      height: 50,
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: true,
      tools: {
        download: false
      }
      }
    },
    plotOptions: {
                bar: {
                  borderRadius: 10,
                  horizontal: true,
                },
              },
    xaxis: {
      categories: [],
      axisBorder:{
        show: false
      },
    axisTicks:{
      show: false
    },
    labels:{
      show: false 
    }
    },
    legend: {
      axisBorder:{
        show: false
      }
    },
    yaxis: {
      axisBorder:{
        show: false
      },
  
      axisTicks:{
      show: false
    },
    labels:{
      show: false 
    }
    },
  });
  
  onMounted(async () => {
    const langInstance = new Language();
  
    try {
      const stats = await langInstance.GetStats();
      const targetLanguages = ["Vue", "PHP", "Python"];
      const filteredStats = stats.filter((stat) =>
        targetLanguages.includes(stat.language)
      );
      // Map stats to chart series format
      linechartseries.value = filteredStats.map((stat) => ({
        name: stat.language,
        data: [stat.percentage],
        color: stat.color
      }));
  
      // Update chart options dynamically
      chartOptions.value.xaxis.categories = filteredStats.map((stat) => stat.language);
    } catch (error) {
      console.error('Failed to fetch stats:', error.message);
    }
  });
  </script>
  
  <style scoped>
  /* Your custom styles here */
  </style>
  