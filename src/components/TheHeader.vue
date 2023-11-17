<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/product";

const { storeProducts } = storeToRefs(useProductStore());
</script>

<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>

    <div>
      <router-link to="/shopping-cart">
        <img src="../assets/shopping-cart.png" alt="" />
        <span :class="storeProducts.length === 0 ? '' : 'notification'">{{
          storeProducts.length
        }}</span>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #270041;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-size: 22px;
  max-height: 40px;
  display: flex;
  align-items: center;
}

nav div {
  display: flex;
  align-items: center;
}

nav img {
  width: 40px;
  height: 40px;
}

.router-link-active {
  font-weight: bold;
}

.notification {
  background-color: rgb(217, 76, 117);
  border-radius: 100%;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
