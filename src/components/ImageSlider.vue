<template>
  <section class="pt-[20px] md:pt-[50px] bg-cover bg-center">
    <div class="artist_header">
      <h2 class="text-center text-3xl sm:text-4xl md:text-6xl animate-pulse py-6 md:py-10">Featured Artists</h2>
    </div>

    <div class="w-full sm:w-fit mx-auto px-4 relative">
      <div class="flex flex-col md:flex-row items-center border border-gray-500 rounded-lg shadow-xl py-6 md:py-10 bg-[#dbd0a7e3] opacity-95 overflow-hidden">
        <!-- Image Section -->
        <div class="w-full md:w-2/3 h-[220px] sm:h-[300px] md:h-auto">
          <img :src="slides[currentIndex].image" alt="Slide Image" class="w-full h-full object-cover" />
        </div>

        <!-- Text Section -->
        <div class="w-full md:w-1/3 p-4 md:p-6 text-center md:text-left">
          <h2 class="text-xl sm:text-2xl font-sig font-bold mb-2">{{ slides[currentIndex].title }}</h2>
          <h2 class="text-lg sm:text-xl font-sig font-bold mb-2">{{ slides[currentIndex].profession }}</h2>
          <p class="text-gray-600 font-sig text-sm sm:text-base">{{ slides[currentIndex].description }}</p>
          <RouterLink><button type=""></button></RouterLink>

          <!-- Navigation Buttons -->
          <div class="hidden md:flex space-x-2">
            <button @click="prevSlide" class="bg-gray-200 hover:bg-[#dbd0a7e3] rounded-full p-2 absolute left-0 top-1/2 transform -translate-y-1/2">
              <span class="text-[20px]">&larr;</span>
            </button>
            <button @click="nextSlide" class="bg-gray-200 hover:bg-[#dbd0a7e3] rounded-full p-2 absolute right-0 top-1/2 transform -translate-y-1/2">
              <span class="text-[20px]">&rarr;</span>
            </button>
          </div>

          <!-- Mobile Nav Buttons -->
          <div class="flex justify-center space-x-4 pt-4 md:hidden">
            <button @click="prevSlide" class="bg-gray-200 hover:bg-[#dbd0a7e3] rounded-full p-2">
              <span class="text-[20px]">&larr;</span>
            </button>
            <button @click="nextSlide" class="bg-gray-200 hover:bg-[#dbd0a7e3] rounded-full p-2">
              <span class="text-[20px]">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'

const slides = ref([
  {
    image: 'https://images.pexels.com/photos/1043331/pexels-photo-1043331.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Patrick Garcia',
    profession: 'Painter',
    description: 'Patrick is a painter with 10 years of experience in the creative field. He has produced some great art pieces to display his expertise. ',
  },
  {
    image: 'https://images.pexels.com/photos/6714316/pexels-photo-6714316.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1',
    title: 'Adam Troy',
    profession: 'Sculptor',
    description: 'Adam is a sculptor with 10 years of experience in the creative field. He has produced some great art pieces to display his expertise.',
  },
  {
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1',
    title: 'Anna Wintour',
    profession: 'Photographer',
    description: 'Anna is a photographer with 10 years of experience in the creative field. He has produced some great art pieces to display his expertise.',
  },
])

const currentIndex = ref(0)

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}
</script>

<style scoped>
/* Optional custom styling */
</style>
