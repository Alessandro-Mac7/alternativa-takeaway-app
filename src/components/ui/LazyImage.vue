<template>
  <div class="lazy-image-wrapper" ref="imageWrapper">
    <div v-if="loading" class="image-placeholder">
      <base-spinner />
    </div>
    <img
      v-show="!loading"
      :src="imageSrc"
      :alt="alt"
      :class="imgClass"
      @load="onImageLoad"
      @error="onImageError"
    />
  </div>
</template>

<script>
import BaseSpinner from './BaseSpinner.vue';

export default {
  name: 'LazyImage',
  components: {
    BaseSpinner
  },
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 200px;
  background-color: transparent;
  border-radius: 0.375rem;
  z-index: 2;
}

img {
  transition: opacity 0.3s ease;
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
}
</style>