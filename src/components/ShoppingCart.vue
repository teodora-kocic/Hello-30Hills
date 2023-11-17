<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/product";
const { removeFromCart } = useProductStore();

const { storeProducts } = storeToRefs(useProductStore());

const remove = (id) => {
  removeFromCart(id);
};
</script>

<template>
  <base-card class="container" v-for="product in storeProducts">
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}$</p>
    <base-button @click="remove(product.id)">X</base-button>
  </base-card>

  <base-card v-if="storeProducts.length === 0"
    ><span> Shopping cart is empty </span></base-card
  >
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

p {
  margin-right: 10px;
}

button {
  width: 40px;
  height: 35px;
}

span {
  color: #270041;
  text-align: center;
}
</style>
