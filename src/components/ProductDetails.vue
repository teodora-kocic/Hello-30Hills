<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

import TheProduct from "./TheProduct.vue";

const product = ref(null);

onMounted(() => {
  axios
    .get(`https://corsproxy.io/?https://30hills.com/api/products.json`)
    .then((response) => {
      const products = response.data.products.data.items;

      product.value = products.find((pr) => pr.id === route.params.id);
    })

    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <div>
    <the-product v-if="product" :product="product"></the-product>
  </div>
</template>
