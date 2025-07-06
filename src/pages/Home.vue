<template>

<section class="bg-[#708090]">

<Banner></Banner>
<Categories></Categories>
<About></About>
<ImageSlider></ImageSlider>
<FeaturedArtists></FeaturedArtists>
<Countdownsection></Countdownsection>
<Videos></Videos>
<News></News>
<Blog></Blog>

<section class="testimonial px-10 pb-20 pt-10  bg-cover bg-center mt-5">
<div class="container">
    <div class="testimonial_heading">
        <h2 class="text-[22px] sm:text-4xl font-bold text-center pb-10">Here's what our members are saying about us!</h2>
    </div>
    <div class="grid gap-y-10 md:grid-cols-2 md:gap-x-10">
        <div class="testimonial_item bg-[rgba(0,0,0,0.3)] py-5 px-5 rounded-[10px] h-[510px] md:h-[490px] sm:h-[286px] lg:h-[286px] text-white">
            <div class="testimonial_text flex sm:flex-nowrap flex-wrap md:flex-wrap lg:flex-nowrap">
           <div class="w-full flex justify-center sm:block" >
            <img :src="testimonial_1" class=" w-[100px] md:h-[210px] lg:h-[210px] sm:mt-0 mt-[-50px] md:mt-[-50px] lg:mt-0 md:ml-[85px] ml-[0px] sm:ml-0 lg:ml-[0] rounded-[50%] pt-10 img">
           </div>
            <h3 class="text-4xl lg:pt-10 sm:pt-10 pt-30 md:pt-30 sm:mt-0 lg:mt-0 mt-0 md:mt-10 mp lg:ml-0 ml-[-265px] sm:ml-0 md:ml-[-270px]">❝</h3>
            <h4 class="px-5 text-justify pt-1 md:pt-1 sm:pt-15 lg:pt-15">I am a passionate art lover and I have purchased a few paintings from Dooburi.
                Their art pieces are of top-notch quality and delivery is prompt. I would highly recommend 
                Dooburi as your your one-stop art piece collection store!
            </h4>
            <h3 class="qaut qau text-4xl pt-[-70px] md:pt-[0px] sm:pt-[150px] lg:mt-10 ml-[140px] sm:ml-[0px] lg:pt-[150px] lg:ml-[-10px] md:ml-[160px]">❞</h3>
            </div>
            <div class="rating  flex justify-start pt-0 sm:pt-10 md:pt-0 lg:pt-0 md:ml-[20px] lg:ml-[145px] sm:ml-[180px] ml-[20px]">
                <i class="fa-solid fa-star text-amber-400"></i>
            <i class="fa-solid fa-star text-amber-400"></i>
            <i class="fa-solid fa-star text-amber-400"></i>
            <i class="fa-solid fa-star text-amber-400"></i>
            <i class="fa-solid fa-star text-amber-400"></i>
            </div>

        </div>
        <div class="testimonial_item bg-[rgba(0,0,0,0.3)] py-5 px-5 rounded-[10px] h-[510px] md:h-[490px] sm:h-[286px] lg:h-[286px] text-white">
            <div class="testimonial_text flex sm:flex-nowrap flex-wrap md:flex-wrap lg:flex-nowrap">
           <div class="w-full flex justify-center sm:block" >
            <img :src="testimonial_2" class=" w-[100px] md:h-[210px] lg:h-[210px] sm:mt-0 mt-[-50px] md:mt-[-50px] lg:mt-0 md:ml-[85px] ml-[0px] sm:ml-0 lg:ml-[0] rounded-[50%] pt-10 img">

           </div>
           
            <h3 class="text-4xl lg:pt-10 sm:pt-10 pt-30 md:pt-30 sm:mt-0 lg:mt-0 mt-0 md:mt-10 mp lg:ml-0 ml-[-265px] sm:ml-0 md:ml-[-270px]">❝</h3>
            <h4 class="px-5 text-justify pt-1 md:pt-1 sm:pt-15 lg:pt-15">I am a passionate art lover and I have purchased a few paintings from Dooburi.
                Their art pieces are of top-notch quality and delivery is prompt. I would highly recommend 
                Dooburi as your your one-stop art piece collection store!
            </h4>
            <h3 class="qaut qau text-4xl pt-[-70px] md:pt-[0px] sm:pt-[150px] lg:mt-10 ml-[140px] sm:ml-[0px] lg:pt-[150px] xl:ml-[-10px] lg:ml-[480px] md:ml-[160px]">❞</h3>
            </div>
            <div class="rating  flex justify-start pt-0 sm:pt-10 md:pt-0 lg:pt-0 md:ml-[20px] lg:ml-[145px] sm:ml-[180px] ml-[20px]">
                <i class="fa-solid fa-star text-amber-400"></i>
            <i class="fa-solid fa-star text-amber-400"></i>
            <i class="fa-solid fa-star text-amber-400"></i>
            <i class="fa-solid fa-star text-amber-400"></i>
            <i class="fa-solid fa-star text-amber-400"></i>
            </div>

        </div>
    </div>
</div>
</section>

<Newsletter></Newsletter>


</section>

</template>

<script setup>

import Banner from '@/components/Banner.vue';
import Categories from '@/components/Categories.vue';
import About from '@/components/About.vue';
import ImageSlider from '@/components/ImageSlider.vue';
import testimonial_1 from '@/assets/images/testimonial_1.jpg'
import testimonial_2 from '@/assets/images/testimonial_2.jpg'
import Blog from '@/components/Blog.vue';
import Countdown from '@/components/Countdown.vue';
import Countdownsection from '@/components/Countdownsection.vue';
import Newsletter from '@/components/Newsletter.vue'
import News from '@/components/News.vue';
import FeaturedArtists from '@/components/FeaturedArtists.vue';
import Videos from '@/components/Videos.vue';

</script>

<style scoped>

.homepage-background {
    background-color: #708090;
}

@media(max-width: 376px) {
.testimonial_item{
    height: 530px;
}
.qaut{
    margin-left: 180px;
    margin-top: -25px;
}
.rating{
    margin-top: 40px;
    margin-left: 17px;
}
.img{
    height: 230px;
}
.mp{
    position: relative;
    top: 40px;
    left: 30px;
}
}
@media(min-width: 413px) and (max-width: 426px) {
.testimonial_item{
    height: 530px;
}
.qau{
    margin-left: 70px;
    margin-top: -20px;
}
.rating{
    margin-top: 40px;
    margin-left: 17px;
}
.img{
    height: 230px;
}
.mp{
    position: relative;
    top: 30px;
    left: 10px;
}
}
@media (min-width: 769px) and (max-width: 1024px) {
.testimonial_item{
    height: 350px;
    width: 470px;
}
.qaut{
    padding-top: 240px;
   position: absolute;
    left: 415px;
    margin-top: -50px;
}
.qat{
    padding-top: 240px;
   position: absolute;
    left: 900px;
    margin-top: -50px;

}
.qa{
    padding-top: 240px;
   position: absolute;
    left: 235px;
    margin-top: -30px;

}
.rating{
    margin-top: 20px;
}
.img{
    height: 250px;
    width: 140px !;
}
}
@media (min-width: 683px) and (max-width: 685px){
    .qaut{
        position: relative;
    left: -110px;
    margin-top: 6px;
    }
    .rating{
 margin-left:150px ;
    }
}
@media (min-width: 665px) and (max-width: 668px){
    .qaut{
        position: relative;
    left: -70px;
    margin-top: 6px;
    }
    .rating{
      margin-left:150px ;
    }
}
@media (min-width: 732px) and (max-width: 737px){
    .qaut{
        position: relative;
    left: -240px;
    margin-top: 6px;
    }
}
</style>