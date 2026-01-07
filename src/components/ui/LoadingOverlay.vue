<template>
  <teleport to="body">
    <transition name="overlay-fade">
      <div v-if="show" class="loading-overlay" role="alert" aria-live="polite" aria-busy="true">
        <div class="loading-backdrop"></div>
        <div class="loading-content">
          <div class="spinner-container">
            <img
              v-for="n in 4"
              :key="n"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kr7ormd6xl1ymkb501sv.png"
              :class="['pizza-part', `pizza-part-${n}`]"
              alt=""
              aria-hidden="true"
            />
          </div>
          <p class="loading-message">Caricamento...</p>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'LoadingOverlay',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    show(newVal) {
      document.body.style.overflow = newVal ? 'hidden' : '';
    }
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  }
}
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(57, 57, 57, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.loading-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.spinner-container {
  position: relative;
  width: 160px;
  height: 160px;
}

.loading-message {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.5rem;
  color: #C5C26A;
  margin: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Pizza slice styles - positioned to form a circle */
.pizza-part {
  position: absolute;
  width: 70px;
  height: 70px;
  transform-origin: center center;
}

/* Slice 1 - Top Left (ore 10-11) */
.pizza-part-1 {
  top: 10px;
  left: 10px;
  animation: slice1 2s ease-in-out infinite;
}

/* Slice 2 - Top Right (ore 1-2) */
.pizza-part-2 {
  top: 10px;
  right: 10px;
  animation: slice2 2s ease-in-out infinite;
}

/* Slice 3 - Bottom Right (ore 4-5) */
.pizza-part-3 {
  bottom: 10px;
  right: 10px;
  animation: slice3 2s ease-in-out infinite;
}

/* Slice 4 - Bottom Left (ore 7-8) */
.pizza-part-4 {
  bottom: 10px;
  left: 10px;
  animation: slice4 2s ease-in-out infinite;
}

/* Pizza animations - slices appear in clockwise order */
@keyframes slice1 {
  0%, 5% {
    opacity: 0;
    transform: scale(0.5) rotate(-45deg);
  }
  15%, 70% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  85%, 100% {
    opacity: 0;
    transform: scale(0.5) rotate(-45deg);
  }
}

@keyframes slice2 {
  0%, 15% {
    opacity: 0;
    transform: scale(0.5) rotate(45deg);
  }
  25%, 75% {
    opacity: 1;
    transform: scale(1) rotate(90deg);
  }
  90%, 100% {
    opacity: 0;
    transform: scale(0.5) rotate(45deg);
  }
}

@keyframes slice3 {
  0%, 25% {
    opacity: 0;
    transform: scale(0.5) rotate(135deg);
  }
  35%, 80% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
  95%, 100% {
    opacity: 0;
    transform: scale(0.5) rotate(135deg);
  }
}

@keyframes slice4 {
  0%, 35% {
    opacity: 0;
    transform: scale(0.5) rotate(-135deg);
  }
  45%, 85% {
    opacity: 1;
    transform: scale(1) rotate(-90deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.5) rotate(-135deg);
  }
}

/* Overlay transitions */
.overlay-fade-enter-active {
  transition: opacity 0.2s ease-out;
}

.overlay-fade-leave-active {
  transition: opacity 0.35s ease-in;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

.overlay-fade-enter-to,
.overlay-fade-leave-from {
  opacity: 1;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .pizza-part {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .overlay-fade-enter-active,
  .overlay-fade-leave-active {
    transition-duration: 0.01ms !important;
  }
}
</style>
