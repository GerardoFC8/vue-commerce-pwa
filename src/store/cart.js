import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref([]);

  const itemCount = computed(() => items.value.reduce((acc, item) => acc + item.quantity, 0));
  
  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  });

  function addProduct(product) {
    const existingProduct = items.value.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  }

  function removeProduct(productId) {
    items.value = items.value.filter(item => item.id !== productId);
  }

  return { items, itemCount, totalPrice, addProduct, removeProduct };
});