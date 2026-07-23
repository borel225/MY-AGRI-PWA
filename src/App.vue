<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const sidebarOpen = ref(false)

const navItems = [
  { path: '/', label: 'Tableau de Bord', icon: 'dashboard' },
  { path: '/recensement', label: 'Recensement', icon: 'people' },
  { path: '/litige', label: 'Litiges', icon: 'gavel' },
  { path: '/codification', label: 'Codification', icon: 'qr_code' },
  { path: '/commercialisation', label: 'Commercialisation', icon: 'store' },
  { path: '/utilisation', label: 'Utilisation', icon: 'person_pin' },
  { path: '/distribution', label: 'Distribution', icon: 'credit_card' },
  { path: '/outils', label: 'Outils', icon: 'build' }
]

const currentTitle = computed(() => route.meta.title || 'AgriPWA')

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<template>
  <div class="app-layout">
    <!-- Sidebar (desktop) -->
    <aside class="sidebar" :class="{ open: sidebarOpen }">
      <div class="sidebar-header">
        <span class="material-icons-outlined logo-icon">eco</span>
        <span class="logo-text">AgriPWA</span>
      </div>
      <nav class="sidebar-nav">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-item"
          :class="{ active: route.path === item.path }"
          @click="sidebarOpen = false"
        >
          <span class="material-icons-outlined">{{ item.icon }}</span>
          <span class="nav-label">{{ item.label }}</span>
        </router-link>
      </nav>
    </aside>

    <!-- Overlay mobile -->
    <div v-if="sidebarOpen" class="sidebar-overlay" @click="sidebarOpen = false"></div>

    <!-- Main content -->
    <main class="main-content">
      <header class="top-bar">
        <button class="menu-btn" @click="toggleSidebar">
          <span class="material-icons-outlined">menu</span>
        </button>
        <h2 class="page-title">{{ currentTitle }}</h2>
        <div class="top-bar-actions">
          <button class="icon-btn">
            <span class="material-icons-outlined">notifications</span>
          </button>
          <button class="icon-btn">
            <span class="material-icons-outlined">account_circle</span>
          </button>
        </div>
      </header>
      <div class="page-content">
        <router-view />
      </div>
    </main>

    <!-- Bottom nav (mobile) -->
    <nav class="bottom-nav">
      <router-link
        v-for="item in navItems.slice(0, 5)"
        :key="item.path"
        :to="item.path"
        class="bottom-nav-item"
        :class="{ active: route.path === item.path }"
      >
        <span class="material-icons-outlined">{{ item.icon }}</span>
        <span class="bottom-nav-label">{{ item.label }}</span>
      </router-link>
    </nav>
  </div>
</template>
