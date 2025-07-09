import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useThemeStore } from './store/theme'
import './index.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

// Inicializa el tema antes de montar la app
const themeStore = useThemeStore()
themeStore.initTheme()

app.use(router)
app.mount('#app')