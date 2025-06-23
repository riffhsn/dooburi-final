<template>
  <section class="photography py-[50px]">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap gap-y-6 justify-center md:justify-start sm:px-0 px-6">
        <div 
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2" 
          v-for="photo in photos" 
          :key="photo.name"
        >
          <div class="relative group hover:scale-105 transition-transform duration-300 cursor-pointer">
            <!-- Image Card -->
            <div class="item text-center py-6 px-4 border border-gray-400 bg-[url('https://images.pexels.com/photos/9809060/pexels-photo-9809060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded shadow-2xl">
              <img :src="photo.image" class="mx-auto w-full h-auto object-cover rounded-md" />
              <h3 class="text-[1rem] sm:text-[1.1rem] font-sig font-semibold pt-3">{{ photo.name }}</h3>
              <h3 class="text-[0.9rem] sm:text-[1rem] font-sig font-semibold">By {{ photo.artist }}</h3>
              <h3 class="text-[0.9rem] sm:text-[1rem] font-sig font-semibold">${{ photo.price }}</h3>
            </div>
  
            <!-- Overlay on hover -->
            <div class="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="flex gap-4 text-white text-lg">
                <RouterLink to="/product_description">
                  <i class="fa-solid fa-plus hover:text-[#e8ddc5]"></i>
                </RouterLink>
                <RouterLink>
                  <i class="fa-solid fa-bag-shopping hover:text-[#e8ddc5]"></i>
                </RouterLink>
                <RouterLink>
                  <i class="fa-solid fa-heart hover:text-red-400"></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>
  
    
  <script setup>

import { ref } from 'vue';

const photos = ref([
    {
    id: '1',
    image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Scenic Heaven',
    artist: 'Adam Jose',
    price: '120'
},

{
    id: '2',
    image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Enigma',
    artist: 'Rose Emilia',
    price: '320',
},

{
    id: '3',
    image: 'https://images.pexels.com/photos/922610/pexels-photo-922610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Melody',
    artist: 'Allen James',
    price: '220',
},
{
    id: '4',
    image: 'https://images.pexels.com/photos/922610/pexels-photo-922610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Melody',
    artist: 'Allen James',
    price: '220',
}, 
{
    id: '5',
    image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Scenic Heaven',
    artist: 'Adam Jose',
    price: '120'
},

{
    id: '6',
    image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Enigma',
    artist: 'Rose Emilia',
    price: '320',
},

{
    id: '7',
    image: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Melody',
    artist: 'Allen James',
    price: '220',
},
{
    id: '8',
    image: 'https://images.pexels.com/photos/922610/pexels-photo-922610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Melody',
    artist: 'Allen James',
    price: '220',
},
{
    id: '9',
    image: 'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Scenic Heaven',
    artist: 'Adam Jose',
    price: '120'
},

{
    id: '10',
    image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Enigma',
    artist: 'Rose Emilia',
    price: '320',
},

{
    id: '11',
    image: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Melody',
    artist: 'Allen James',
    price: '220',
},
{
    id: '12',
    image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    name: 'Melody',
    artist: 'Allen James',
    price: '220',
}
])

</script>