<script setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";

import ProductsList from "./ProductsList.vue";
import SearchBar from "./SearchBar.vue";
import SortProducts from "./SortProducts.vue";
const products = ref([]);
let query = ref("");

onMounted(() => {
  axios
    .get(`https://corsproxy.io/?https://30hills.com/api/products.json`)
    .then((response) => {
      products.value = response.data.products.data.items;
    })

    .catch((error) => {
      console.log(error);
    });
});
const filteredByName = computed(() => {
  if (query.value !== "") {
    return (
      products.value.filter((pr) =>
        pr.name.toLowerCase().includes(query.value.toLowerCase()),
      ) || query.value.toLowerCase().includes(pr.name.toLowerCase())
    );
  }

  return products.value;
});

const filterProducts = (inputValue) => {
  query.value = inputValue;
};

const sortProducts = ref([]);
const sortedProductsAsc = () => {
  sortProducts.value = products.value.sort((a, b) => a.price - b.price);
  return sortProducts.value;
};

const sortedProductsDesc = () => {
  sortProducts.value = products.value.sort((a, b) => b.price - a.price);
  return sortProducts.value;
};
</script>

<template>
  <search-bar @search="filterProducts" v-model="query"></search-bar>

  <sort-products
    @ascending="sortedProductsAsc"
    @descending="sortedProductsDesc"
  ></sort-products>

  <products-list :products="filteredByName"></products-list>
</template>
