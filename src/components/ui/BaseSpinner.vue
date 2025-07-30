<template>
  <div class="pizza-spinner">
    <div class="pizza-slice">🍕</div>
  </div>
</template>

<script>
export default {
  name: 'BaseSpinner'
}
</script>

<style scoped>
.pizza-spinner {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 60px;
}

.pizza-slice {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 30px;
  transform: translate(-50%, -50%);
  animation: pizza-spin 1.5s linear infinite;
}

@keyframes pizza-spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>