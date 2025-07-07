<template>
  <section
    class="pt-[20px] md:pt-[50px] px-[30px] pb-[50px]"
  >
    <h2 class="text-center text-5xl md:text-6xl animate-pulse py-3">News</h2>
    <h3 class="font-sig text-[16px] font-semibold text-center pb-5">
      Find out the latest news in the world of art around the globe.
    </h3>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 
             gap-x-10 gap-y-10 
             justify-center place-items-center items-center"
    >
      <div
        v-for="newsItem in news"
        :key="newsItem.title"
        class="www relative w-[300px] h-[250px] md:w-[260px] lg:w-[260px] md:h-[260px] lg:h-[250px] hover:scale-125 transition delay-100 mt-12"
      >
        <img
          :src="newsItem.image"
          alt=""
          class="w-full h-full object-cover rounded-xl"
        />

        <div
          class="news_text w-[220px] md:w-[180px] lg:w-[220px] absolute top-[18%] 
                 left-1/2 -translate-x-1/2 
                 lg:left-[7%] md:left-[15%] md:translate-x-0 
                 text-center px-5 py-5 
                 bg-[rgba(0,0,0,0.3)]"
        >
          <h3 class="font-sig text-[14px] font-semibold text-white">
            {{ newsItem.title }}
          </h3>
          <h3 class="font-sig text-[12px] font-normal text-white">
            By {{ newsItem.contributor }}
          </h3>
          <a href="#" class="text-white font-sig text-[14px]">Read More..</a>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>

import { ref } from 'vue';

const news = ref([{
    id: '1',
    image: 'https://cdn4.premiumread.com/?url=https://www.japantimes.co.jp/japantimes/uploads/images/2025/05/15/468889.jpg?v=3.1&w=1000&q=100&f=jpg&t=1.52',
    title:'Emerging Asian artists converge at the world’s most beautiful museum',
    contributor: 'Arthur Conan',
},

{
    id: '2',
    image: 'https://cdn.sanity.io/images/cxgd3urn/production/e65cee483dfb70dc63bf61b99ab94b95a39444d4-1440x960.jpg?rect=1,0,1439,960&w=640&h=427&q=85&fit=crop&auto=format',
    title:'Adam Lindemann opens exhibition of 19th-century African sculpture and contemporary Black abstraction',
    contributor: 'John Doe',
},
{
    id: '3',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/koyokouoh-kluka-02.jpg?q=w_2000,c_fill/f_webp',
    title:'Koyo Kouoh, history-making curator of the 2026 Venice Biennale, has died, age 57',
    contributor: 'Paul Taylor',
}, 
{
    id: '4',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/img-7645-1.JPG?q=w_1160,c_fill/f_webp',
    title:'Russian artist reveals mystery Trump portrait gifted by Putin to the US president',
    contributor: 'Emily Rue',
}])



</script>



<style>
@media (min-width: 769px) and (max-width: 1024px) {
.www{
  width:220px !important;
}
.news_text{
  width: 190px;
  font-size: 10px;
}
}
</style>