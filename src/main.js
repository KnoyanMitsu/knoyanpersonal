import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/index.css'
import VueApexCharts from 'vue3-apexcharts'


const app = createApp(App)
app.use(router)
app.component('ApexChart', VueApexCharts)
app.mount('#app')

