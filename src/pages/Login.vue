<template>
    <section>
      <div class="flex flex-col md:flex-row">
        <!-- Left Side (Image and Intro) -->
        <div
          class="w-full md:w-1/2 py-20 px-6 md:px-20 bg-cover bg-center bg-[url('https://images.pexels.com/photos/13312438/pexels-photo-13312438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"
        >
          <h2 class="font-sig font-semibold text-2xl md:text-3xl text-white">
            Welcome To Our Community!
          </h2>
          <p
            class="font-sig text-white font-semibold py-3 text-justify text-sm md:text-base lg:pr-20 md:pr-0"
          >
            Welcome to Dooburi! The hub for art enthusiasts and artists. Join our
            community and enter the world of art. This is a digital platform where
            artists exhibit their art pieces and art enthusiasts can collect their
            favorite artworks. Engage with our community and stay connected to your
            inner artist.
          </p>
        </div>
  
        <!-- Right Side (Form) -->
        <div class="w-full md:w-1/2 py-12 px-6 md:py-[100px] md:px-[100px]">
          <h2 class="font-sig font-semibold text-2xl md:text-3xl text-black py-5 w-[250px]">
            Welcome Back!
          </h2>
          <p
            class="font-sig font-semibold text-sm md:text-base text-gray-500 w-[250px] lg:w-[300px] py-3 md:py-5 md:pr-[20px] md:run devpt-5"
          >
            Welcome back to Dooburi's world of creative art pieces. Login to
            explore curated art pieces from Dooburi.
          </p>
  
          <form action="" method="">
            <!-- Email -->
            <div class="w-full md:w-1/2">
              <label
                class="font-sig text-sm text-black font-semibold block py-2 md:py-3 w-[200px]"
                >Email Address<span class="text-red-400">*</span></label
              >
              <input
                type="email"
                placeholder="Enter Your Email Address"
                class="font-sig text-sm py-3 px-4 md:py-3 md:px-5 border border-[rgba(0,0,0,0.3)] w-full sm:w-[400px] md:w-[250px] rounded-2xl"
              />
            </div>
  
            <!-- Password -->
            <div class="w-full md:w-1/2">
              <label
                class="font-sig text-sm text-black font-semibold block py-2 md:py-3"
                >Password<span class="text-red-400">*</span></label
              >
              <input
                type="password"
                placeholder="Enter Your Password"
                class="font-sig text-sm py-3 px-4 md:py-3 md:px-5 border border-[rgba(0,0,0,0.3)] w-full sm:w-[400px] md:w-[250px]  rounded-2xl"
              />
            </div>
  
            <!-- Options: Remember me / Forgot Password -->
            <div class="flex flex-col sm:flex-row sm:space-x-6 pt-4 flex-wrap md:w-[270px] ">
              <div class="flex items-center space-x-2 py-2">
                <input type="checkbox" />
                <label class="font-sig text-sm text-black">Remember me</label>
              </div>
              <div class="flex items-center space-x-2 py-2">
                <input type="checkbox" />
                <label class="font-sig text-sm text-black">Forgot Password</label>
              </div>
            </div>
  
            <!-- Submit Button -->
            <div class="pt-4">
              <button
                type="submit"
                class="bg-[#dbd0a7e3] font-sig text-base font-semibold text-gray-700 cursor-pointer rounded-md py-3 px-8 md:py-4 md:px-12"
              >
                Login
              </button>
            </div>
  
            <!-- Sign Up Info -->
            <p
              class="font-sig font-semibold text-xs md:text-sm text-gray-500 py-4 md:pr-[0px]"
            >
              Don't have an account?
              <RouterLink
                to="/user"
                class="font-sig font-semibold text-xs md:text-sm text-blue-400"
                >Create a free account</RouterLink
              >
            </p>
          </form>
        </div>
      </div>
    </section>
  </template>
  
<script setup>

</script>