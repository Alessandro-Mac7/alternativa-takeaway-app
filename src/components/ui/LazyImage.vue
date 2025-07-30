<template>
  <div class="lazy-image-wrapper" ref="imageWrapper">
    <transition name="fade" mode="out-in">
      <div v-if="loading && !imageLoaded" class="image-placeholder">
        <div class="placeholder-spinner"></div>
      </div>
      <img
        v-else
        :src="imageSrc"
        :alt="alt"
        :class="imgClass"
        @load="onImageLoad"
        @error="onImageError"
        :style="{ opacity: imageLoaded ? 1 : 0 }"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    imgClass: {
      type: String,
      default: ''
    },
    rootMargin: {
      type: String,
      default: '50px'
    }
  },
  data() {
    return {
      imageSrc: '',
      loading: true,
      imageLoaded: false,
      observer: null
    };
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupIntersectionObserver() {
      if (!('IntersectionObserver' in window)) {
        // Fallback for browsers without IntersectionObserver
        this.loadImage();
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.loadImage();
              this.observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: this.rootMargin
        }
      );

      this.observer.observe(this.$refs.imageWrapper);
    },
    loadImage() {
      this.imageSrc = this.src;
    },
    onImageLoad() {
      this.loading = false;
      this.imageLoaded = true;
      this.$emit('load');
    },
    onImageError() {
      this.loading = false;
      this.$emit('error');
    }
  }
};
</script>

<style scoped>
.lazy-image-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
}

.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #f8f9fa;
  border-radius: 0.375rem;
}

.placeholder-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e9ecef;
  border-top: 3px solid #d32f2f;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

img {
  transition: opacity 0.3s ease;
  max-width: 100%;
  height: auto;
}
</style>