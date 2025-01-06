<script setup>
import LangsChart from '@/widgets/LangsChart.vue';
</script>

<template>
  <div class=" grid gap-3 lg:grid-cols-4">
    <div class="bg-white shadow-xl  rounded-md flex flex-wrap justify-center ">
     
      <div class="px-7 py-4">
        <img src="../assets/profile.png" alt="" class="w-52 mb-6 h-52 rounded-xl" srcset="">
        <h1 class="text-3xl  font-bold text-black">Knoyan Mitsu</h1>
        <p class="text-xl  text-black">I am a Web Developer.</p>
      </div>
      <div>
      </div>
    </div>
    <div class="grid gap-3 lg:col-span-3">
      <div class="bg-white shadow-xl  w-auto h-auto p-7 rounded-md">
        <h1 class="text-3xl font-bold text-black">About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae, exercitationem voluptate cumque culpa fuga molestias laudantium, porro cum consequuntur impedit ex, illo et consequatur sequi. Dolorum facilis numquam earum inventore temporibus odio ad reiciendis unde, impedit laboriosam illum, atque enim exercitationem laudantium dolore assumenda excepturi sequi id beatae aliquam voluptatibus facere! Odio optio nisi sit magni eius dignissimos nesciunt rem velit maxime porro? Magnam reiciendis ea cupiditate placeat aperiam doloribus quia deleniti soluta nisi nihil quaerat nostrum officia, laborum voluptate! Error ratione architecto, dolorum, harum asperiores incidunt explicabo accusamus doloribus laudantium culpa minus velit cupiditate aperiam a expedita placeat eligendi enim animi hic inventore ducimus tempora ullam dolorem! Nihil, minus laborum. Repellat dolorem quos blanditiis, deleniti error magnam placeat harum provident quisquam! Sit laborum, voluptatum, totam delectus neque tempore voluptatibus aliquam nulla, expedita pariatur possimus? Placeat iusto nam voluptatum ex repellat soluta voluptatibus fugiat culpa ipsam quibusdam numquam, at, non adipisci! Porro placeat, asperiores cupiditate ipsam, sapiente atque mollitia esse beatae et iure veniam maiores! Enim aperiam quo doloremque quam at provident voluptas excepturi quaerat reprehenderit commodi, sit officia, fugiat itaque. Iure maxime omnis, placeat ut unde, reprehenderit assumenda magni sapiente aliquam id dicta eos consequuntur, explicabo labore nesciunt.</p>
      </div>
      <div class="grid lg:grid-cols-2 gap-3">
        <div class="bg-white shadow-xl  w-auto h-auto rounded-md">
          <h1 class="text-3xl font-bold text-black px-7 pt-3">Interests</h1>
          <div class="px-7 py-4 flex gap-6 justify-center items-center h-[70%] flex-grow">
            <div class="flex items-center flex-col">
              <VsxIcon iconName="Keyboard" :size="60" color="#000000" type="bold" />
              <p class="text-black font-semibold">Programing</p>
            </div>
            <div class="flex items-center flex-col">
              <VsxIcon iconName="Code" :size="60" color="#000000" type="bold" />
              <p class="text-black font-semibold">Web Development</p>
            </div>
            <div class="flex items-center flex-col">
              <VsxIcon iconName="PenTool2" :size="60" color="#000000" type="bold" />
              <p class="text-black font-semibold">Drawing</p>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-xl items-center  rounded-md">
          <h1 class="text-3xl font-bold text-black px-7 py-3">Skill Languages Programing</h1>
          <LangsChart/>
<p class="font-semibold px-7">Info: This data from my github so this data automatically updated</p>
        </div>
      </div>
    </div>
  </div>
</template>