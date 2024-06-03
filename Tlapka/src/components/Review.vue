<script setup>
const props = defineProps({
  name: String,
  desc: String,
  review: String,
  rating: Number,
});
</script>

<template>
  <section class="wrapper">
    <p>“</p>
    <p>{{ props.review }}</p>
    <section class="person">
      <section class="info">
        <section class="img"></section>
        <section>
          <p>{{ props.name }}</p>
          <p>{{ props.desc }}</p>
        </section>
      </section>
      <section class="rating">
        <i class="fa-solid fa-star" v-for="i in props.rating"></i>
        <i class="fa-regular fa-star" v-for="i in 5 - props.rating"></i>
        <p>{{ props.rating }}.0</p>
      </section>
    </section>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/style/color.scss" as color;
@use "@/assets/style/mixin.scss" as mix;

.wrapper {
  border: solid color.$black 5px;
  border-radius: 10px;
  width: 26rem;
  height: 15rem;
  padding: 2rem;

  @include mix.flex-stretch-height;

  > p:first-child {
    font-size: 4rem;
    font-weight: 900;
  }

  > p:nth-child(2) {
    color: color.$gray-light;
    line-height: 2rem;
  }

  > .person {
    height: 4rem;
    width: 100%;
    @include mix.flex-stretch-width;

    > .info {
      height: 100%;
      display: flex;
      align-items: end;
      gap: 0.5rem;

      > .img {
        height: 100%;
        aspect-ratio: 1;
        border-radius: 50%;

        background: url('@/assets/img/ball.png');
        background-position: center;
        background-size: cover;
      }

      > section:nth-child(2) {
        padding-bottom: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        > p:first-child {
          font-weight: 500;
        }

        > p:nth-child(2) {
          font-size: 0.8rem;
          color: color.$gray-light;
        }
      }
    }

    > .rating {
      display: flex;
      align-items: end;
      color: color.$gold;
      > p {
        margin-left: 0.5rem;
        font-size: 0.8rem;
        color: color.$gray-light;
      }
    }
  }
}

@include mix.phone {
  .wrapper {
    width: 100%;
    height: auto;
    padding: 1rem;

    > p:first-child {
      font-size: 2rem;
    }

    > p:nth-child(2) {
      font-size: 1rem;
    }

    > .person {
      margin-top: 1rem;
      height: auto;
      gap: 0.5rem;

      > .info {
        gap: 0.2rem;

        > .img {
          height: 3rem;
        }

        > section:nth-child(2) {
          > p:first-child {
            font-size: 1rem;
          }

          > p:nth-child(2) {
            font-size: 0.6rem;
          }
        }
      }

      > .rating {
        > p {
          font-size: 0.6rem;
        }
      }
    }
  }
}
</style>
