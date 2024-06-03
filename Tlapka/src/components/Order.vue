<template>
  <main class="order">
    <h1>Práce na zakázku</h1>
    <section>
      <span>
        <p>
          Vyrábím hračky všeho druhu. Přesně podle vašeho přání. Hračky vytvářím
          z kvalitních materiálů ať už jde o dřevo nebo plast. Mé hračky jsou
          díky tomu ideální pro úplně každého. Pokud chcete přesnou hračku tak
          se nebojte poptat a vyplňte formulář dole.
        </p>
        <a class="order-button" href="#form">
          <i class="fa-solid fa-cart-shopping"></i>
          <p>Poptat</p>
        </a>
      </span>
      <span>
        <img src="../assets/img/teddy.png" alt="teddy" />
      </span>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/style/color.scss" as color;
@use "@/assets/style/mixin.scss" as mixin;

.order {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding-top: 100px;
  justify-content: center;

  h1 {
    font-size: 1.4rem;
    font-weight: 600;
    color: color.$gray-dark;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 100%;

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      gap: 1rem;
      padding: 2rem;
      box-sizing: border-box;
      line-height: 1.5;

      border-bottom: 2px solid color.$blue-light;

      &:nth-child(1) {
        border-right: 1px solid color.$blue-light;
      }

      &:nth-child(2) {
        border-left: 1px solid color.$blue-light;
      }

      p {
        width: 60%;
      }

      .order-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 0.5rem;
        background-color: color.$gray-dark;
        padding: 0.75rem 2rem;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
}

@include mixin.phone {
  .order {
    h1 {
      font-size: 1.2rem;
    }

    section {
      flex-direction: column;

      span {
        p {
          width: 100%;
        }
        button {
          width: 50%;
          padding: 1rem;
          p {
            width: 60%;
          }
        }
      }
    }
  }
}
</style>
