<script setup>
import { ref } from "vue";

const name = ref("");
const surname = ref("");
const email = ref("");
const workDescription = ref("");

const submitForm = () => {
  console.log({
    name: name.value,
    surname: surname.value,
    email: email.value,
    workDescription: workDescription.value,
  });

  name.value = "";
  surname.value = "";
  email.value = "";
  workDescription.value = "";
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="name">
      <div class="wrapper label-wrap">
        <label for="name">Jméno:</label>
        <input id="name" v-model="name" type="text" required />
      </div>
      <div class="wrapper label-wrap">
        <label for="surname">Příjmení:</label>
        <input id="surname" v-model="surname" type="text" required />
      </div>
    </div>

    <div class="mail-wrapper label-wrap">
      <label for="email" class="lable-gap">Email:</label>
      <input id="email" v-model="email" type="email" required />
    </div>

    <div class="label-wrap">
      <label for="workDescription" class="lable-gap">Popis zakázky:</label>
      <textarea
        id="workDescription"
        v-model="workDescription"
        required
      ></textarea>
    </div>

    <button type="submit">Odeslat</button>
  </form>
</template>

<style scoped lang="scss">
@use "@/assets/style/color.scss" as color;
@use "@/assets/style/mixin.scss" as mix;
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
}

.mail-wrapper {
  width: 100%;
}

.name {
  margin-top: 2rem;
  display: flex;
  gap: 20px;
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 44%;
  margin: auto;

  margin-bottom: 150px;
}

.label-wrap{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
textarea {
  padding: 10px;
  border: 3px solid #333;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: white;
  border: 3px solid #333;
  color: #333;
  cursor: pointer;
  width: 31%;
  margin-inline: auto;
}
#workDescription {
  height: 200px;
  resize: vertical;
}

button:hover {
  background-color: #333;
  color: white;
  transition: ease-in-out 0.3s;
}

@include mix.phone {
  form {
    width: 80%;
    gap: 20px;
  }
  .name {
    margin-top: 2rem;
    flex-direction: column;
    gap: 20px;
  }

  .wrapper {
    width: 100%;
    height: 3.5rem;
    label {
      height: 20%;
    }
    input {
      height: 80%;
      font-size: 1.25rem;
    }
  }

  .mail-wrapper {
    width: 100%;
    height: 4rem;
    label {
      height: 20%;
    }
    input {
      height: 80%;
      font-size: 1.25rem;
    }
  }

  textarea {
    font-size: 1.25rem;
  }
  button {
    width: 70%;

    font-weight: 700;
    font-size: 1.25rem;
  }
}
</style>
