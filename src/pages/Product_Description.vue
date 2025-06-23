<template>
    <section class="prod_desc py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
          
          <!-- Left Column -->
          <div class="w-full md:w-[70%]">
            <img :src="photo_1" class="w-full h-auto object-cover rounded-md" />
            <h2 class="font-sig text-2xl sm:text-3xl font-semibold py-3">Enigma</h2>
            <p class="text-[0.95rem] leading-relaxed text-justify">
              Capture the serenity of nature with Whispers of Dawn, a breathtaking landscape photograph that freezes the quiet beauty of the early morning.
              This high-resolution image features golden light spilling over misty hills, with soft hues blending sky and earth in perfect harmony.
              Ideal for home or office decor, this print brings a sense of calm and connection to the natural world.
              Printed on premium archival paper with rich, true-to-life colors and museum-grade longevity, each piece is signed and available in multiple sizes.
              Whether displayed as a statement centerpiece or part of a curated gallery wall, Whispers of Dawn adds depth, elegance, and timeless beauty to any space.
            </p>
    
            <h3 class="font-sig text-lg font-semibold py-5">Keywords</h3>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="keyword in 4"
                :key="keyword"
                class="flex items-center px-4 py-2 text-sm  outline-1 rounded hover:bg-[#dbd0a7e3] hover:text-[rgba(0,0,0,0.7)] transition"
              >
                <i class="fa-solid fa-wand-magic-sparkles mr-2"></i>
                <p>Photos</p>
              </div>
            </div>
          </div>
    
          <!-- Right Column -->
          <div class="w-full md:w-[30%]">
            <h2 class="font-sig text-2xl sm:text-3xl font-semibold">Enigma</h2>
            
            <!-- Rating -->
            <div class="flex items-center space-x-3 py-2">
              <p class="flex space-x-1 text-sm">
                <i v-for="star in 5" :key="star" class="fa-solid fa-star text-amber-400"></i>
              </p>
              <p class="text-xs text-[rgba(0,0,0,0.5)] font-sig font-semibold">(120 Reviews)</p>
            </div>
    
            <!-- Price and Short Description -->
            <div>
              <h3 class="font-sig text-xl text-black py-3">$192.00</h3>
              <p class="font-sig text-sm border-b pb-3 border-[rgba(0,0,0,0.5)]">
                Capture the serenity of nature with Whispers of Dawn, a breathtaking landscape photograph that freezes the quiet beauty of the early morning.
                This high-resolution image features golden light spilling over misty hills, with soft hues blending sky and earth in perfect harmony.
                Ideal for home or office decor.
              </p>
            </div>
    
            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4 py-6 items-start sm:items-center">
              <button
                type="button"
                class="font-sig text-sm text-gray-700 font-semibold px-6 py-3 bg-[#dbd0a7e3] rounded hover:bg-[#d0c28ae3] transition"
              >
                Add to Cart
              </button>
              <i class="fa-solid fa-heart text-xl p-3 hover:text-red-400 border rounded shadow cursor-pointer"></i>
            </div>
          </div>
    
        </div>
      </div>
    </section>
    </template>
    
<script setup>

import photo_1 from '@/assets/images/photographs_1.jpg'

import { ref } from 'vue';

const keywords = ref( [
    'photos',
    'landscape photography',
])

</script>