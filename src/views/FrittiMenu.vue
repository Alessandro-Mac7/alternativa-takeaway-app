<template>
  <section class="container">
    <pizza-carousel :data="fritti"/>

    <!-- Category Filter Navigation -->
    <nav class="category-nav" aria-label="Categorie Fritti">
      <button
        @click="activeCategory = 'all'"
        :aria-pressed="activeCategory === 'all'"
        :class="['category-pill', { active: activeCategory === 'all' }]"
      >
        Tutti
      </button>
      <button
        @click="activeCategory = 'fried'"
        :aria-pressed="activeCategory === 'fried'"
        :class="['category-pill', { active: activeCategory === 'fried' }]"
      >
        Fritti
      </button>
      <button
        @click="activeCategory = 'arancini'"
        :aria-pressed="activeCategory === 'arancini'"
        :class="['category-pill', { active: activeCategory === 'arancini' }]"
      >
        Arancini
      </button>
      <button
        @click="activeCategory = 'crocchette'"
        :aria-pressed="activeCategory === 'crocchette'"
        :class="['category-pill', { active: activeCategory === 'crocchette' }]"
      >
        Polpette
      </button>
    </nav>

    <div class="menu-sections">
      <transition name="section-fade">
        <div v-if="activeCategory === 'all' || activeCategory === 'fried'" key="fried" class="menu-section">
          <menu-layout title="I Fritti" :data="fried" :fritti="true"/>
        </div>
      </transition>
      <transition name="section-fade">
        <div v-if="activeCategory === 'all' || activeCategory === 'arancini'" key="arancini" class="menu-section">
          <menu-layout title="Arancini" :data="arancini" :fritti="true"/>
        </div>
      </transition>
      <transition name="section-fade">
        <div v-if="activeCategory === 'all' || activeCategory === 'crocchette'" key="crocchette" class="menu-section">
          <menu-layout title="Polpette e Crocchette" :data="crocchette" :fritti="true"/>
        </div>
      </transition>
    </div>

  </section>
</template>

<script>
import MenuLayout from "@/components/app/MenuLayout";
import PizzaCarousel from "@/components/app/PizzaCarousel";
export default {
  components: {MenuLayout, PizzaCarousel},
  data() {
    return {
      helper: this.$util,
      activeCategory: 'all',
      fritti: [
        'fritti/nduja.png',
        'fritti/arancino.png',
        'fritti/funghi.png',
        'fritti/carne.png'
      ]
    };
  },
  computed: {
    arancini() {
      return this.$store.getters['menu/arancini'];
    },
    crocchette() {
      return this.$store.getters['menu/crocchette'];
    },
    fried() {
      return this.$store.getters['menu/fried'];
    },
  }
}
</script>

<style>
.icon-b {
  width: 1.6rem;
}

/* Category Filter Navigation */
.category-nav {
  position: sticky;
  top: 0;
  z-index: 900;
  background: linear-gradient(to bottom, #393939 85%, rgba(57, 57, 57, 0) 100%);
  padding: 1rem 0;
  margin: 0 -12px;
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  flex-wrap: wrap;
}

.category-pill {
  background-color: rgba(123, 122, 91, 0.25);
  color: #D4D0C5;
  border: 2px solid transparent;
  padding: 0.5rem 1.1rem;
  border-radius: 24px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 44px;
  min-width: 80px;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.category-pill::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-pill:hover {
  background-color: rgba(197, 194, 106, 0.3);
  color: #E5DD8A;
  border-color: rgba(197, 194, 106, 0.5);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.category-pill:hover::before {
  opacity: 1;
}

.category-pill.active {
  background: linear-gradient(135deg, #C5C26A 0%, #b5b25a 100%);
  color: #393939;
  border-color: #C5C26A;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(197, 194, 106, 0.4);
  transform: scale(1.02);
}

.category-pill:active {
  transform: scale(0.98);
}

.category-pill:focus-visible {
  outline: 3px solid #E5DD8A;
  outline-offset: 2px;
}

/* Menu section animations */
.menu-sections {
  position: relative;
}

.menu-section {
  will-change: transform, opacity;
}

.section-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}

.section-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.section-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.section-fade-enter-to,
.section-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 480px) {
  .category-nav {
    gap: 0.4rem;
    padding: 0.75rem 0.5rem;
  }

  .category-pill {
    font-size: 1.05rem;
    padding: 0.4rem 0.9rem;
    min-width: 70px;
  }
}
</style>
