<template>
    <div class="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
        <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Your Cart</h1>
        <div v-if="cartStore.items.length === 0" class="text-center py-10 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
            <p class="text-xl text-gray-500 dark:text-gray-400">Your cart is empty.</p>
            <router-link to="/" class="mt-4 inline-block bg-primary-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-primary-700 transition-colors">
                View Products
            </router-link>
        </div>
        <div v-else>
            <!-- Lista de productos -->
            <div class="space-y-4">
                <div v-for="item in cartStore.items" :key="item.id" class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
                    <div class="flex items-center gap-4">
                        <img :src="item.image" :alt="item.title" class="h-20 w-20 object-contain p-1 rounded-md bg-white">
                        <div>
                            <h2 class="font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">{{ item.title }}</h2>
                            <p class="text-gray-500 dark:text-gray-400">Cant: {{ item.quantity }}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="font-semibold text-lg text-gray-900 dark:text-white">${{ (item.price * item.quantity).toFixed(2) }}</p>
                        <button @click="cartStore.removeProduct(item.id)" class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 text-sm font-semibold transition-colors">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Total y checkout -->
            <div class="mt-8 flex flex-col sm:flex-row justify-end items-center gap-4">
                <p class="text-2xl font-bold text-gray-900 dark:text-white">Total: <span class="text-primary-600 dark:text-primary-400">${{ cartStore.totalPrice }}</span></p>
                <button class="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                    Proceed to payment
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '../store/cart';
const cartStore = useCartStore();
</script>