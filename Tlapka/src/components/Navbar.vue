<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "#fff",
  },
  textColor: {
    type: String,
    default: "#333",
  },
  shadow: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <header
    :style="{
      'background-color': color,
      'box-shadow': shadow ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
    }"
  >
    <section class="logo">
      <img src="../assets/img/logo.png" alt="logo" />
    </section>
    <section class="menu">
      <ul class="menu-list">
        <li>
          <router-link to="/" :style="{ color: textColor }">Domů</router-link>
        </li>

        <li>
          <router-link to="/contact" :style="{ color: textColor }"
            >Zakázky</router-link
          >
        </li>
      </ul>
    </section>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/style/color.scss" as color;

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  height: 5rem;
}

.menu-list {
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
  font-weight: 500;
  font-size: 1.5rem;
}

.menu-list li {
  list-style: none;
}

.menu-list li a {
  text-decoration: none;
}

.logo img {
  height: 4rem;
}
</style>
