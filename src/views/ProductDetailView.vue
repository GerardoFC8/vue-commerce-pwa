<template>
  <div v-if="loading" class="text-center py-20">
    <p class="text-xl text-gray-500 dark:text-gray-400">Loading product...</p>
  </div>

  <div v-else-if="error" class="text-center bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
    <strong class="font-bold">Mistake!</strong>
    <p class="mt-2">{{ error }}</p>
    <router-link to="/" class="mt-6 inline-block bg-primary-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-700">
      Return to Products
    </router-link>
  </div>

  <div v-else-if="product" class="max-w-4xl mx-auto">
    <!-- Botón para volver -->
    <div class="mb-6">
      <router-link to="/" class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors group">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="transition-transform group-hover:-translate-x-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        <span>Return to Products</span>
      </router-link>
    </div>

    <div class="bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-xl shadow-lg">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg flex items-center justify-center p-4 h-96">
          <img :src="product.image" :alt="product.title" class="max-w-full max-h-full object-contain">
        </div>

        <div class="flex flex-col">
          <p class="text-sm text-gray-500 dark:text-gray-400 capitalize mb-2">{{ product.category }}</p>
          <h1 class="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">{{ product.title }}</h1>
          
          <div class="flex items-center gap-2 mb-4">
            <span class="font-bold text-yellow-500">{{ product.rating.rate }} ★</span>
            <span class="text-sm text-gray-600 dark:text-gray-400">({{ product.rating.count }} ratings)</span>
          </div>

          <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{{ product.description }}</p>

          <div class="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center gap-6">
            <span class="font-extrabold text-4xl text-gray-900 dark:text-white">${{ product.price }}</span>
            <button @click="addToCart" class="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/></svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../store/products';
import { useCartStore } from '../store/cart';

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();

const product = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  const productId = route.params.id;
  try {
    // Llama a una nueva función en el store para buscar el producto por ID
    const fetchedProduct = await productStore.fetchProductById(productId);
    if (fetchedProduct) {
      product.value = fetchedProduct;
    } else {
      throw new Error('El producto que buscas no fue encontrado.');
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
});

function addToCart() {
  if (product.value) {
    cartStore.addProduct(product.value);
  }
}
</script>
