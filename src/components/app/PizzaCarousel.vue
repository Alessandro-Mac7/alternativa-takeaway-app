<template>
  <section>
    <image-dialog :show="!!image.show" :imageLink="image.link" @close="cleanImageDialog"></image-dialog>
    <div class="row">
      <div class="col-md-12">
        <Carousel :settings="settings" :pauseAutoplayOnHover="true"
                  :wrap-around="true" :breakpoints="breakpoints" class="mb-3"
                  @slide-start="onSlideStart">
          <Slide v-for="(img, index) in data" :key="index">
            <div class="carousel__item">
              <lazy-image 
                :src="helper.getImgUrl(img)" 
                @click="showImage(img)" 
                img-class="img-fluid pizza-img" 
                :alt="`Pizza ${index + 1}`"
                root-margin="100px"
                @load="onImageLoad(index)"
              />
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
import {Carousel, Slide} from "vue3-carousel";

export default {
  components: {Carousel, Slide},
  props: ['data'],
  data() {
    return {
      helper: this.$util,
      image: {
        show: null,
        link: ''
      },
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        // 700px and up
        300: {
          itemsToShow: 1.4,
          snapAlign: 'center'
        },
        700: {
          itemsToShow: 2.4,
          snapAlign: 'center'
        },
        1024: {
          itemsToShow: 3,
          snapAlign: 'center'
        }
      },
      loadedImages: new Set(),
      preloadedImages: new Set()
    };
  },
  mounted() {
    this.preloadFirstImages();
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
    onImageLoad(index) {
      this.loadedImages.add(index);
    },
    onSlideStart(data) {
      // Preload adjacent images for smooth transitions
      this.preloadAdjacentImages(data.currentSlideIndex);
    },
    preloadFirstImages() {
      // Preload first few images immediately
      const imagesToPreload = Math.min(3, this.data.length);
      for (let i = 0; i < imagesToPreload; i++) {
        this.preloadImage(i);
      }
    },
    preloadAdjacentImages(currentIndex) {
      const totalImages = this.data.length;
      const indicesToPreload = [
        (currentIndex + 1) % totalImages,
        (currentIndex + 2) % totalImages,
        (currentIndex - 1 + totalImages) % totalImages
      ];

      indicesToPreload.forEach(index => {
        if (!this.preloadedImages.has(index)) {
          this.preloadImage(index);
        }
      });
    },
    preloadImage(index) {
      if (index >= this.data.length || this.preloadedImages.has(index)) return;
      
      const img = new Image();
      img.onload = () => {
        this.preloadedImages.add(index);
      };
      img.src = this.helper.getImgUrl(this.data[index]);
    }
  }
};
</script>

<style scoped>
.pizza-img {
  max-width: 16rem;
}

.carousel__slide {
  padding: 0.3rem;
  display: flex !important;
  justify-content: center;
}

.carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>