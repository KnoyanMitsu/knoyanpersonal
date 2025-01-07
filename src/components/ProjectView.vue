<script setup>
import Project from '../Json/Project.json';
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const projects = ref([]);

onMounted(async () => {
  try {
    // Simulasi fetch data
    await new Promise(resolve => setTimeout(resolve, 2000));
    projects.value = Project;
  } catch (error) {
    console.error('Error loading projects:', error);
  } finally {
    isLoading.value = false;
  }
});

// Menghitung jumlah project untuk skeleton
const skeletonCount = Project.length;
</script>

<template>
    <div class="">
        <div v-if="isLoading" class="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
          <div v-for="n in skeletonCount" :key="n" class="h-full">
            <div class="bg-white shadow-xl rounded-md h-full flex flex-col animate-pulse">
              <!-- Skeleton Image -->
              <div class="rounded-t-md w-full h-52 bg-gray-200"></div>
              
              <div class="px-7 py-4 flex flex-col flex-grow">
                <!-- Skeleton Title -->
                <div class="h-8 bg-gray-200 rounded-md mb-2 w-3/4"></div>
                
                <!-- Skeleton Year -->
                <div class="h-6 bg-gray-200 rounded-md mb-3 w-1/4"></div>
                
                <!-- Skeleton Tags -->
                <div class="flex gap-3 mb-4">
                  <div class="h-6 bg-gray-200 rounded-full w-20"></div>
                  <div class="h-6 bg-gray-200 rounded-full w-20"></div>
                </div>
                
                <!-- Skeleton Languages -->
                <div class="flex flex-wrap gap-3 mb-4">
                  <div class="h-6 bg-gray-200 rounded-full w-24"></div>
                  <div class="h-6 bg-gray-200 rounded-full w-24"></div>
                  <div class="h-6 bg-gray-200 rounded-full w-24"></div>
                </div>
                
                <!-- Skeleton Description -->
                <div class="flex-grow space-y-2 mb-4">
                  <div class="h-4 bg-gray-200 rounded w-full"></div>
                  <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div class="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
                
                <!-- Skeleton Buttons -->
                <div class="grid grid-cols-2 gap-3 mt-auto">
                  <div class="h-10 bg-gray-200 rounded-full"></div>
                  <div class="h-10 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <!-- Actual Content -->
        <div v-else class="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
          <div class="h-full" v-for="project in Project" :key="project">
            <div class="bg-white shadow-xl rounded-md h-full flex flex-col">
              <img 
                :src="project.image"
                class="rounded-t-md w-full h-52 object-cover" 
                alt="" 
              />
              <div class="px-7 py-4 flex flex-col flex-grow">
                <h1 class="text-2xl font-bold text-black">
                  {{ project.title }}
                </h1>
                <p class="text-black font-semibold mb-1">{{ project.year }}</p>
                
                <div class="flex flex-wrap gap-3 mb-2">
                  <div v-if="project.isPublic" class="bg-black rounded-full gap-1 px-3 py-1 flex items-center">
                    <VsxIcon iconName="Unlock" :size="16" color="#FFFFFF" type="bold" class="inline-block"/> 
                    <p class="text-white font-semibold inline-block ">Public</p>
                  </div>
                  <div v-else class="bg-black rounded-full px-3 py-1 gap-1 flex items-center">
                    <VsxIcon iconName="Lock" :size="16" color="#FFFFFF" type="bold" class="inline-block"/> 
                    <p class="text-white font-semibold inline-block ">Private</p>
                  </div>
                  <div v-if="project.isLive" class="bg-black rounded-full gap-1 px-3 py-1 flex items-center">
                    <VsxIcon iconName="Flag2" :size="16" color="#FFFFFF" type="bold" class="inline-block"/> 
                    <p class="text-white font-semibold">Live</p>
                  </div>
                </div>
                
                <div class="flex flex-wrap gap-3 mb-4">
                  <div v-for="lang in project.languages" :key="lang" class="bg-black rounded-full">
                    <p class="text-white font-semibold px-3 py-1">{{ lang }}</p>
                  </div>
                </div>
                
                <div class="mb-4 flex-grow">
                  <p>{{ project.description }}</p>
                </div>
                
                <div v-if="project.isPublic || project.isLive" 
                     class="grid gap-3 mt-auto" 
                     :class="project.isPublic && project.isLive ? 'grid-cols-2' : 'grid-cols-1'">
                  <a v-if="project.isLive" 
                          :href="project.link.website" 
                          class="bg-black rounded-full text-center h-10 flex items-center justify-center gap-2 text-white font-semibold hover:bg-gray-800 transition-colors">
                          <VsxIcon iconName="Send2" :size="20" color="#FFFFFF" type="bold" class="inline-block"/> 
                          
                          Website
                  </a>
                  <a v-if="project.isPublic" 
                          :href="project.link.source_code" 
                          class="bg-black rounded-full text-center h-10 flex items-center gap-2 justify-center text-white font-semibold hover:bg-gray-800 transition-colors">
                          <VsxIcon iconName="Code" :size="20" color="#FFFFFF" type="bold" class="inline-block"/> 
                          Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  <!-- Skeleton Loading -->
</template>

<style>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style>