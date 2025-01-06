import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VsxIcon } from "vue-iconsax";
import VueApexCharts from 'vue3-apexcharts'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('ApexChart', VueApexCharts)
app.component("VsxIcon", VsxIcon)
app.mount('#app')
