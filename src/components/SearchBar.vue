<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";

const emits = defineEmits(["search"]);
const inputValue = ref("");

const searchProducts = () => {
  if (inputValue.value === "") return;

  emits("search", inputValue.value);
  inputValue.value = "";
};
</script>

<template>
  <div>
    <h3>Search for products</h3>

    <form @submit.prevent="searchProducts">
      <input type="text" v-model="inputValue" />
      <base-button>Search</base-button>
    </form>
  </div>
</template>

<style scoped>
div {
  padding: 20px;
}

h3 {
  text-align: center;
  margin-bottom: 10px;
  color: #3a0061;
}

form {
  display: flex;
  justify-content: center;
}

input {
  font-size: 1rem;
  padding: 10px;
}

button {
  font-size: 1rem;
  border-radius: 0%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>
