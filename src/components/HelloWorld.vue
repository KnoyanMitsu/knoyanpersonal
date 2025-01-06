<script setup>
import AboutUs from './AboutUs.vue';
import ProjectView from './ProjectView.vue';
import ContactView from './ContactView.vue';
</script>

<template>
  <div class="lg:overflow-y-scroll lg:snap-y lg:snap-mandatory h-screen lg:w-screen">    
  <div class="container mx-auto">
      <div class="lg:snap-start h-screen relative">
        <div class="flex justify-center items-center h-screen flex-col">
          <h1 class="lg:text-7xl text-3xl font-bold  text-black">Knoyan Mitsu</h1>
          <h1 class="lg:text-4xl text-2xl font-normal text-black">Personal Website</h1>
        </div>
        <!-- Ikon panah di bagian bawah -->
        <div class="absolute bottom-0 lg:left-[46%] left-[35%] transform -translate-x-1/2 mb-4 flex flex-col items-center animate-bounce">
          <p class="text-black font-semibold text-xl">Scroll Down</p>
          <VsxIcon iconName="ArrowDown2" :size="60" color="#000000" type="linear"/>
        </div>
      </div>

      <div class="lg:snap-start lg:h-screen justify-center items-center flex mb-8">
        <AboutUs/>
      </div>
      <div class="lg:snap-start lg:h-screen lg:py-8">
        <h1 class="text-3xl font-bold flex items-center justify-center mb-9 lg:mb-2 text-black">Projects</h1>
        <div class=" h-screen overflow-scroll lg:py-24">
    
            <ProjectView/>
        </div>
      </div>
    <div class="lg:snap-start lg:h-screen justify-center items-center flex mb-8">
        <ContactView/>
    </div>
    </div>
  </div>
</template>