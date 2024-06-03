<template>
  <footer>
    <section class="wrapper">
      <section class="info">
        <h3>Tlapka</h3>
        <p>
          Založil jsem ho já
        </p>
        <p>shop@tlapka.cz</p>
      </section>

      <section class="contact">
        <section>
          <p>Kontakt</p>
        </section>
        <section>
          <p>Korycanská 7</p>
          <p>181 00 Praha 8</p>
        </section>
        <section>
          <p>Alois Upozda</p>
          <p>upozda@hrackynaprani.cz</p>
          <p> +420 392 202 303</p>
        </section>
      </section>

      <section class="links">
        <section class="logo">
          <div>
            <div class="img"></div>
          </div>
        </section>
        <section class="media-links">
          <a href="https://www.facebook.com/hrackynaprani" class="media"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/hrackynaprani" class="media"><i class="fa-brands fa-instagram"></i></a>
        </section>
      </section>
    </section>
  </footer>
</template>

<style scoped lang="scss">
@use "@/assets/style/color.scss" as color;
@use "@/assets/style/mixin.scss" as mix;

footer {
  width: 100%;
  background-color: color.$gray-dark;
  color: color.$white;
  font-size: 1.2rem;
  font-weight: 300;
  @include mix.flex-center;
  padding: 2rem 0;

  > .wrapper {
    width: 70%;
    @include mix.flex-stretch-width;
    justify-content: space-between;

    > section {
      @include mix.flex-stretch-height;
    }
  }
}

.info {
  width: 25rem;
  gap: 1rem;

  h3 {
    font-size: 2rem;
  }
}

.contact {
  @include mix.flex-center;
  flex-direction: column;
  gap: 1rem;

  > section {
    @include mix.flex-center;
    flex-direction: column;
    gap: 0.5rem;
  }
}

.links {
  width: 12rem;

  height: 14rem;
  @include mix.flex-stretch-height;


  > .logo {
    height: 75%;
    width: 100%;
    @include mix.flex-center;

    > div {
      height: 90%;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: color.$white;
      @include mix.flex-center;

      > .img {
        width: 100%;
        height: 100%;
        background-image: url("@/assets/img/logo.png");
        background-position: center;
        background-size: cover;
      }
    }
  }

  > .media-links {
    width: 100%;
    height: 20%;
    @include mix.flex-center;
    gap: 1rem;

    > .media {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: color.$white;
      @include mix.flex-center;
      color: color.$black;
      text-decoration: none;
    }
  }
}

@include mix.phone {
  footer {
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    > .wrapper {
      width: 80%;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      > .info {
        gap: 1rem;
      }
      > section {
        width: 100%;
        @include mix.flex-center;
        flex-direction: column;
      }
    }
  }

  .info {
    width: 100%;
    text-align: center;
    padding: 0 1rem;
  }

  .contact {
    width: 100%;
    gap: 0.5rem;
  }

  .links {
    width: 100%;
    gap: 1rem;

    > .logo {
      width: 100%;
      height: 10rem;
      max-height: 10rem;
    }

    > .media-links {
      width: 100%;
      height: 4rem;
      gap: 1rem;
      justify-content: center;
    }
  }
}

@include mix.tablet {
  footer {
    padding: 2rem 0;
    > .wrapper {
      width: 80%;
      gap: 2rem;
      > .info {
        gap: 1rem;
      }
    }
  }

  .info {
    width: 100%;
    text-align: center;
    padding: 0 1rem;
  }

  .contact {
    width: 100%;
    gap: 0.5rem;
  }

  .links {
    width: 100%;
    gap: 1rem;

    > .logo {
      width: 100%;
      height: 10rem;
      max-height: 10rem;
    }

    > .media-links {
      width: 100%;
      height: 4rem;
      gap: 1rem;
      justify-content: center;
    }
  }
}
</style>
