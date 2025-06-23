<template>
    <section class="wishlist py-10 sm:py-16 md:py-20">
      <div class="container mx-auto px-4">
        <h2 class="font-sig text-lg sm:text-xl md:text-2xl leading-6 pb-10 md:pb-[60px] text-center md:text-left">
          Wishlist (4)
        </h2>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-[30px]">
          <div
            v-for="product in 4"
            :key="product"
            class="w-full"
          >
            <div class="wishlist_items pt-8 pb-16 px-6 sm:px-8 bg-[#e8ddc5] rounded-[10px] relative">
              <img :src="wishlist" class="mx-auto max-w-full h-auto" />
              <RouterLink>
                <i
                  class="fa-solid fa-trash absolute right-2 bottom-4 p-2 bg-white rounded-full text-sm sm:text-base cursor-pointer"
                ></i>
              </RouterLink>
            </div>
            <div class="text-center md:text-left mt-4">
              <h4 class="text-base sm:text-[16px] leading-6 font-popo font-medium text-black">
                Westershire
              </h4>
              <p>
                <span class="text-gray-500 text-base sm:text-[16px] font-sig leading-6 font-semibold">
                  $960
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
<script setup>

import wishlist from '@/assets/images/paintings_1.jpg'

</script>