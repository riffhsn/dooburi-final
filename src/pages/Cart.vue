<template>
    <section class="Cart pt-10 pb-24 sm:pt-12 sm:pb-28">
      <div class="container mx-auto px-4">
        <!-- Title -->
        <div>
          <h2 class="text-center text-3xl sm:text-4xl md:text-5xl py-6 sm:py-10">Your Cart</h2>
        </div>
  
        <!-- Header Row -->
        <div class="hidden md:flex shadow-xl">
          <div class="w-1/4 flex shadow-custom">
            <h3 class="text-sm md:text-base font-popo leading-6 py-6 pl-6">Product</h3>
          </div>
          <div class="w-1/4 flex justify-center shadow-custom">
            <h3 class="text-sm md:text-base font-popo leading-6 py-6">Price</h3>
          </div>
          <div class="w-1/4 flex justify-center shadow-custom">
            <h3 class="text-sm md:text-base font-popo leading-6 py-6">Quantity</h3>
          </div>
          <div class="w-1/4 flex justify-end shadow-custom">
            <h3 class="text-sm md:text-base font-popo leading-6 py-6 pr-6">Subtotal</h3>
          </div>
        </div>
  
        <!-- Cart Items -->
        <div
          v-for="(cart, index) in carts"
          :key="index"
          class="flex flex-col md:flex-row py-6 px-4 sm:px-8 shadow-xl mt-8 md:items-center"
        >
          <!-- Product -->
          <div class="w-full md:w-1/4 flex items-center mb-4 md:mb-0">
            <img :src="cart.image" class="w-20 h-auto" />
            <h3 class="text-sm md:text-base font-popo leading-6 pl-4">{{ cart.name }}</h3>
          </div>
  
          <!-- Price -->
          <div class="w-full md:w-1/4 flex justify-between md:justify-center items-center mb-4 md:mb-0">
            <span class="block md:hidden font-medium">Price:</span>
            <h3 class="text-sm md:text-base font-popo">${{ cart.price }}</h3>
          </div>
  
          <!-- Quantity -->
          <div class="w-full md:w-1/4 flex justify-between md:justify-center items-center mb-4 md:mb-0">
            <span class="block md:hidden font-medium">Qty:</span>
            <div class="flex border border-gray-400 rounded px-3 py-1 items-center">
              <input
                type="text"
                :value="cart.count"
                class="w-12 text-center text-sm outline-none bg-transparent"
              />
              <div class="flex flex-col ml-2 space-y-1">
                <i
                  @click="increment(index)"
                  class="fa-solid fa-chevron-up text-xs cursor-pointer"
                ></i>
                <i
                  @click="decrement(index)"
                  class="fa-solid fa-chevron-down text-xs cursor-pointer"
                ></i>
              </div>
            </div>
          </div>
  
          <!-- Subtotal -->
          <div class="w-full md:w-1/4 flex justify-between md:justify-end items-center">
            <span class="block md:hidden font-medium">Subtotal:</span>
            <h3 class="text-sm md:text-base font-popo pr-0 md:pr-10">
              ${{ cart.price * cart.count }}
            </h3>
          </div>
        </div>
  
        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row justify-between gap-4 mt-8">
          <button
            type="submit"
            class="bg-[#dbd0a7e3] text-sm sm:text-base text-gray-600 font-popo font-medium px-6 py-3 rounded-md"
          >
            Return To Shop
          </button>
          <button
            type="submit"
            class="bg-[#dbd0a7e3] text-sm sm:text-base text-gray-600 font-popo font-medium px-6 py-3 rounded-md"
          >
            Update Cart
          </button>
        </div>
  
        <!-- Cart Summary -->
        <div class="flex justify-center md:justify-end mt-16">
          <div class="w-full sm:w-2/3 md:w-1/3 border rounded p-5">
            <h2 class="text-lg md:text-xl font-popo font-medium pb-4">Cart Total</h2>
  
            <div class="flex justify-between border-b border-gray-400 pb-2 mb-2">
              <h3 class="text-sm md:text-base font-popo">Subtotal:</h3>
              <h3 class="text-sm md:text-base font-popo">${{ subtotal }}</h3>
            </div>
  
            <div class="flex justify-between border-b border-gray-400 py-2">
              <h3 class="text-sm md:text-base font-popo">Shipping:</h3>
              <h3 class="text-sm md:text-base font-popo">Free</h3>
            </div>
  
            <div class="flex justify-between border-b border-gray-400 py-2">
              <h3 class="text-sm md:text-base font-popo">Total:</h3>
              <h3 class="text-sm md:text-base font-popo">${{ subtotal }}</h3>
            </div>
  
            <RouterLink to="/checkout">
              <button
                type="submit"
                class="bg-[#dbd0a7e3] font-sig text-sm sm:text-base font-medium text-gray-600 rounded py-3 px-8 mt-6 w-full"
              >
                Proceed to checkout
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
    
    <script setup>
       
    import {ref, computed} from 'vue';
    import cart1 from '../assets/images/newarrival_3.jpg'
    import cart2 from '../assets/images/newarrival_2.jpg'
    
    const carts = ref([
    {id: 1,
        name: 'Angel Hope',
        price: '550',
        image: cart1,
        count:1
    },
    
    {id: 2,
        name: 'Ray of Hope',
        price: '550',
        image: cart2,
        count:1
    }
    ])
    
    const increment = (index)=> {
        carts.value[index].count++
    }
    
    const decrement = (index)=> {
        if(carts.value[index].count > 1){
            carts.value[index].count--
        }
    }
    
    const subtotal = computed(() =>
        carts.value.reduce((acc, cart) => acc + cart.price * cart.count, 0))
    

    
    </script>