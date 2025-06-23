<template>

    <section class="photography py-[50px]">
    <div class="container">
        <div class="flex space-x-12 flex-wrap gap-y-15">
            <div class="w-1/5" v-for="sculpture in sculptures" >
                <div class="relative group:hover hover:scale-125 transition delay-100 cursor-pointer">
                    <div class="item bg-transparent text-center py-10 px-5 border-1 border-gray-400 bg-[url('https://images.pexels.com/photos/9809060/pexels-photo-9809060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-[4px] shadow-2xl">
                    <img :src="sculpture.image">
                    <h3 class="text-[16px] font-sig font-semibold pt-3">{{ sculpture.name }}</h3>
                <h3 class="text-[14px] font-sig font-semibold">By {{ sculpture.artist }}</h3>
                <h3 class="text-[14px] font-sig font-semibold">${{ sculpture.price }}</h3>
                </div>
                <div class="group-hover:transition overlay opacity-0 hover:opacity-100 bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 w-full h-full">
                    <div class="icons absolute top-[50%] left-[30%] -translate[-50%]">
                <RouterLink to="/product_description"><i class="fa-solid fa-plus text-white px-3 hover:text-[#e8ddc5] shadow-2xl"></i></RouterLink> 
                <RouterLink to="/cart"><i class="fa-solid fa-bag-shopping text-white px-3 hover:text-[#e8ddc5] shadow-2xl"></i></RouterLink> 
                <RouterLink to="/wishlist"><i class="fa-solid fa-heart text-white px-3 hover:text-red-400 shadow-2xl"></i></RouterLink>  
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
    
    const sculptures = ref([
        {
        id: '1',
        image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Scenic Heaven',
        artist: 'Adam Jose',
        price: '120'
    },
    
    {
        id: '2',
        image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Enigma',
        artist: 'Rose Emilia',
        price: '320',
    },
    
    {
        id: '3',
        image: 'https://images.pexels.com/photos/922610/pexels-photo-922610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Melody',
        artist: 'Allen James',
        price: '220',
    },
    {
        id: '4',
        image: 'https://images.pexels.com/photos/922610/pexels-photo-922610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        name: 'Melody',
        artist: 'Allen James',
        price: '220',
    }, 
    {
        id: '5',
        image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
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