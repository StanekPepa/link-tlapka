<script setup>
import Review from "@/components/Review.vue";
import Navbar from "@/components/Navbar.vue";
import Slider from "@/components/Slider.vue";
import SliderPhone from "@/components/SliderPhone.vue";
import SliderTablet from "@/components/SliderTablet.vue";
import { ref, onMounted } from "vue";

const background = ref(0);
const oldBackground = ref();

const progressWidth = ref(0);

const startProgress = () => {
  const duration = 5000;
  const interval = 5;
  const increment = 100 / (duration / interval);

  const intervalId = setInterval(() => {
    if (progressWidth.value < 100) {
      progressWidth.value += increment;
    } else {
      changeBackground();
    }
  }, interval);
};

const reviewData = [
  {
    name: "Vojtěch Nový",
    desc: "CEO",
    review:
      "Velmi kvalitní provedení.",
    rating: 4,
  },
  {
    name: "Samuel Malý",
    desc: "Doktor",
    review:
      "Krásné ručně vyráběné hračky.",
    rating: 5,
  },
  {
    name: "Adéla Slováková",
    desc: "Květinářka",
    review:
      "Moje děti tyto hračky milují.",
    rating: 4,
  },
  {
    name: "Alex Starý",
    desc: "Politický komentátor",
    review:
      "Hračky byly vyrobené přesně dle mých představ.",
    rating: 5,
  }
];
const changeBackground = (bg = background.value + 1) => {
  if (bg > 2) bg = 0;
  console.log(background.value);
  oldBackground.value = background.value;
  background.value = bg;
  progressWidth.value = 0;
  clearInterval(intervalId);
  startProgress();
};

onMounted(() => {
  startProgress();
});
</script>

<template>
  <main>
    <Navbar color="transparent" class="navbar" textColor="#FFF" />

    <section class="hero">
      <div
        class="background"
        :class="{ selected: background === 0, deselected: oldBackground === 0 }"
      ></div>
      <div
        class="background"
        :class="{ selected: background === 1, deselected: oldBackground === 1 }"
      ></div>
      <div
        class="background"
        :class="{ selected: background === 2, deselected: oldBackground === 2 }"
      ></div>
      <section class="wrapper">
        <h1>Tlapka</h1>
        <p>
          Hracky na miru,<br />
          s presnosti a podle vasich predstav
        </p>
        <div class="load">
          <div :style="{ width: progressWidth + '%' }"></div>
        </div>
        <section class="dots">
          <div
            :class="{ selected: background === 0 }"
            @click="changeBackground(0)"
          ></div>
          <div
            :class="{ selected: background === 1 }"
            @click="changeBackground(1)"
          ></div>
          <div
            :class="{ selected: background === 2 }"
            @click="changeBackground(2)"
          ></div>
        </section>
      </section>
    </section>

    <section class="about">
      <h2>O nás</h2>
      <section class="wrapper">
        <section class="values">
          <section class="value">
            <section class="icon">
              <i class="fa-solid fa-ruler-horizontal"></i>
            </section>
            <section class="wrapper">
              <h4>Na míru</h4>
              <p>
                S přesnostní <br />
                a podle požadavků bez předsudku
              </p>
            </section>
          </section>
          <section class="value">
            <section class="icon"><i class="fa-solid fa-paw"></i></section>
            <section class="wrapper">
              <h4>Dlouholetá zkušenost a tradice</h4>
              <p>
                Máme mnoho zkušeností <br />
                a tisíce spokojených zákazníků
              </p>
            </section>
          </section>
          <section class="value">
            <section class="icon">
              <i class="fa-solid fa-arrow-rotate-left"></i>
            </section>
            <section class="wrapper">
              <h4>Opakovatelnost</h4>
              <p>
                Vaše hračky si dlouhodobě dokumentujeme <br />
                a můžeme je kdykoliv přesně replikovat
              </p>
            </section>
          </section>
        </section>
        <section class="img"></section>
      </section>
    </section>

    <section class="review">
      <h2>Naše recenze</h2>
      <Slider :reviews="reviewData" />
    </section>
    <section class="review-phone">
      <h2>Naše recenze</h2>
      <SliderPhone :reviews="reviewData" />
    </section>
    <section class="review-tablet">
      <h2>Naše recenze</h2>
      <SliderTablet :reviews="reviewData" />
    </section>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/style/color.scss" as color;
@use "@/assets/style/mixin.scss" as mix;

@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap");
.review-phone {
  display: none;
}

.review-tablet {
  display: none;
}

.navbar {
  position: absolute;
  width: 100%;
}

main {
  width: 100%;
  min-height: 100vh;
}

.hero {
  width: 100%;
  height: 50rem;
  color: color.$white;

  display: flex;
  justify-content: start;
  align-items: end;
  position: relative;

  > .background {
    width: 100%;
    height: 100%;

    position: absolute;
    opacity: 0;

    &:first-child {
      background: url("@/assets/img/horse.png");
      background-position: center;
      background-size: cover;
    }

    &:nth-child(2) {
      background: url("@/assets/img/ufo.png");
      background-position: center;
      background-size: cover;
    }

    &:nth-child(3) {
      background: url("@/assets/img/sheep.png");
      background-position: center;
      background-size: cover;
    }

    &.selected {
      opacity: 1;
    }

    &.deselected {
      opacity: 0;
      transition: 1s;
      z-index: 2;
    }
  }

  > .wrapper {
    z-index: 10;
    padding: 4rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > h1 {
      font-size: 5rem;
      font-family: "Leckerli One", cursive;
    }

    p {
      font-family: "Leckerli One", cursive;
      font-size: 1.5rem;
    }

    > .load {
      width: 25rem;
      height: 0.3rem;
      border: 1px solid color.$white;

      > div {
        height: 100%;
        width: 60%;
        background-color: color.$blue-light;
      }
    }

    > .dots {
      display: flex;
      gap: 2rem;

      > div {
        background-color: color.$white;
        width: 0.5rem;
        aspect-ratio: 1;
        border-radius: 50%;

        &.selected {
          background-color: color.$blue-light;
        }
      }
    }
  }
}

.about,
.review {
  padding: 3rem;
  @include mix.flex-center;
  flex-direction: column;
  gap: 3rem;

  > h2 {
    font-size: 1.8rem;
    font-weight: 700;
  }
}

.about {
  > .wrapper {
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > .img,
    > .values {
      height: 28rem;
      aspect-ratio: 1;
    }

    > .values {
      @include mix.flex-center;
      flex-direction: column;
      gap: 1rem;

      > .value {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
        @include mix.flex-center;
        gap: 2rem;

        > .wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 60%;

          > h4 {
            font-weight: 600;
            font-size: 1.2rem;
          }
        }

        > .icon {
          width: 18%;
          aspect-ratio: 1;
          border-radius: 50%;
          background-color: color.$blue-light;
          @include mix.flex-center;
          color: color.$white;
          font-size: 2.5rem;
        }
      }
    }

    > .img {
      border-radius: 5%;
      background: url("@/assets/img/ball.png");
      background-position: center;
      background-size: cover;
    }
  }
}

@include mix.phone {
  .review {
    display: none;
  }

  .review-phone {
    display: block;
    padding: 2rem;

    h2 {
      font-size: 1.5rem;
    }
  }

  .hero {
    height: 30rem;

    .wrapper {
      padding: 2rem;

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1rem;
      }

      .load {
        width: 15rem;
        height: 0.3rem;

        div {
          width: 40%;
        }
      }

      .dots {
        div {
          width: 0.3rem;
        }
      }
    }
  }

  .about {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .wrapper {
      width: 100%;
      flex-direction: column;

      .values {
        width: 100%;
        margin-bottom: 2rem;

        > .value > .icon {
          font-size: 1rem;
        }
      }

      .img {
        margin-bottom: 2rem;
        width: 100%;
        height: 10rem;
      }
    }
  }

  .review {
    padding: 1rem;

    h2 {
      font-size: 1.5rem;
    }

    .wrapper {
      flex-direction: column;
      width: auto;
      height: auto;

      .person {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
}

@include mix.tablet {
  .review {
    display: none;
  }

  .review-tablet {
    display: block;
    padding: 2rem;

    h2 {
      font-size: 1.5rem;
    }
  }
  .about {
    padding: 2rem;

    .wrapper {
      flex-direction: column;

      .values {
        width: 100%;
        gap: 2rem;
        margin-bottom: 1.5rem;

        .value {
          width: 100%;
          height: auto;
        }
      }

      .img {
        width: 100%;
        height: auto;
      }
    }
  }

  .review {
    padding: 2rem;

    h2 {
      font-size: 1.6rem;
    }

    .wrapper {
      flex-direction: column;
      width: auto;
      height: auto;
    }
  }
}
</style>
