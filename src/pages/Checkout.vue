<template>
    <section class="checkout py-[50px] px-[20px]">
      <div class="container">
        <!-- Responsive wrapper -->
        <div class="flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-20">
          <!-- Billing Details -->
          <div class="w-full md:w-[50%]">
            <div class="checkout_head">
              <h2 class="font-sig font-semibold text-2xl sm:text-3xl">Billing Details</h2>
            </div>
            <form method="POST" action="" class="mt-4">
              <div>
                <label class="font-sig text-sm text-black font-semibold block py-2">Full Name<span class="text-red-400">*</span></label>
                <input type="text" placeholder="Enter Your Full Name" class="text-sm font-sig py-3 px-5 border border-gray-300 w-full rounded-2xl" />
              </div>
              <div>
                <label class="font-sig text-sm text-black font-semibold block py-2">Company Name</label>
                <input type="text" placeholder="Enter Your Company Name" class="text-sm font-sig py-3 px-5 border border-gray-300 w-full rounded-2xl" />
              </div>
              <div>
                <label class="font-sig text-sm text-black font-semibold block py-2">Street Address<span class="text-red-400">*</span></label>
                <input type="text" placeholder="Enter Your Street Details" class="text-sm font-sig py-3 px-5 border border-gray-300 w-full rounded-2xl" />
              </div>
              <div>
                <label class="font-sig text-sm text-black font-semibold block py-2">Apartment, floor, etc.</label>
                <input type="text" placeholder="Enter Your Address Details" class="text-sm font-sig py-3 px-5 border border-gray-300 w-full rounded-2xl" />
              </div>
              <div>
                <label class="font-sig text-sm text-black font-semibold block py-2">Town/City</label>
                <select class="w-full py-3 px-5 border border-gray-300 rounded-2xl text-sm font-sig">
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Sylhet</option>
                  <option>Rajshahi</option>
                  <option>Khulna</option>
                </select>
              </div>
              <div>
                <label class="font-sig text-sm text-black font-semibold block py-2">Phone Number<span class="text-red-400">*</span></label>
                <input type="text" placeholder="Enter Your Phone Number" class="text-sm font-sig py-3 px-5 border border-gray-300 w-full rounded-2xl" />
              </div>
              <div>
                <label class="font-sig text-sm text-black font-semibold block py-2">Email Address<span class="text-red-400">*</span></label>
                <input type="email" placeholder="Enter Your Email Address" class="text-sm font-sig py-3 px-5 border border-gray-300 w-full rounded-2xl" />
              </div>
            </form>
          </div>
  
          <!-- Order Summary -->
          <div class="w-full md:w-[50%] py-10 md:py-20">
            <div>
              <div class="order flex flex-col gap-y-4" v-for="cart in carts">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-x-4">
                    <img :src="cart.image" class="w-[60px] h-auto object-contain" />
                    <h3 class="font-sig font-semibold text-sm sm:text-base text-gray-500">{{ cart.name }}</h3>
                  </div>
                  <h3 class="font-sig font-semibold text-sm sm:text-base text-gray-500">${{ cart.price }}</h3>
                </div>
              </div>
  
              <!-- Totals -->
              <div class="flex justify-between border-b border-gray-400 mt-6">
                <h3 class="font-sig font-semibold text-sm sm:text-base text-gray-500 py-2">Subtotal:</h3>
                <h3 class="font-sig font-semibold text-sm sm:text-base text-gray-500 py-2 px-2">${{ subtotal }}</h3>
              </div>
              <div class="border-b border-gray-400 flex justify-between">
                <h3 class="font-sig font-semibold text-sm sm:text-base text-gray-500 py-2">Shipping:</h3>
                <h3 class="font-sig font-semibold text-sm sm:text-base text-gray-500 py-2 px-2">Free</h3>
              </div>
              <div class="flex justify-between">
                <h3 class="font-sig font-semibold text-sm sm:text-base text-gray-500 py-2">Total:</h3>
                <h3 class="font-sig font-semibold text-sm sm:text-base text-gray-500 py-2 px-2">${{ subtotal }}</h3>
              </div>
  
              <!-- Payment Options -->
              <div class="mt-6">
                <h3 class="font-sig font-semibold text-sm sm:text-base text-gray-500 py-2">Payment Option</h3>
                <div class="flex items-center space-x-2">
                  <input type="radio" id="payment1" name="payment_method" />
                  <label for="payment1" class="font-sig text-sm text-black font-semibold">Cash On Delivery</label>
                </div>
                <div class="flex items-center space-x-2">
                  <input type="radio" id="payment2" name="payment_method" />
                  <label for="payment2" class="font-sig text-sm text-black font-semibold">Debit/Credit Card</label>
                </div>
                <div class="flex items-center space-x-2">
                  <input type="radio" id="payment3" name="payment_method" />
                  <label for="payment3" class="font-sig text-sm text-black font-semibold">Bkash</label>
                </div>
              </div>
  
              <!-- Button -->
              <button type="button" class="w-full sm:w-auto font-sig text-sm text-gray-500 font-semibold px-8 py-3 bg-[#dbd0a7e3] rounded mt-8">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  

<script setup>

import { ref, computed } from 'vue';
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

const subtotal = computed(() =>
        carts.value.reduce((acc, cart) => acc + cart.price * cart.count, 0))

</script>