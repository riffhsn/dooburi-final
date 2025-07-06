<template>

<img :src="explore_1" class="w-[20%]">

<section class="py-[50px]">
<div class="flex items-center">
<div class="md:w-[50%] py-5 ">
    <img :src="explore_1" class="py-5">
</div>
<div>
    <div>
        <h3 class="font-sig text-[20px] font-semibold text-center mt-[-80px] sm:mt-[-70px] md:mt-[-70px] lg:mt-0 py-5 text-black">Grab the Curator's Pick of the Day before the deal ends!</h3>
    </div>
            <div class="flex gap-x-2 sm:gap-x-4 md:gap-x-10 justify-center text-center">
             <div>
                <h3 class="font-sig font-semibold text-gray-200 text-2xl md:text-4xl px-5 py-5 bg-[#0059b3] rounded-2xl">{{ displayDays }}</h3> 
                <p class="font-sig font-semibold text-[20px] text-black">Days</p>
            </div>
            <div>
                <h3 class="font-sig font-semibold text-2xl md:text-4xl text-gray-200 px-5 py-5 bg-[#0059b3] rounded-2xl">{{ displayHours }}</h3> 
                <p class="font-sig font-semibold text-[20px] text-black">Hours</p>
            </div>          
                <div>
                <h3 class="font-sig font-semibold text-2xl md:text-4xl text-gray-200 px-5 py-5 bg-[#0059b3] rounded-2xl">{{ displayMinutes }}</h3> 
                <p class="font-sig font-semibold text-[20px] text-black">Minutes</p>
            </div>
                <div>
                <h3 class="font-sig font-semibold text-2xl md:text-4xl text-gray-200 px-5 py-5 bg-[#0059b3] rounded-2xl">{{ displaySeconds }}</h3> 
                <p class="font-sig font-semibold text-[20px] text-black">Seconds</p>
            </div>
        </div>
    </div>
        </div>
 </section>
</template>

<script>

import explore_1 from '../assets/images/pexels-pixabay-52718.jpg';

export default {
    data: () => ({
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0
    }),

    computed: {
        _seconds: () => 1000,
        _minutes() {
            return this._seconds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        }
    },

    mounted() {
        this.showRemaining();
    },

    methods: {
        showRemaining() {
            const timer = setInterval(()=>{
                const now = new Date();
                const end = new Date( 2025, 7, 10, 10, 10, 10);
                const distance =  end.getTime() - now.getTime();

                if (distance <0) {
                    clearInterval(timer);
                }

                const days = Math.floor(distance/this._days);
                const hours = Math.floor((distance % this._days)/ this._hours);
                const minutes = Math.floor((distance % this._hours)/ this._minutes)
                const seconds = Math.floor((distance % this._minutes)/ this._seconds)
                this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
                this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
                this.displayHours = hours < 10 ? "0" + hours : hours;
                this.displayDays = days < 10 ? "0" + days : days;

                }, 1000);
        }
    }
};

</script>