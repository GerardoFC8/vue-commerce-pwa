<template>
  <div class="min-h-screen font-sans">
    <header class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-20 transition-colors duration-300">
      <nav class="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold text-primary-600 dark:text-primary-400">
          VueCommerce
        </router-link>
        <div class="flex items-center space-x-2 sm:space-x-4">
          <router-link to="/cart" class="relative text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span v-if="cartStore.itemCount > 0" class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform translate-x-1/4 -translate-y-1/4">{{ cartStore.itemCount }}</span>
          </router-link>
          <ThemeToggle />
        </div>
      </nav>
    </header>

    <main class="container mx-auto p-4 sm:p-6">
      <router-view v-slot="{ Component }">
        <Suspense>
          <component :is="Component" :key="$route.path" />
          <template #fallback>
            <div class="text-center py-20">
              <p class="text-xl text-gray-500 dark:text-gray-400">Loading...</p>
            </div>
          </template>
        </Suspense>
      </router-view>
    </main>

    <footer class="bg-white dark:bg-gray-900/80 mt-12 py-6 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div class="container mx-auto text-center text-gray-500 dark:text-gray-400">
            &copy; 2025 Vue-Commerce PWA | Gerardo Franco
        </div>
    </footer>
    
    <ReloadPWA />
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useCartStore } from './store/cart';
import ReloadPWA from './components/ReloadPWA.vue';
import ThemeToggle from './components/ThemeToggle.vue';

const cartStore = useCartStore();
</script>