<template>
  <section class="navbar bg-[#5380ac] font-sig py-4 md:py-5">
    <div class="container mx-auto px-4">
      <!-- Desktop + Tablet View (md and up) -->
      <div class="hidden md:flex items-center justify-between space-x-4">
        <!-- Logo -->
        <div class="w-1/5">
          <div class="logo text-xl font-bold"><a href=""><img class="w-[25%]" src="../assets/images/dooburi_logo.png"></a></div>
        </div>

        <!-- Menu with Search Input -->
        <div class="menu w-3/5">
          <div class="flex items-center justify-between flex-nowrap">
            <!-- Menu Links -->
            <ul class="flex items-center flex-nowrap space-x-3 md:space-x-4 lg:space-x-6 font-semibold text-white text-[14px] md:text-[14px] lg:text-[16px]">
              <RouterLink to="/"><li><a>Home</a></li></RouterLink>
              <li class="relative group">
                <a>Artworks</a>
                <ul class="absolute hidden group-hover:block bg-white shadow-md mt-2 text-gray-700 rounded z-10">
                  <RouterLink to="/paintings"><li class="px-4 py-2 hover:bg-gray-100">Paintings</li></RouterLink>
                  <RouterLink to="/photography"><li class="px-4 py-2 hover:bg-gray-100">Photographs</li></RouterLink>
                  <RouterLink to="/sculptures"><li class="px-4 py-2 hover:bg-gray-100">Sculptures</li></RouterLink>
                </ul>
              </li>
              <RouterLink to="/artists"><li><a>Artists</a></li></RouterLink>
              <li><RouterLink to="/Videos">Videos</RouterLink></li>
              <li><RouterLink to="/News">News</RouterLink></li>
              <li><RouterLink to="/blog">Blogs</RouterLink></li>
            </ul>

            <!-- Search Input -->
            <form class="ml-2 md:ml-4 flex-shrink-0">
              <input
                class="magli bg-gray-200 h-[38px] md:h-[42px] lg:h-[48px] px-3 w-[130px] md:w-[190px] lg:w-[330px] focus:outline-none rounded-2xl text-black placeholder:text-sm"
                placeholder="What are you looking for?"
              />
            </form>
          </div>
        </div>

        <!-- Icons -->
        <ul class="w-1/5 flex justify-end space-x-3 md:space-x-2 lg:space-x-3 text-white text-[18px] md:text-[13px] lg:text-[18px] ml-0 md:ml-18 lg:ml-0">
          <li><RouterLink to="/user"><i class="fa-solid fa-user sm:pl-0 lg:pl-0"></i></RouterLink></li>
          <li><RouterLink to="/wishlist"><i class="fa-solid fa-heart sm:pl-0 lg:pl-0"></i></RouterLink></li>
          <li><RouterLink to="/cart"><i class="fa-solid fa-bag-shopping sm:pl-0 lg:pl-0"></i></RouterLink></li>
        </ul>
      </div>

      <!-- Mobile View (xs, sm only) -->
      <div class="md:hidden">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="text-xl font-bold">LOGO</div>

          <!-- Toggle Button (only for xs/sm) -->
          <button @click="toggle = !toggle">
            <i class="fa-solid fa-bars text-xl text-gray-700"></i>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="toggle" class="mt-4 space-y-4">
          <ul class="flex flex-col space-y-3 text-gray-600 text-[16px]">
            <RouterLink to="/"><li><a>Home</a></li></RouterLink>
            <li>
              <details class="marker:none w-full">
                <summary class="cursor-pointer flex justify-between items-center">Artworks</summary>
                <ul class="pl-4 mt-2 space-y-2">
                  <RouterLink to="/paintings"><li>Paintings</li></RouterLink>
                  <RouterLink to="/photography"><li>Photographs</li></RouterLink>
                  <RouterLink to="/sculptures"><li>Sculptures</li></RouterLink>
                </ul>
              </details>
            </li>
            <RouterLink to="/artists"><li><a>Artists</a></li></RouterLink>
            <li><RouterLink to="/Videos">Videos</RouterLink></li>
            <li><RouterLink to="/News">News</RouterLink></li>
            <li><RouterLink to="/blog">Blogs</RouterLink></li>

            <!-- Search -->
            <li>
              <form>
                <input
                  class="bg-gray-200 h-[40px] px-4 w-full focus:outline-none rounded-2xl text-black"
                  placeholder="What are you looking for?"
                />
              </form>
            </li>

            <!-- Icons -->
            <div class="flex space-x-4 pt-2 text-gray-500 text-[18px]">
              <RouterLink to="/user"><i class="fa-solid fa-user"></i></RouterLink>
              <RouterLink to="/wishlist"><i class="fa-solid fa-heart"></i></RouterLink>
              <RouterLink to="/cart"><i class="fa-solid fa-bag-shopping"></i></RouterLink>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'

const toggle = ref(false)
const route = useRoute()

// Watch for route changes and close mobile menu (for xs/sm views only)
watch(() => route.fullPath, () => {
  toggle.value = false
});
</script>

<style>
@media (min-width: 769px) and (max-width: 1024px) {
.magli{
  width: 250px;
}
}
</style>