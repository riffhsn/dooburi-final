<template>

<section class="py-[100px] bg-[url('../assets/images/section_bg.jpg')]">
    <div class="container">
        <div class="flex">
            <div v-for="product in products" :key="product" class="items">
                <div class="space-x-5">
                    <img :src="explore_1">
                    <h3>{{products.name}}</h3>
                    <h3>{{ products.artist }}</h3>
                </div>
        </div>
        </div>
    </div>
</section>

</template>

<script setup>

import { ref } from 'vue';

import explore_1 from '../assets/images/pexels-pixabay-52718.jpg'

const products = ref({
    image: 'https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Teardrop',
    artist: 'Paula Raul'
},
{
    image: 'https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Sculpture',
    artist: 'Paula Raul'
}

)

</script>