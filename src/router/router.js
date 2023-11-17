import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../components/LandingPage.vue";
import AboutPage from "../components/AboutPage.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
import ProductDetails from "../components/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LandingPage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
    {
      path: "/shopping-cart",
      component: ShoppingCart,
    },
    {
      path: "/products/:id",
      component: ProductDetails,
      name: "ProductDetails",
    },
  ],
});

export default router;
