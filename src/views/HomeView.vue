<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">Explore our Products</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">Find what you're looking for by filtering by category.</p>
    </div>

    <!-- Filtros de Categoría -->
    <div class="mb-8 overflow-x-auto pb-4">
      <div class="flex space-x-2">
        <button @click="productStore.selectCategory('all')" :class="getCategoryClass('all')">
          All
        </button>
        <button 
          v-for="category in productStore.categories" 
          :key="category" 
          @click="productStore.selectCategory(category)" 
          :class="getCategoryClass(category)"
          class="capitalize"
        >
          {{ category }}
        </button>
      </div>
    </div>
    
    <div v-if="productStore.loading" class="text-center py-20">
      <p class="text-lg text-gray-500 dark:text-gray-400">Loading products</p>
    </div>

    <div v-else-if="productStore.error" class="text-center bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
      <strong class="font-bold">¡Error!</strong>
      <span class="block sm:inline ml-2">{{ productStore.error }}</span>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard 
        v-for="product in productStore.filteredProducts" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '../store/products';
import ProductCard from '../components/ProductCard.vue';

const productStore = useProductStore();

const getCategoryClass = (category) => {
  const baseClasses = 'px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-200';
  if (productStore.selectedCategory === category) {
    return `${baseClasses} bg-primary-600 text-white shadow-md`;
  }
  return `${baseClasses} bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700`;
};

onMounted(async () => {
  // Solo carga si no hay productos
  if (productStore.products.length === 0) {
    await productStore.fetchProducts();
  }
  if (productStore.categories.length === 0) {
    await productStore.fetchCategories();
  }
});
</script>