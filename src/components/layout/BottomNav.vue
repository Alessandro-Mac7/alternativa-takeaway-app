<template>
  <nav class="bottom-nav">
    <router-link
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="nav-item"
      :class="{ active: isActive(item.path) }"
      :aria-label="item.label"
    >
      <span class="nav-icon">
        <img v-if="item.useFavicon" :src="faviconPath" alt="Home" class="favicon-icon">
        <template v-else>{{ item.icon }}</template>
      </span>
      <span class="nav-label">{{ item.label }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav',

  data() {
    return {
      navItems: [
        { path: '/', label: 'Home', icon: null, useFavicon: true },
        { path: '/pizze', label: 'Pizze', icon: '🍕' },
        { path: '/fritti', label: 'Fritti', icon: '🍟' },
        { path: '/beverage', label: 'Bevande', icon: '🥤' },
      ],
    };
  },

  computed: {
    faviconPath() {
      return process.env.BASE_URL + 'favicon.ico';
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #393939;
  border-top: 1px solid #7B7A5B;
  z-index: 1000;
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.3);
}

/* Mobile: Compact layout */
.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.25rem;
  min-height: 56px;
  color: #c4bfb4;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
}

.nav-item:hover {
  background-color: rgba(197, 194, 106, 0.1);
}

.nav-item:focus-visible {
  outline: 2px solid #C5C26A;
  outline-offset: 2px;
}

.nav-item.active {
  color: #C5C26A;
}

.nav-item.active::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background-color: #C5C26A;
  border-radius: 0 0 3px 3px;
}

.nav-icon {
  font-size: 1.25rem;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.favicon-icon {
  width: 1.25rem;
  height: 1.25rem;
  object-fit: contain;
}

.nav-label {
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  letter-spacing: 0.3px;
}

/* Touch highlight for mobile */
@media (hover: none) {
  .nav-item:active {
    background-color: rgba(197, 194, 106, 0.2);
    transform: scale(0.95);
  }
}

/* Desktop/Tablet: Centered horizontal layout */
@media (min-width: 768px) {
  .bottom-nav {
    justify-content: center;
    gap: 1rem;
    padding: 0.75rem 2rem;
    background: linear-gradient(to top, #393939 0%, #3d3d3d 100%);
  }

  .nav-item {
    flex: 0 0 auto;
    flex-direction: row;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    min-height: 48px;
    border-radius: 8px;
  }

  .nav-item:hover {
    background-color: rgba(197, 194, 106, 0.15);
    transform: translateY(-2px);
  }

  .nav-item.active {
    background-color: rgba(197, 194, 106, 0.2);
  }

  .nav-item.active::before {
    width: 100%;
    left: 0;
    transform: none;
    border-radius: 3px 3px 0 0;
  }

  .nav-icon {
    font-size: 1.4rem;
    margin-bottom: 0;
  }

  .favicon-icon {
    width: 1.4rem;
    height: 1.4rem;
  }

  .nav-label {
    font-size: 1rem;
    font-weight: 700;
  }
}
</style>
