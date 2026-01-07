<template>
  <section>
    <image-dialog :show="!!image.show" :imageLink="image.link" @close="cleanImageDialog"></image-dialog>

    <Carousel
      v-if="isReady && data && data.length"
      :key="carouselKey"
      v-model="currentSlide"
      :items-to-show="1.5"
      :wrap-around="true"
      snap-align="center"
      :breakpoints="breakpoints"
    >
      <Slide v-for="(img, index) in data" :key="index">
        <div class="slide-content">
          <img
            :src="helper.getImgUrl(img)"
            @click="showImage(img)"
            @error="handleImageError"
            loading="lazy"
            class="pizza-img"
            alt="Pizza image"
          >
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  components: { Carousel, Slide },
  props: ['data'],
  data() {
    return {
      helper: this.$util,
      currentSlide: 0,
      isReady: false,
      carouselKey: 0,
      image: {
        show: null,
        link: ''
      },
      breakpoints: {
        576: {
          itemsToShow: 2.5,
          snapAlign: 'center'
        },
        992: {
          itemsToShow: 3.5,
          snapAlign: 'center'
        }
      }
    };
  },
  mounted() {
    // Force carousel to initialize after DOM is ready
    this.$nextTick(() => {
      this.isReady = true;
      // Force re-render to ensure proper centering
      setTimeout(() => {
        this.carouselKey++;
      }, 50);
    });
  },
  methods: {
    showImage(link) {
      this.image.show = true;
      this.image.link = link;
    },
    cleanImageDialog() {
      this.image.show = null;
      this.image.link = '';
    },
    handleImageError(event) {
      event.target.style.opacity = '0.5';
      event.target.alt = 'Image failed to load';
    }
  }
};
</script>

<style scoped>
.slide-content {
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pizza-img {
  max-width: 220px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}

.pizza-img:hover {
  transform: scale(1.03);
}

@media (min-width: 576px) {
  .pizza-img {
    max-width: 240px;
  }
}

@media (min-width: 992px) {
  .pizza-img {
    max-width: 280px;
  }
}
</style>