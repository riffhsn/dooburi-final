<template>
    <section
      class="categories py-[80px] px-4 md:px-[50px] bg-[url('../assets/images/section_bg.jpg')] bg-center bg-cover">
      <div
        class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-10 justify-center">
  
      <div class="w-full" v-for="category in categories" :key="category.id">
            <a href="#"class= "w-fit text-white mb-10 text-[15px] sm:text-[18px] lg:text-[18px] bg-[rgba(0,0,0,0.6)] py-2 px-4 sm:py-3 sm:px-5 text-center rounded-xl hover:bg-[#0059b3]">{{ category.name }}</a>

          <div class="shadow-black shadow-2xl relative rounded-[10px] overflow-hidden mt-10">
            <img
              :src="category.image"
              class="rounded-[10px] w-full object-cover h-[250px] sm:h-[400px] lg:h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  

<script setup>

 import { ref } from 'vue';
    
    const categories = ref([
        {
        id: '1',
        image: 'https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Photography',
    },
    
    {
        id: '2',
        image: 'https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Paintings',
    },
    
    {
        id: '3',
        image: 'https://images.pexels.com/photos/6714806/pexels-photo-6714806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Sculptures',
    },
        {
        id: '4',
        image: 'https://images.pexels.com/photos/29889876/pexels-photo-29889876/free-photo-of-cozy-indoor-knitting-session-with-tea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Crafts',
    },
    ])

</script>

