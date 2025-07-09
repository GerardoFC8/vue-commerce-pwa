import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useProductStore = defineStore('products', () => {
  const products = ref([]);
  const categories = ref([]);
  const selectedCategory = ref('all'); // 'all' para mostrar todos
  const loading = ref(false);
  const error = ref(null);

  const API_URL = 'https://fakestoreapi.com';

  const filteredProducts = computed(() => {
    if (selectedCategory.value === 'all') {
      return products.value;
    }
    return products.value.filter(p => p.category === selectedCategory.value);
  });

  async function fetchProducts() {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) throw new Error('Error al cargar los productos');
      products.value = await response.json();
    } catch (e) {
      console.error(e);
      error.value = 'No se pudieron cargar los productos.';
    } finally {
      loading.value = false;
    }
  }

  async function fetchCategories() {
    try {
      const response = await fetch(`${API_URL}/products/categories`);
      if (!response.ok) throw new Error('Error al cargar las categorías');
      categories.value = await response.json();
    } catch (e) {
      console.error(e);
      // No mostramos error de categorías en UI para no ser intrusivos
    }
  }

  async function fetchProductById(id) {
    // Revisa si el producto ya está en la lista para no hacer una llamada de más
    const existingProduct = products.value.find(p => p.id == id);
    if (existingProduct) {
      return existingProduct;
    }

    // Si no está, lo busca en la API
    try {
      const response = await fetch(`${API_URL}/products/${id}`);
      if (!response.ok) throw new Error('No se pudo encontrar el producto.');
      return await response.json();
    } catch (e) {
      console.error(e);
      throw e; // Lanza el error para que el componente lo capture
    }
  }

  function selectCategory(category) {
    selectedCategory.value = category;
  }

  return { 
    products, 
    categories, 
    selectedCategory,
    loading, 
    error, 
    filteredProducts,
    fetchProducts,
    fetchCategories,
    selectCategory,
    fetchProductById
  };
});