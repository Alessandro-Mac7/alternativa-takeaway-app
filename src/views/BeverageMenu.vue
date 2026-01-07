<template>
  <section class="container">
    <img src="../assets/beer-frame.png" class="img-fluid beverage-img" loading="lazy" alt="Beverage Frame">

    <!-- Category Filter Navigation -->
    <nav class="category-nav" aria-label="Categorie Bevande">
      <button
        @click="activeCategory = 'all'"
        :aria-pressed="activeCategory === 'all'"
        :class="['category-pill', { active: activeCategory === 'all' }]"
      >
        Tutte
      </button>
      <button
        @click="activeCategory = 'soft'"
        :aria-pressed="activeCategory === 'soft'"
        :class="['category-pill', { active: activeCategory === 'soft' }]"
      >
        Soft Drinks
      </button>
      <button
        @click="activeCategory = 'beer'"
        :aria-pressed="activeCategory === 'beer'"
        :class="['category-pill', { active: activeCategory === 'beer' }]"
      >
        Birre
      </button>
    </nav>

    <div class="size-legend">
      <div class="legend-item">
        <img src="../assets/icon/small-b.png" class="legend-icon" loading="lazy" alt="Formato piccolo">
        <span class="legend-text">Piccola</span>
      </div>
      <div class="legend-item">
        <img src="../assets/icon/large-b.png" class="legend-icon" loading="lazy" alt="Formato family">
        <span class="legend-text">Family</span>
      </div>
      <div class="legend-item">
        <img src="../assets/icon/beer.png" class="legend-icon" loading="lazy" alt="Birra">
        <span class="legend-text">Birra</span>
      </div>
    </div>
    <div class="menu-sections">
      <transition name="section-fade">
        <div v-if="activeCategory === 'all' || activeCategory === 'soft'" key="soft" class="menu-section">
          <menu-layout title="Soft Drinks" :data="beverageSoft" :beverage="true"/>
        </div>
      </transition>
      <transition name="section-fade">
        <div v-if="activeCategory === 'all' || activeCategory === 'beer'" key="beer" class="menu-section">
          <menu-layout title="Le Birre" :data="beverageBeer" :beverage="true"/>
        </div>
      </transition>
    </div>

  </section>
</template>

<script>
import MenuLayout from "@/components/app/MenuLayout";
export default {
  components: {MenuLayout},
  data() {
    return {
      helper: this.$util,
      activeCategory: 'all'
    };
  },
  computed: {
    beverageSoft() {
      return this.$store.getters['menu/beverageSoft'];
    },
    beverageBeer() {
      return this.$store.getters['menu/beverageBeer'];
    },
  }
}
</script>

<style>
.beverage-img {
  max-width: 16rem !important;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
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
