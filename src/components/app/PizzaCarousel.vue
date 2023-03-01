<template>
  <section>
    <image-dialog :show="!!image.show" :imageLink="image.link" @close="cleanImageDialog"></image-dialog>
  <div class="row">
    <div class="col-md-12">
      <Carousel :settings="settings" :pauseAutoplayOnHover="true" :transition="1500" :autoplay="5000" :wrap-around="true" :breakpoints="breakpoints" class="mb-3">
        <Slide v-for="(img, index) in data" :key="index">
          <div class="carousel__item">
            <img :src=helper.getImgUrl(img) @click="showImage(img)" class="img-fluid pizza-img" alt="imageUrl">
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
      }
    };
  },
  methods: {
    showImage(link) {
      this.image.show = true;
      this.image.link = link;
    },
    cleanImageDialog() {
      this.image.show = null;
      this.image.link = '';
    }
  }
};
</script>

<style scoped>
.pizza-img{
  max-width: 16rem;
}
.carousel__slide {
  padding: 0.3rem;
}
</style>