<template>
    <section
      class="blog pt-[20px] md:pt-[50px] px-[20px] sm:px-[30px] md:px-[50px]" >
      <h2 class="text-center text-5xl md:text-6xl animate-pulse py-10">Blogs</h2>
  
      <div
        class="grid 
               grid-cols-1 
               sm:grid-cols-2 
               md:grid-cols-2 
               lg:grid-cols-4 
               gap-y-10 gap-x-6 
               md:gap-x-5 md:gap-y-8 
                justify-center"
      >
        <div
          v-for="blog in blogs"
          :key="blog"
          class="ww relative mx-auto
                 w-[300px] 
                 sm:w-[280px] sm:h-[250px]
                 md:w-[280px] md:h-[260px]
                 lg:w-[280px] lg:h-[320px]
                 hover:scale-125 transition delay-100 mt-12
                 "
                 
        >
          <img
            :src="blog.image"
            alt=""
             class="w-full h-full object-cover rounded-xl"
          />
  
          <div
            class="blog_text w-[300px] h-[160px] sm:w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-5 py-10 bg-[rgba(0,0,0,0.3)]"
          >
            <h3 class="font-sig text-[12px] sm:text-[16px] font-semibold text-white">
              {{ blog.title }}
            </h3>
            <h3 class="font-sig text-[14px] font-normal text-white">
              By {{ blog.contributor }}
            </h3>
            <a href="#" class="text-white font-sig text-[14px]">Read More..</a>
            <h3 class="font-sig text-white text-[12px] mt-4">
              Published: {{ blog_date }}
            </h3>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  

<script setup>
import { ref } from 'vue';

const blogs = ref([{
    id: '1',
    image: 'https://images.pexels.com/photos/1981468/pexels-photo-1981468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:'How to preserve artwork',
    contributor: 'Arthur Conan',
    description: '',
},

{
    id: '2',
    image: 'https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:'Am I Even Cut Out to Be an Artist?',
    contributor: 'John Doe',
    description: 'This week, we’re responding to an artist who’s been making art for years—but finds themselves exhausted by the pressure to turn it into a business. They’re wondering if they’re even cut out for this, struggling with burnout, pricing, and questioning whether their work still matters in a world that feels increasingly disconnected from the value of human-made art. ',
},

{
    id: '3',
    image: 'https://images.pexels.com/photos/7655645/pexels-photo-7655645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:'This Artist uses waste to produce art pieces',
    contributor: 'Paul Taylor',
    description: 'This week, we’re responding to an artist who’s been making art for years—but finds themselves exhausted by the pressure to turn it into a business. They’re wondering if they’re even cut out for this, struggling with burnout, pricing, and questioning whether their work still matters in a world that feels increasingly disconnected from the value of human-made art. ',
}, 

{
    id: '4',
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:'Learn basics of Photography',
    contributor: 'Emily Rue',
    description: 'This week, we’re responding to an artist who’s been making art for years—but finds themselves exhausted by the pressure to turn it into a business. They’re wondering if they’re even cut out for this, struggling with burnout, pricing, and questioning whether their work still matters in a world that feels increasingly disconnected from the value of human-made art. ',
}])

const blog_date = new Date();

</script>

<style>
@media (min-width: 769px) and (max-width: 1024px) {
.ww{
  height: 300px;
  width: 200px;
}
.blog_text{
  height:230px ;
}
}
</style>