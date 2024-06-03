<template>
  <swiper :modules="[Navigation, Pagination]" :navigation="{ nextEl: '.arrow-right', prevEl: '.arrow-left' }" pagination :slidesPerView="2" :slidesPerGroup="1"
    :spaceBetween="10">
    class="my-swiper">
    <swiper-slide v-for="(review, index) in reviews" :key="index">
      <Review :name="review.name" :desc="review.desc" :review="review.review" :rating="review.rating" />
    </swiper-slide>
  </swiper>

  <section class="arrows">
    <button class="arrow-left"><i class="fa-solid fa-angle-left"></i></button>
    <button class="arrow-right"><i class="fa-solid fa-angle-right"></i></button>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Review from "./Review.vue";

defineProps({
  reviews: Array,
});
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 20rem;
}

.swiper-slide {
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrows {
  display: flex;
  gap: 1.5rem;
  height: 3rem;

  >button {
    height: 100%;
    aspect-ratio: 1;
    background-color: #333333;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: 0.5s;
    border: none;

    &:hover {
      transform: scale(0.95);
      transition: 0.5s;
    }
  }
}
</style>
