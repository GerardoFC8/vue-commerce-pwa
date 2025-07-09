# Vue-Commerce PWA 🛍️

Vue-Commerce PWA is a modern, fast, and functional e-commerce project built with Vue.js 3 and Vite. The main feature of this application is its Progressive Web App (PWA) architecture, which allows it to be installable, work offline, and offer a user experience similar to that of a native app.

[Vue-Commerce Store Image](https://placehold.co/800x450/3b82f6/ffffff?text=Vue-Commerce+PWA)

---

## ✨ Key Features

- **Modern & Responsive:** Elegant design built with Tailwind CSS, fully adaptable to mobile and desktop devices.
- **Light & Dark Theme:** Toggle to switch between themes, with local storage persistence.
- **Progressive Web App (PWA):**
- **Offline Functionality:** Thanks to a Service Worker (managed by Workbox), the app caches core resources and API calls, allowing users to browse products even without an internet connection.
- **Update Notification:** Notifies the user when a new version is available.
- **Category Filtering:** Loads categories from the API and allows dynamic product filtering.
- **Centralized State Management:** Uses Pinia for simple and powerful state management of the shopping cart and products.
- **Asynchronous Loading (Suspense):** Uses the Vue 3 `<Suspense>` component for a better user experience while data is loading.

---

## 🛠️ Technologies Used

- **Framework:** [Vue.js 3](https://vuejs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **State Management:** [Pinia](https://pinia.vuejs.org/)
- **CSS Styles:** [Tailwind CSS](https://tailwindcss.com/)
- **PWA and Service Worker:** [Vite PWA Plugin](https://vite-pwa-org.netlify.app/) (using Workbox)
- **Sample API:** [Fake Store API](https://fakestoreapi.com/)

---

## 🚀 Installation and Startup Local

Follow these steps to run the project on your local machine.

#### 1. Clone the repository

```bash
git clone https://github.com/GerardoFC8/vue-commerce-pwa.git
```

#### 2. Navigate to the project directory

```bash
cd vue-commerce-pwa
```

#### 3. Install dependencies

```bash
npm install
```

#### 4. Start the development server

This command will start the application in development mode with Hot-Module Replacement (HMR).

```bash
npm run dev
```

Once executed, you will see the local URL in the terminal to open in your browser (usually `http://localhost:5173`).