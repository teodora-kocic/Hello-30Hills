<script setup>
import BaseCard from "./BaseCard.vue";
import { defineProps, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useProductStore } from "../stores/product";

const { addToCart } = useProductStore();

const router = useRouter();
const route = useRoute();

const props = defineProps(["product"]);

const addProductToCart = () => {
  addToCart(props.product);
};

const isDetailsPage = ref(false);

isDetailsPage.value = route.name === "ProductDetails";

const seeDetails = (productId) => {
  router.push(`/products/${productId}`);
};

const goBack = () => {
  router.push("/");
};

const changeImage = (e) => {
  if (!e.target.src) return;
  if (!props.product.images[0]) return;
  props.product.images[0] = e.target.src;
};
</script>

<template>
  <base-card>
    <img v-if="product.images" :src="product?.images[0]" alt="" />

    <div @click="changeImage" class="img-container" v-if="isDetailsPage">
      <img v-for="img in product.images" :key="product.id" :src="img" alt="" />
    </div>
    <h3>{{ product.name }}</h3>

    <p>{{ product.description }}</p>
    <p v-if="isDetailsPage">
      <span style="font-weight: bold"> Category: </span> {{ product.category }}
    </p>
    <p style="font-weight: bold">Price: {{ product.price }}$</p>

    <div class="btn-container">
      <base-button @click="addProductToCart">Add to Cart</base-button>

      <base-button v-if="isDetailsPage" @click="goBack()"
        >Go back ↩
      </base-button>

      <base-button v-else @click="seeDetails(product.id)"
        >See details >></base-button
      >
    </div>
  </base-card>
</template>

<style scoped>
img {
  max-width: 100%;
  height: 200px;
}

.btn-container {
  display: flex;
  flex-direction: column;
}

.btn-container button {
  margin-bottom: 10px;
}

.img-container {
  display: flex;
  justify-content: space-around;
}

.img-container img {
  width: 50px;
  cursor: pointer;
  opacity: 0.5;
  height: auto;
}

h3 {
  text-align: center;
  margin: 10px 0;
  color: #3a0061;
}

p {
  padding: 10px;
  color: #3a0061;
}
</style>
