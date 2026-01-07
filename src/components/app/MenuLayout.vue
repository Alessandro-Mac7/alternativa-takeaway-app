<template>
  <section>
    <transition-group name="menu-item-list" tag="div" class="menu-list">
      <div
        class="row text-center menu-item"
        v-for="(d, index) in data"
        v-bind:key="d.key || d.name"
        :style="{ '--stagger-delay': index * 50 + 'ms' }"
      >
      <div class="col-md-12 ">
        <p class="name">
          <strong>{{ d.name }}</strong>
        </p>
        <div class="price-row">
          <span v-if="d.price_small" class="price-badge price-small">
            <img v-if="!beverage && !fritti" src="../../assets/icon/small.png" class="icon" alt="Pizza tonda">
            <img v-if="d.type === 'soft'" src="../../assets/icon/small-b.png" class="icon-b" alt="Formato piccolo">
            <img v-if="d.type === 'beer'" src="../../assets/icon/beer.png" class="icon-b" alt="Birra">
            €{{ d.price_small }}
          </span>
          <span v-if="d.price_large" class="price-badge price-large">
            <img v-if="!beverage" src="../../assets/icon/large.png" class="icon" alt="Pizza in teglia">
            <img v-if="beverage" src="../../assets/icon/large-b.png" class="icon-b" alt="Formato family">
            €{{ d.price_large }}
          </span>
        </div>
      </div>

      <div class="col-md-12">
        <p class="ingredients">{{ d.ingredients }}</p>
      </div>
    </div>
    </transition-group>
  </section>
</template>

<script>
export default {
  props: ['title', 'data', 'beverage', 'fritti']
}
</script>

<style scoped>
/* Menu item with visual dividers */
.menu-item {
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(123, 122, 91, 0.3);
  margin-bottom: 0.5rem;
}

.menu-item:last-child {
  border-bottom: none;
}

.icon {
  width: 2rem;
  vertical-align: middle;
  margin-right: 0.25rem;
}

.icon-b {
  width: 2rem;
  vertical-align: middle;
  margin-right: 0.25rem;
}

.name {
  font-family: 'Mynerve', cursive;
  font-size: 1.75rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
}

/* Price badges */
.price-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.price-badge {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.price-small {
  background-color: rgba(197, 194, 106, 0.15);
  color: #E5DD8A;
}

.price-large {
  background-color: rgba(212, 167, 107, 0.15);
  color: #F0C78B;
}

.ingredients {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  color: #D4D0C5;
  line-height: 1.4;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 480px) {
  .name {
    font-size: 1.85rem;
  }

  .price-badge {
    font-size: 1.5rem;
  }
}

/* Menu list container */
.menu-list {
  position: relative;
}

/* Menu item list transitions with stagger */
.menu-item-list-enter-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: var(--stagger-delay, 0ms);
}

.menu-item-list-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-item-list-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.menu-item-list-leave-to {
  opacity: 0;
  transform: translateY(-15px) scale(0.98);
}

.menu-item-list-move {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .menu-item-list-enter-active,
  .menu-item-list-leave-active {
    transition-duration: 0.01ms !important;
    transition-delay: 0ms !important;
  }
}
</style>