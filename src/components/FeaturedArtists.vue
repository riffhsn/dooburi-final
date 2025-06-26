<template>
<section class="hidden categories py-[20px] md:py-[50px] px-[50px] bg-center bg-cover">
    <div class="container">
 <div>
        <h2 class="text-center md:text-6xl animate-pulse py-10">Featured Artists</h2>
    </div>       
    <div class="grid grid-cols-3 space-y-10 gap-x-10">
                        <div class="w-fit" v-for="featuredartist in featuredartists" :key="featuredcoll">
        <div class="shadow-black shadow-2xl relative rounded-[10px]">
            <img :src="featuredartist.image" class="rounded-[10px]  w-[400px] h-[400px]">
            <RouterLink to="/artists" class="absolute top-[50%] left-[50%] -translate-[50%] flex mx-auto text-center text-white text-xl bg-[rgba(0,0,0,0.6)] py-3 px-5 rounded-2xl">{{featuredartist.name}}</RouterLink>
            <RouterLink to="/artists" class="absolute top-[65%] left-[50%] -translate-[50%] flex mx-auto text-center text-white text-xl bg-[rgba(0,0,0,0.6)] py-3 px-5 rounded-2xl">{{featuredartist.profession}}</RouterLink>
        </div>
    </div>
        </div>
    </div>
</section>
</template>

<script setup>

 import { ref } from 'vue';
    
    const featuredartists = ref([
        {
        id: '1',
        image: 'https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Emilia Rose',
        profession: 'Painter'
    },
    
    {
        id: '2',
        image: 'https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Kerry Taylor',
        profession: 'Sculptor'
    },
    
    {
        id: '3',
        image: 'https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Taylor Walker',
        profession: 'Photographer'
    },
    {
        id: '4',
        image: 'https://images.pexels.com/photos/4192655/pexels-photo-4192655.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Mary Porter',
        profession: 'Painter'
    }, 
    {
        id: '5',
        image: 'https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Barbara Ylker',
        profession: 'Photographer'
    },
    
    {
        id: '6',
        image: 'https://images.pexels.com/photos/4823732/pexels-photo-4823732.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Mona Rye',
        profession: 'Photographer'
    },
    ])

</script>