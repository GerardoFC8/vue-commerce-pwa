<template>
  <div v-if="needRefresh" class="fixed bottom-4 right-4 p-4 bg-gray-800 text-white rounded-lg shadow-xl z-20 flex items-center space-x-4">
    <span>A new version is available.</span>
    <button @click="updateServiceWorker()" class="bg-primary-500 hover:bg-primary-600 font-bold py-2 px-4 rounded-md">
      Refresh
    </button>
    <button @click="close" class="text-gray-400 hover:text-white">
      &times;
    </button>
  </div>
</template>

<script setup>
import { useRegisterSW } from 'virtual:pwa-register/vue'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW()

const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}
</script>