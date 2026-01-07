<template>
  <teleport to="#app">
    <transition name="backdrop">
      <div v-if="show" @click="tryClose" class="backdrop"></div>
    </transition>
    <transition name="modal">
      <dialog open v-if="show" class="modern-dialog" role="dialog" aria-modal="true">
        <header class="dialog-header">
          <slot name="header">
            <h2 class="dialog-title">{{ title }}</h2>
          </slot>
          <button
            @click="tryClose"
            class="close-button"
            aria-label="Chiudi"
          >
            <span class="close-icon">&times;</span>
          </button>
        </header>
        <section class="dialog-content">
          <slot></slot>
        </section>
        <footer class="dialog-footer">
          <button @click="tryClose" class="close-btn-footer">
            Chiudi
          </button>
        </footer>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    }
  },
  emits: ['close'],
  watch: {
    show(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  },
  methods: {
    tryClose() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Backdrop with blur */
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
}

/* Backdrop transitions */
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
  backdrop-filter: blur(0);
}

.backdrop-enter-active {
  transition: opacity 0.3s ease-out, backdrop-filter 0.3s ease-out;
}

.backdrop-leave-active {
  transition: opacity 0.25s ease-in, backdrop-filter 0.25s ease-in;
}

.backdrop-enter-to,
.backdrop-leave-from {
  opacity: 1;
}

/* Modern Dialog with Glassmorphism */
.modern-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 2rem);
  max-width: 500px;
  max-height: calc(100vh - 4rem);
  z-index: 1001;
  border: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  /* Glassmorphism */
  background: linear-gradient(
    135deg,
    rgba(229, 234, 223, 0.95) 0%,
    rgba(212, 208, 197, 0.98) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Dialog Header */
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(
    to bottom,
    rgba(197, 194, 106, 0.2) 0%,
    transparent 100%
  );
  border-bottom: 1px solid rgba(123, 122, 91, 0.15);
}

.dialog-title {
  margin: 0;
  font-family: 'Mistrully', cursive;
  font-size: 1.75rem;
  color: #6e4f3a;
  letter-spacing: 0.5px;
}

/* Close Button (X) */
.close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  background: rgba(110, 79, 58, 0.1);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.close-button:hover {
  background: rgba(110, 79, 58, 0.2);
  transform: scale(1.1);
}

.close-button:active {
  transform: scale(0.95);
}

.close-button:focus-visible {
  outline: 2px solid #C5C26A;
  outline-offset: 2px;
}

.close-icon {
  font-size: 1.5rem;
  line-height: 1;
  color: #6e4f3a;
  font-weight: 300;
}

/* Dialog Content */
.dialog-content {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  color: #5a4a3a;
  font-size: 0.95rem;
  line-height: 1.7;

  /* Custom scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(123, 122, 91, 0.4) transparent;
}

.dialog-content::-webkit-scrollbar {
  width: 6px;
}

.dialog-content::-webkit-scrollbar-track {
  background: transparent;
}

.dialog-content::-webkit-scrollbar-thumb {
  background: rgba(123, 122, 91, 0.4);
  border-radius: 3px;
}

.dialog-content::-webkit-scrollbar-thumb:hover {
  background: rgba(123, 122, 91, 0.6);
}

/* Dialog Footer */
.dialog-footer {
  padding: 1rem 1.5rem;
  background: linear-gradient(
    to top,
    rgba(197, 194, 106, 0.15) 0%,
    transparent 100%
  );
  border-top: 1px solid rgba(123, 122, 91, 0.1);
}

.close-btn-footer {
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #C5C26A 0%, #a8a55a 100%);
  color: #393939;
  border: none;
  border-radius: 12px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(197, 194, 106, 0.3);
}

.close-btn-footer:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(197, 194, 106, 0.4);
  background: linear-gradient(135deg, #d4d277 0%, #b5b262 100%);
}

.close-btn-footer:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(197, 194, 106, 0.3);
}

.close-btn-footer:focus-visible {
  outline: 3px solid #6e4f3a;
  outline-offset: 2px;
}

/* Modal Transitions - Spring-like animation */
.modal-enter-from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.85);
}

.modal-enter-active {
  transition:
    opacity 0.35s cubic-bezier(0.34, 1.2, 0.64, 1),
    transform 0.35s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.modal-leave-active {
  transition:
    opacity 0.2s ease-out,
    transform 0.2s ease-out;
}

.modal-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.9);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

/* Desktop */
@media (min-width: 768px) {
  .modern-dialog {
    max-width: 560px;
    border-radius: 28px;
  }

  .dialog-header {
    padding: 1.5rem 2rem;
  }

  .dialog-title {
    font-size: 2rem;
  }

  .dialog-content {
    padding: 2rem;
    font-size: 1rem;
  }

  .dialog-footer {
    padding: 1.25rem 2rem;
  }

  .close-btn-footer {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .modal-enter-active,
  .modal-leave-active,
  .backdrop-enter-active,
  .backdrop-leave-active {
    transition-duration: 0.01ms !important;
  }
}
</style>
