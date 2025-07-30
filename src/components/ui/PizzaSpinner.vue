<template>
  <div class="pizza-spinner" :class="size">
    <div class="pizza-slice">🍕</div>
    <div class="pizza-slice">🍕</div>
    <div class="pizza-slice">🍕</div>
    <div class="pizza-slice">🍕</div>
  </div>
</template>

<script>
export default {
  name: 'PizzaSpinner',
  props: {
    size: {
      type: String,
      default: 'medium' // small, medium, large
    }
  }
};
</script>

<style scoped>
.pizza-spinner {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 60px;
}

.pizza-spinner.small {
  width: 40px;
  height: 40px;
}

.pizza-spinner.large {
  width: 80px;
  height: 80px;
}

.pizza-slice {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 16px;
  transform-origin: center;
}

.pizza-spinner.small .pizza-slice {
  font-size: 12px;
}

.pizza-spinner.large .pizza-slice {
  font-size: 20px;
}

.pizza-slice:nth-child(1) {
  animation: pizza-rotate 2s ease-in-out infinite;
  transform: translate(-50%, -50%) translate(-15px, -15px);
}

.pizza-slice:nth-child(2) {
  animation: pizza-rotate 2s ease-in-out infinite 0.2s;
  transform: translate(-50%, -50%) translate(15px, -15px);
}

.pizza-slice:nth-child(3) {
  animation: pizza-rotate 2s ease-in-out infinite 0.4s;
  transform: translate(-50%, -50%) translate(15px, 15px);
}

.pizza-slice:nth-child(4) {
  animation: pizza-rotate 2s ease-in-out infinite 0.6s;
  transform: translate(-50%, -50%) translate(-15px, 15px);
}

@keyframes pizza-rotate {
  0% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(0.8) rotate(0deg);
  }
  25% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(180deg);
  }
  75% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(0.8) rotate(270deg);
  }
  100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(0.8) rotate(360deg);
  }
}
</style>