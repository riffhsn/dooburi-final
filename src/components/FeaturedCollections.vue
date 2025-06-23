<template>
<section class="featured-collection hidden py-[50px] px-[50px] bg-center bg-cover bg-[url('../assets/images/section_bg.jpg')]">
    <div class="container">
 <div>
        <h2 class="text-center text-6xl animate-pulse py-10">Featured Collections</h2>
    </div>     
    <div class="grid grid-cols-3 space-y-10 gap-x-10">
                        <div class="w-fit" v-for="featuredcoll in featuredcolls" :key="featuredcoll">
        <div class="shadow-black shadow-2xl relative rounded-[10px]">
            <img :src="featuredcoll.image" class="rounded-[10px]  w-[400px] h-[300px]">
            <RouterLink to="/photography" class="absolute top-[50%] left-[50%] -translate-[50%] flex mx-auto text-center text-white text-xl bg-[rgba(0,0,0,0.6)] py-3 px-5 rounded-2xl">{{featuredcoll.name}}</RouterLink>
        </div>
    </div>
        </div>
    </div>
</section>
</template>

<script setup>

 import { ref } from 'vue';
    
    const featuredcolls = ref([
        {
        id: '1',
        image: 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Animal Photography',
    },
    
    {
        id: '2',
        image: 'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Abstract Paintings',
    },
    
    {
        id: '3',
        image: 'https://images.pexels.com/photos/5393589/pexels-photo-5393589.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Terracotta Handicrafts',
    },
    {
        id: '4',
        image: 'https://images.pexels.com/photos/4708734/pexels-photo-4708734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Water Paintings',
    }, 
    {
        id: '5',
        image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Acrylic Paintings',
    },
    
    {
        id: '6',
        image: 'https://images.pexels.com/photos/6432802/pexels-photo-6432802.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Realism',
    },
    ])

</script>