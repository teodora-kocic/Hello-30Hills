import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const storeProducts = ref([]);

  const addToCart = (product) => {
    storeProducts.value.push(product);
  };

  const removeFromCart = (id) => {
    storeProducts.value = storeProducts.value.filter(
      (product) => product.id !== id,
    );
  };

  return { storeProducts, addToCart, removeFromCart };
});
