<template>
  <transition name="fade-slide">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top"
      aria-label="Torna all'inizio"
    >
      <span class="arrow-icon">↑</span>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'ScrollToTop',

  data() {
    return {
      isVisible: false,
      scrollThreshold: 400
    };
  },

  computed: {
    shouldShow() {
      const menuPages = ['Pizze', 'Fritti', 'Beverage'];
      return menuPages.includes(this.$route.name);
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (this.shouldShow) {
        this.isVisible = window.pageYOffset > this.scrollThreshold;
      } else {
        this.isVisible = false;
      }
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 90px;
  left: 20px;
  width: 50px;
  height: 50px;
  background: rgba(123, 122, 91, 0.9);
  color: #E5DD8A;
  border: 2px solid rgba(197, 194, 106, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 998;
  transition: all 0.3s ease;
}

.arrow-icon {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
}

.scroll-to-top:hover {
  background: rgba(197, 194, 106, 0.95);
  color: #393939;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.scroll-to-top:focus {
  outline: 3px solid #C5C26A;
  outline-offset: 2px;
}

.scroll-to-top:active {
  transform: translateY(-1px);
}

/* Desktop positioning */
@media (min-width: 768px) {
  .scroll-to-top {
    bottom: 100px;
    left: 30px;
    width: 56px;
    height: 56px;
  }

  .arrow-icon {
    font-size: 28px;
  }
}

/* Small mobile */
@media (max-width: 480px) {
  .scroll-to-top {
    width: 46px;
    height: 46px;
    left: 16px;
  }

  .arrow-icon {
    font-size: 20px;
  }
}

/* Fade-slide animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
