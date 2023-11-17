<script setup>
import { defineProps } from "vue";

defineProps(["text"]);
</script>

<template>
  <button>
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<style scoped>
button {
  padding: 10px;
  border-radius: 4px;
  background-color: #3a0061;
  color: white;
  cursor: pointer;
  border: none;
  font-weight: bold;
  transition: all 0.3s ease-out;
}

button:hover {
  color: #3a0061;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
