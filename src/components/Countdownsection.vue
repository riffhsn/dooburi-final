<template>
    <section
      class="px-5 curator_pick pt-[20px] md:pt-[50px]"
    >
      <div class="container mx-auto">
        <!-- Header -->
        <div class="countdown_header">
          <h2 class="text-center text-3xl sm:text-4xl pt-5 md:text-6xl animate-pulse py-5 md:py-10 px-2">
            Curator's Pick Of The Day
          </h2>
        </div>
  
        <!-- Main layout -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between md:gap-x-12">
          
          <!-- Countdown Section -->
          <div class="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <!-- Apply XS scale smaller, keep md and lg unchanged -->
            <div class="scale-90 sm:scale-95 md:scale-75 lg:scale-100 text-center md:text-left">
              <Countdown />
            </div>
          </div>
  
          <!-- Image and overlay -->
          <div class="relative w-full md:w-1/2">
            <img :src="explore_1" class="w-full object-cover mt-[-60px] md:mt-0 rounded-xl" />
            <div
              class="item bg-[#0059b3] rounded-xl opacity-98 px-3 py-3 sm:px-8 sm:py-8 md:py-1 lg:py-3 md:px-5 text-center absolute bottom-[5%] left-1/2 transform -translate-x-1/2">
              <h3 class="font-sig text-[18px] md:text-2xl font-semibold text-white">Lola</h3>
              <h3 class="font-sig text-[16px] md:text-xl font-semibold text-white">By Arifur Rahman</h3>
              <h3 class="font-sig text-[16px] md:text-xl font-semibold text-white">$120</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import explore_1 from '../assets/images/newarrival_8.jpg'
  import Countdown from './Countdown.vue'
  </script>
  