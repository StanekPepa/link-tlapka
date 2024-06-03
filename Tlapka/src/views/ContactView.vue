<script setup>
import Navbar from "@/components/Navbar.vue";
import Order from "@/components/Order.vue";
import Form from "@/components/form.vue";
</script>

<template>
  <Navbar shadow="true" />
  <Order />
  <h2 id="form">Kontaktujte nás</h2>
  <Form />
</template>

<style scoped lang="scss">
h2 {
  font-size: 1.4rem;
  text-align: center;
  margin: 70px 0 100px;
  font-weight: 600;
}
</style>
