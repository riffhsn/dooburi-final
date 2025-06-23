<template>
    <section
      class="signup bg-center bg-cover py-32 sm:py-40 md:py-[200px] bg-[url('https://images.pexels.com/photos/375882/pexels-photo-375882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <div class="container mx-auto px-4">
        <div
          class="flex flex-col md:flex-row items-center justify-center md:space-x-10 bg-[rgba(0,0,0,0.3)] py-10 md:py-20 rounded-[4px] space-y-10 md:space-y-0">
          <!-- Art Collector Section -->
          <div class="w-full md:w-1/2 text-center px-4 py-4">
            <h2 class="font-sig font-semibold text-2xl sm:text-3xl text-white">
              Are You An Art Collector?
            </h2>
            <RouterLink to="/artcollector/signup">
              <button
                class="bg-[#dbd0a7e3] font-sig font-semibold text-base sm:text-[16px] text-gray-700 cursor-pointer rounded-md py-3 px-8 mt-4 mx-auto w-full max-w-xs"
              >
                I Am An Art Collector
              </button>
            </RouterLink>
            <p class="font-sig font-semibold text-sm sm:text-[14px] text-white py-3">
              Click To Get Started
            </p>
          </div>

          <!-- Artist Section -->
          <div class="w-full md:w-1/2 text-center px-4">
            <h2 class="font-sig font-semibold text-2xl sm:text-3xl text-white">
              Are You An Artist?
            </h2>
            <RouterLink to="/artist/signup">
              <button
                class="bg-[#dbd0a7e3] font-sig font-semibold text-base sm:text-[16px] text-gray-700 cursor-pointer rounded-md py-3 px-8 mt-4 mx-auto w-full max-w-xs">
                I Am An Artist
              </button>
            </RouterLink>
            <p class="font-sig font-semibold text-sm sm:text-[14px] text-white py-3">
              Click To Get Started
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>

</script>