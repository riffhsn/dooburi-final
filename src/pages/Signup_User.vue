<template>
    <section class="signup pb-[140px] bg-cover bg-center bg-[url('https://images.pexels.com/photos/375882/pexels-photo-375882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="signup_form pt-[60px] md:pt-[125px] mx-auto">
            <form
              action=""
              method=""
              class="bg-white px-6 sm:px-10 md:pl-20 py-10 opacity-90 md:rounded-2xl w-[320px] sm:w-[400px] md:w-[585px]"
            >
              <div class="signup_head text-center md:text-left">
                <h2 class="font-sig font-semibold text-2xl md:text-3xl text-black py-3 md:py-5">
                  Welcome To Dooburi!
                </h2>
                <h3 class="text-xl md:text-[30px] leading-[30px] font-medium">Create an account</h3>
                <p class="font-sig font-semibold text-[14px] md:text-[16px] text-gray-500 py-4 md:py-5">
                  Enter your details below
                </p>
              </div>
  
              <div>
                <label class="font-sig text-[14px] text-black font-semibold block py-2 md:py-3">
                  Full Name<span class="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  class="text-[16px] leading-6 pb-2 focus:outline-0 w-full md:w-[370px] border-b-2 border-[rgba(0,0,0,0.3)]"
                />
              </div>
  
              <div>
                <label class="font-sig text-[14px] text-black font-semibold block py-2 md:py-3">
                  Address<span class="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Address"
                  class="text-[16px] leading-6 pb-2 focus:outline-0 w-full md:w-[370px] border-b-2 border-[rgba(0,0,0,0.3)]"
                />
              </div>
  
              <div>
                <label class="font-sig text-[14px] text-black font-semibold block py-2 md:py-3">
                  Email Address<span class="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  class="text-[16px] leading-6 pb-2 focus:outline-0 w-full md:w-[370px] border-b-2 border-[rgba(0,0,0,0.3)]"
                />
              </div>
  
              <div>
                <label class="font-sig text-[14px] text-black font-semibold block py-2 md:py-3">
                  Password<span class="text-red-400">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  class="text-[16px] leading-6 pb-2 focus:outline-0 w-full md:w-[370px] border-b-2 border-[rgba(0,0,0,0.3)]"
                />
              </div>
  
              <div>
                <label class="font-sig text-[14px] text-black font-semibold block py-2 md:py-3">
                  Confirm Password<span class="text-red-400">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  class="text-[16px] leading-6 pb-2 focus:outline-0 w-full md:w-[370px] border-b-2 border-[rgba(0,0,0,0.3)]"
                />
              </div>
  
              <button
                type="submit"
                class="bg-[#DB4444] py-3 md:py-4 px-10 md:px-[120px] w-full md:w-auto rounded-[4px] text-white text-[16px] font-sig leading-6 mt-[30px] md:mt-[40px]"
              >
                Create Account
              </button>
  
              <div class="googlesignup_btn">
                <button
                  type="submit"
                  class="flex justify-center items-center border border-[rgba(0,0,0,0.4)] py-3 md:py-4 px-6 md:px-[86px] mt-4 rounded-[4px] w-full md:w-auto"
                >
                <p class="font-sig text-[16px] leading-6">Sign up with Google</p>
                </button>
              </div>
  
              <div class="login_info flex justify-center md:justify-start pt-6 md:pt-8">
                <h4 class="font-sig text-[14px] md:text-[16px] leading-6 text-[rgba(0,0,0,0.7)] pr-[8px] md:pr-[16px]">
                  Already have account?
                </h4>
           <RouterLink to="/login"> <h4
                  class="font-sig text-[14px] md:text-[16px] leading-6 text-blue-400 border-b border-b-[rgba(0,0,0,0.7)]"
                >
                  Log in
                </h4> </RouterLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
    <script setup>
    
    import Nav from '@/components/Nav.vue';
    import Footer from '@/components/Footer.vue';
  
    import axios from 'axios';
    import { ref } from 'vue';

    const name = 'ref'
    const email = 'ref'
    const password = 'ref'

    const register = () => {
        axios.post('http://127.0.0.1:8000/api/customer/register'), {
            name: name.value,
            email: email.value,
            password: bcrypt(password.value),
        }
        .then(
            response => {
            console.log(response)
            } 
        )
        .catch(error=>{
            console.log(error);
        })
    }

    </script>