<template>

    <section class="abstract_photography py-[50px]">
    <div class="container">
        <div class="flex space-x-12 flex-wrap gap-y-15">
            <div class="w-1/5" v-for="photo in photos" >
                <div class="relative group:hover hover:scale-125 transition delay-100 cursor-pointer">
                    <div class="item bg-transparent text-center py-10 px-5 border-1 border-gray-400 bg-[url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-[4px] shadow-2xl">
                    <img :src="photo.image">
                    <h3 class="text-[16px] font-sig font-semibold pt-3 text-white">{{ photo.name }}</h3>
                <h3 class="text-[14px] font-sig font-semibold text-white">By {{ photo.artist }}</h3>
                <h3 class="text-[14px] font-sig font-semibold text-white">${{ photo.price }}</h3>
                </div>
                <div class="group-hover:transition overlay opacity-0 hover:opacity-100 bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 w-full h-full">
                    <div class="icons absolute inset-0 top-[50%] left-[30%] -translate[-50%]">
                <RouterLink to="/product_description"><i class="fa-solid fa-plus text-white px-3 hover:text-[#e8ddc5] shadow-2xl"></i></RouterLink> 
                <RouterLink to="/cart"><i class="fa-solid fa-bag-shopping text-white px-3 hover:text-[#e8ddc5] shadow-2xl"></i></RouterLink> 
                <RouterLink><i class="fa-solid fa-heart text-white px-3 hover:text-red-400 shadow-2xl"></i></RouterLink>  
                    </div>
    
    
            </div>
                </div>
    
                
            </div>
           
        </div>
    </div>
    </section>
    </template>
    
    <script setup>
    
    import { ref } from 'vue';
    
    const photos = ref([
        {
        id: '1',
        image: 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Scenic Heaven',
        artist: 'Adam Jose',
        price: '120'
    },
    
    {
        id: '2',
        image: 'https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Enigma',
        artist: 'Rose Emilia',
        price: '320',
    },
    
    {
        id: '3',
        image: 'https://images.pexels.com/photos/833418/pexels-photo-833418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Melody',
        artist: 'Allen James',
        price: '220',
    },
    {
        id: '4',
        image: 'https://images.pexels.com/photos/596792/pexels-photo-596792.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Melody',
        artist: 'Allen James',
        price: '220',
    }, 
    {
        id: '5',
        image: 'https://images.pexels.com/photos/459198/pexels-photo-459198.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Scenic Heaven',
        artist: 'Adam Jose',
        price: '120'
    },
    
    {
        id: '6',
        image: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Enigma',
        artist: 'Rose Emilia',
        price: '320',
    },
    
    {
        id: '7',
        image: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Melody',
        artist: 'Allen James',
        price: '220',
    },
    {
        id: '8',
        image: 'https://images.pexels.com/photos/922610/pexels-photo-922610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Melody',
        artist: 'Allen James',
        price: '220',
    },
    {
        id: '9',
        image: 'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Scenic Heaven',
        artist: 'Adam Jose',
        price: '120'
    },
    
    {
        id: '10',
        image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Enigma',
        artist: 'Rose Emilia',
        price: '320',
    },
    
    {
        id: '11',
        image: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Melody',
        artist: 'Allen James',
        price: '220',
    },
    {
        id: '12',
        image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Melody',
        artist: 'Allen James',
        price: '220',
    }
    ])
    
    </script>