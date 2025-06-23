<template>
    <section class="abstract_photography py-[50px]">
    <div class="container">
        <div class="grid grid-cols-1 flex-wrap gap-y-15">
            <div v-for="photo in photos">
                <div class="flex border-gray-400 border-1 bg-[url('https://images.pexels.com/photos/7599587/pexels-photo-7599587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                     <div class="w-1/2">
                    <div class="relative group:hover cursor-pointer">
                    <div class="item text-center py-10 px-5 rounded-[4px] shadow-2xl">
                    <img :src="photo.image">
                    <h3 class="text-[16px] font-sig font-semibold pt-3 text-gray-500">{{ photo.artist }}</h3>
                <h3 class="text-[14px] font-sig font-semibold text-gray-500">{{ photo.profession }}</h3>
                        <p class="font-sig font-semibold text-[16px] text-gray-500 py-5">{{ photo.artist }} is a contemporary painter whose work explores the interplay of color, texture, and emotion. Drawing inspiration from nature, urban landscapes, and personal experiences, {{ photo.artist }} creates pieces that invite introspection and evoke a strong sense of place. With exhibitions in {{ photo.country }} and collectors across the globe, {{ photo.artist }} continues to evolve their artistic voice while pushing the boundaries of traditional painting techniques.</p>
                    </div>
                </div>
                    </div>
                    <div class="w-1/3 justify-center mx-auto py-10 space-y-5">
                        <div>
                        <h3 class="font-sig text-2xl text-center flex justify-center">Sample Artworks</h3>
                    </div>
                        <div class="flex justify-center mx-auto" v-for="painting in paintings">
                        <div class="item text-center py-5 px-5 border-1 border-gray-400 bg-[url('https://images.pexels.com/photos/9809060/pexels-photo-9809060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-[4px] shadow-2xl">
                    <img :src="painting.image">
                    <h3 class="text-[16px] font-sig font-semibold pt-3">{{ painting.name }}</h3>
                <h3 class="text-[14px] font-sig font-semibold">By {{ painting.artist }}</h3>
                <h3 class="text-[14px] font-sig font-semibold">${{ painting.price }}</h3>
                </div>
                </div>
                </div>
                <div>
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
        image: 'https://images.pexels.com/photos/1415268/pexels-photo-1415268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        artist: 'Emily Rose',
        profession: 'Painter',
        country: 'France',
        city: 'Paris'
    },
    
    {
        id: '2',
        image: 'https://images.pexels.com/photos/920377/pexels-photo-920377.jpeg?auto=compress&cs=tinysrgb&w=600', 
        artist: 'Rose Emilia',
        profession: 'Painter',
        country: 'France',
        city: 'Paris'
    },
    
    {
        id: '3',
        image: 'https://images.pexels.com/photos/936030/pexels-photo-936030.jpeg?auto=compress&cs=tinysrgb&w=600', 
        name: 'Melody',
        artist: 'Allen James',
        profession: 'Violinist',
        country: 'Spain',
        city: 'Barcelona'
    },
    {
        id: '4',
        image: 'https://images.pexels.com/photos/896108/pexels-photo-896108.jpeg?auto=compress&cs=tinysrgb&w=600', 
        artist: 'Allen James',
        profession: 'Painter',
        country: 'Japan',
        city: 'Tokyo'
    }, 
   
    ])

    const paintings = ref([
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

    ])
    
    </script>