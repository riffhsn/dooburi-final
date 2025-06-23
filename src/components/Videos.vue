<template>
    <Section
      class="mx-auto py-[20px] md:py-[50px] px-4 md:px-[50px] bg-center bg-cover bg-[url('../assets/images/section_bg.jpg')]"
    >
      <h2 class="text-center text-4xl sm:text-5xl md:text-6xl animate-pulse py-5">
        Artist Interviews
      </h2>
      <p class="font-sig text-[14px] sm:text-[16px] font-semibold text-center pb-5 sm:px-20 md:px-0">
        At Dooburi, we interview renowned artists to discuss their artwork. Watch the videos below to connect with artists.
      </p>
  
      <div class="grid gap-y-10 md:grid-cols-3 gap-x-10">
        <div class="w-full aspect-video">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/LVbGznbqfyw?si=SQbfG3yZD7q1VLfK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
  
        <div class="w-full aspect-video">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/tmTzKhSc_h4?si=LoAbPE8eLdVybxOB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
  
        <div class="w-full aspect-video">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/Y65_Qs1Wq0w?si=jvJwqOKhqMQ1j8cv"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Section>
  </template>
  

<script setup>

import { ref } from 'vue';

</script>