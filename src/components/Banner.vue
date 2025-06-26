<template>
  <section class="banner bg-[url('../assets/images/section_bg.jpg')] bg-center bg-cover relative">
    <div class="relative">
      <!-- Background Video -->
      <video class="w-full h-auto object-cover" autoplay loop muted src="../assets/videos/artpiece-small.mp4" type="video/mp4"></video>

      <!-- Overlay Content -->
      <div class="absolute inset-0 flex flex-col sm:flex-row justify-between items-center px-4 md:px-10 lg:px-20 py-10 gap-y-10 sm:gap-y-0">
        
        <!-- Left Banner Text -->
        <div class="w-full sm:w-1/2 text-center sm:text-left font-sig text-white px-2">
          <h1 class="font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-[-20px] xl:mt-[-90px]  xl:text-[56px] xl:w-[700px] sm:mt-0">Welcome to Dooburi!</h1>
          <p class="max-w-full sm:max-w-[90%] md:max-w-[400px] mx-auto sm:mx-0 pt-0 sm:pt-4 text-sm sm:text-base md:text-lg">
            We are a marketplace for curating the best art pieces in Bangladesh. Explore art pieces from a plethora of photographs, paintings and sculptures by renowned artists.
          </p>
          <RouterLink to="/paintings">
            <button
              class="bg-[rgba(0,0,0,0.6)] text-white font-sig font-semibold text-sm sm:text-base md:text-lg mt-2 sm:mt-6 rounded-2xl px-6 py-3 shadow-xl hover:bg-black transition">
              Explore Art Pieces
            </button>
          </RouterLink>
        </div>

        <!-- Right Banner Quote & Artist CTA -->
        <div class="w-full sm:w-1/2 text-center text-white px-2 pt-4 sm:pt-8">
          <div class="quote">
            <h1 class="font-sig text-[20px] xl:w-[700px] sm:text-3xl md:text-3xl xl:text-6xl lg:text-5xl max-w-full lg:max-w-[600px] mx-auto">
              <i class="fa-solid fa-quote-left"></i> Reality leaves a lot to the imagination. <i class="fa-solid fa-quote-right"></i>
            </h1>
            <span class="text-[16px] sm:text-xl lg:text-[50px] block mt-2 font-sig">- John Lennon</span>
          </div>

          <!-- Artist CTA -->
          <div class="bg-[#5380ac] py-5 px-4 sm:px-8 mt-6 rounded-2xl xl:px-8 max-w-m xl:max-w-[600px] mx-auto opacity-95 text-gray-700">
            <h2 class="font-sig font-semibold text-lg sm:text-xl md:text-2xl">Are You An Artist?</h2>
            <h3 class="font-sig text-sm sm:text-base mt-2">Join Dooburi to exhibit your exclusive art pieces to passionate art collectors.</h3>
            <RouterLink to="/login">
              <button
                class="mt-4 bg-[#0059b3] text-white font-sig font-semibold text-sm sm:text-base rounded-2xl px-6 py-3 shadow-xl hover:bg-black transition">
                Exhibit Your Artwork
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
