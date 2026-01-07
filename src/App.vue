<template>
  <!-- Loading Overlay -->
  <loading-overlay :show="isLoading" />

  <!-- Offline Indicator -->
  <div v-if="!isOnline" class="offline-banner">
    Sei offline - Il menu e disponibile
  </div>

  <app-header/>
  <router-view v-slot="{ Component }">
    <transition name="page-slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <bottom-nav/>
  <floating-whatsapp/>
  <scroll-to-top/>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/layout/AppHeader.vue';
import BottomNav from '@/components/layout/BottomNav.vue';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp.vue';
import ScrollToTop from '@/components/ui/ScrollToTop.vue';
import LoadingOverlay from '@/components/ui/LoadingOverlay.vue';

export default {
  components: { AppHeader, BottomNav, FloatingWhatsApp, ScrollToTop, LoadingOverlay },

  data() {
    return {
      isOnline: navigator.onLine
    };
  },

  computed: {
    isLoading() {
      return this.$store.getters['ui/isLoading'];
    }
  },

  mounted() {
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  },

  beforeUnmount() {
    window.removeEventListener('online', this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
  },

  methods: {
    updateOnlineStatus() {
      this.isOnline = navigator.onLine;
    }
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200&family=Mynerve&display=swap');

/* Offline Banner */
.offline-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #5a5a5a;
  color: #f0f0f0;
  padding: 10px;
  text-align: center;
  font-size: 0.9rem;
  z-index: 1050; /* Above everything */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.color1 {color: #393939;}
.color2 {color: #7B7A5B;}
.color3 {color: #866042;}
.color4 {color: #C5C26A;} /* Lightened for 4.5:1 contrast ratio */
.color5 {color: #D4A76B;} /* Lightened for 4.5:1 contrast ratio */

@font-face {
  font-family: "ADayWithoutSun";
  src: local("ADayWithoutSun"),
  url(./assets/fonts/ADayWithoutSun-EgzW.ttf) format("truetype");
}
@font-face {
  font-family: "Bimbo";
  src: local("Bimbo"),
  url(./assets/fonts/BimboFinetipTrial.ttf) format("truetype");
}
@font-face {
  font-family: "Mistrully";
  src: local("Mistrully"),
  url(./assets/fonts/Mistrully.ttf) format("truetype");
}

.clickable {
  cursor: pointer;
  transition: all .1s;
}
.clickable:hover {
  filter: brightness(120%);
  transform: scale(0.98);
}

.clickable:focus  {
  filter: brightness(150%);
  transform: scale(0.93);
  outline: 3px solid #C5C26A;
  outline-offset: 2px;
}

.small-pizza {
  background-image: url("./assets/icon/small.png");
}
.large-pizza {
  background-image: url("./assets/icon/large.png");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c4bfb4;
  background-color: #393939;
  min-height: 100vh;
}

/* Bottom padding to prevent content being hidden by bottom nav (all screens) */
#app {
  padding-bottom: 80px;
}

@media (min-width: 768px) {
  #app {
    padding-bottom: 90px; /* Slightly more for desktop nav height */
  }
}

/* Page Slide Transitions */
.page-slide-enter-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-slide-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.page-slide-enter-to,
.page-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .page-slide-enter-active,
  .page-slide-leave-active {
    transition-duration: 0.01ms !important;
  }
}

</style>
