<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div class="h-64 overflow-hidden">
      <router-link :to="`/product/${product.id}`">
        <img :src="product.image" :alt="`Imagen de ${product.title}`" class="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-300">
      </router-link>
    </div>
    <div class="p-5">
      <p class="text-sm text-gray-500 dark:text-gray-400 capitalize mb-1">{{ product.category }}</p>
      <h3 class="font-bold text-lg truncate text-gray-800 dark:text-white h-7">{{ product.title }}</h3>
      <div class="flex items-center justify-between mt-4">
        <span class="font-extrabold text-2xl text-gray-900 dark:text-white">${{ product.price }}</span>
        <button @click="addToCart" class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/></svg>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
});

const cartStore = useCartStore();

function addToCart() {
  cartStore.addProduct(props.product);
}
</script>