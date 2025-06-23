<template>
    <section class="signup py-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div class="container mx-auto">
        <form method="" action="" class="bg-white py-10 px-6 sm:px-10 md:px-16 rounded-2xl shadow-2xl opacity-95 max-w-5xl mx-auto">
          <div class="signup_header text-center mb-8">
            <h2 class="font-sig font-semibold text-2xl sm:text-3xl">Are You An Artist? Join Dooburi To Sell Your Artwork!</h2>
          </div>
    
          <div class="space-y-6">
            <!-- Name -->
            <div>
              <label class="font-sig text-sm font-semibold block">Your Name</label>
              <input type="text" placeholder="Enter Your Full Name" class="font-sig text-sm block py-3 px-5 border border-gray-300 w-full rounded-xl">
            </div>
    
            <!-- Username -->
            <div>
              <label class="font-sig text-sm font-semibold block">Username</label>
              <input type="text" placeholder="Enter Your Preferred Username" class="font-sig text-sm block py-3 px-5 border border-gray-300 w-full rounded-xl">
            </div>
    
            <!-- Date of Birth -->
            <div>
              <label class="font-sig text-sm font-semibold block">Date Of Birth</label>
              <input type="date" class="font-sig text-sm block py-3 px-5 border border-gray-300 w-full rounded-xl">
            </div>
    
            <!-- Nationality -->
            <div>
              <label class="font-sig text-sm font-semibold block">Nationality</label>
              <input type="text" placeholder="Enter Your Nationality" class="font-sig text-sm block py-3 px-5 border border-gray-300 w-full rounded-xl">
            </div>
    
            <!-- Phone Number -->
            <div>
              <label class="font-sig text-sm font-semibold block">Phone Number</label>
              <input type="tel" placeholder="Enter Your Phone Number" class="font-sig text-sm block py-3 px-5 border border-gray-300 w-full rounded-xl">
            </div>
    
            <!-- Email -->
            <div>
              <label class="font-sig text-sm font-semibold block">Email Address</label>
              <input type="email" placeholder="Enter Your Email Address" class="font-sig text-sm block py-3 px-5 border border-gray-300 w-full rounded-xl">
            </div>
    
            <!-- Address -->
            <div>
              <label class="font-sig text-sm font-semibold block">Address</label>
              <input type="text" placeholder="Enter Your Address" class="font-sig text-sm block py-3 px-5 border border-gray-300 w-full rounded-xl">
            </div>
    
            <!-- Artistic Category -->
            <div>
              <label class="font-sig text-sm font-semibold block mb-2">Artistic Category</label>
              <div class="space-y-2">
                <label class="block"><input type="checkbox" class="mr-2">Painter</label>
                <label class="block"><input type="checkbox" class="mr-2">Photographer</label>
                <label class="block"><input type="checkbox" class="mr-2">Sculptor</label>
                <label class="block"><input type="checkbox" class="mr-2">Ornament Designer</label>
                <label class="block"><input type="checkbox" class="mr-2">Music Composer</label>
                <label class="block"><input type="checkbox" class="mr-2">Other (please specify):</label>
                <input type="text" class="block w-full border border-gray-300 rounded-xl py-3 px-5 mt-2">
              </div>
            </div>
    
            <!-- Short Bio -->
            <div>
              <label class="font-sig text-sm font-semibold block">Short Bio</label>
              <textarea placeholder="Tell Us Something About Your Work & Yourself" class="w-full border border-gray-300 rounded-xl py-3 px-5 font-sig text-sm resize-none"></textarea>
            </div>
    
            <!-- Art Type -->
            <div>
              <label class="font-sig text-sm font-semibold block">Types of Artworks/Products You Intend To Sell (briefly describe):</label>
              <textarea placeholder="Tell Us Something About Your Artwork" class="w-full border border-gray-300 rounded-xl py-3 px-5 font-sig text-sm resize-none"></textarea>
            </div>
    
            <!-- Price Range -->
            <div>
              <label class="font-sig text-sm font-semibold block">Price Range Of Your Products (approximate):</label>
              <textarea placeholder="Estimated range (e.g. $20-$500)" class="w-full border border-gray-300 rounded-xl py-3 px-5 font-sig text-sm resize-none"></textarea>
            </div>
    
            <!-- Commission Work -->
            <div>
              <label class="font-sig text-sm font-semibold block">Do You Offer Custom/Commissioned Work?</label>
              <div class="space-x-4 mt-2">
                <label><input type="checkbox" class="mr-1">Yes</label>
                <label><input type="checkbox" class="mr-1">No</label>
              </div>
            </div>
    
            <!-- Shipping -->
            <div>
              <label class="font-sig text-sm font-semibold block">Shipping Capabilities:</label>
              <div class="space-x-4 mt-2">
                <label><input type="checkbox" class="mr-1">Local Only</label>
                <label><input type="checkbox" class="mr-1">International</label>
                <label><input type="checkbox" class="mr-1">Both</label>
              </div>
            </div>
    
            <!-- Payment Info -->
            <div>
              <h3 class="font-sig font-semibold text-lg pt-4">Payment Information</h3>
              <label class="font-sig text-sm font-semibold block mt-2">Preferred Payment Method:</label>
              <div class="space-y-2 mt-2">
                <label><input type="checkbox" class="mr-1 pr-3">Bank Transfer</label>
                <label><input type="checkbox" class="mr-1">Mobile Payment (e.g. bKash, PayPal)</label>
              </div>
    
              <div class="mt-4 space-y-4">
                <div>
                  <label class="font-sig text-sm font-semibold block">Account Name</label>
                  <input type="text" placeholder="Enter Your Account Name" class="w-full border border-gray-300 rounded-xl py-3 px-5">
                </div>
                <div>
                  <label class="font-sig text-sm font-semibold block">Account Number/Mobile Wallet Number</label>
                  <input type="text" placeholder="Enter Your Account Number" class="w-full border border-gray-300 rounded-xl py-3 px-5">
                </div>
                <div>
                  <label class="font-sig text-sm font-semibold block">Bank Name/Payment Platform</label>
                  <input type="text" placeholder="Enter Bank or Platform" class="w-full border border-gray-300 rounded-xl py-3 px-5">
                </div>
              </div>
            </div>
    
            <!-- Achievements -->
            <div>
              <h3 class="font-sig font-semibold text-lg pt-4">Achievements & Recognition <span class="italic text-sm font-normal">(Optional but recommended)</span></h3>
              <p class="font-sig text-sm mb-2">List awards, exhibitions, media mentions, etc.</p>
              <textarea placeholder="Write..." class="w-full border border-gray-300 rounded-xl py-3 px-5 font-sig text-sm resize-none"></textarea>
            </div>
    
            <!-- Declaration -->
            <div>
              <h3 class="font-sig font-semibold text-lg pt-4">Declaration <span class="text-red-500">*</span></h3>
              <div class="space-y-2 mt-2">
                <label class="block font-sig text-sm font-semibold"><input type="checkbox" class="mr-2">I confirm all information is accurate and I am the original creator of my artworks.</label>
                <label class="block font-sig text-sm font-semibold"><input type="checkbox" class="mr-2">I agree to Dooburi's terms of service and seller policy.</label>
              </div>
    
              <!-- Signature -->
              <div class="mt-4">
                <label class="font-sig text-sm font-semibold block">Signature (Typed or Signed):</label>
                <input type="text" placeholder="Sign Here" class="w-full border border-gray-300 rounded-xl py-3 px-5">
                <input type="date" class="block mt-3 w-full border border-gray-300 rounded-xl py-3 px-5">
              </div>
            </div>
    
            <!-- Submit -->
            <div class="text-center mt-8">
              <button type="submit" class="bg-[#dbd0a7e3] font-sig text-base font-medium text-gray-600 rounded-lg py-3 px-10 shadow-md hover:bg-[#d1c799] transition duration-300">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </section>
    </template>
    

<script setup>
</script>