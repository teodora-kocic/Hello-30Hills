<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["ascending", "descending"]);
</script>

<template>
  <div>
    <p>Sort by Price:</p>
    <base-button @click="emits('ascending')">Ascending ⬆</base-button>
    <base-button @click="emits('descending')">Descending ⬇</base-button>
  </div>
</template>

<style scoped>
div {
  padding: 10px;
  margin: 0px 30px;
}

p {
  color: #3a0061;
  margin-bottom: 10px;
}
button {
  margin-right: 10px;
}
</style>
