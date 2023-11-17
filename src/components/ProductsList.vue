<script setup>
import { defineProps } from "vue";
import { useProductStore } from "../stores/product";

import TheProduct from "./TheProduct.vue";

defineProps(["products"]);

const store = useProductStore();
</script>

<template>
  <div>
    <h3>Our products</h3>

    <ul>
      <li v-for="product in products" :key="product.id">
        <the-product :product="product"></the-product>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  color: #3a0061;
  text-align: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  color: #3a0061;
}

li {
  list-style-type: none;
}
</style>
