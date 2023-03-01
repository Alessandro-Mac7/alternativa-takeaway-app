<template>
  <section class="container">
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>

    <pizza-carousel :data="fritti"/>

    <menu-layout title="I Fritti" :data="fried" :fritti="true"/>
    <menu-layout title="Arancini e Frittatine" :data="arancini" :fritti="true"/>
    <menu-layout title="Polpette e Crocchette" :data="crocchette" :fritti="true"/>

    <div class="row pb-5 g-4">
      <div class="col-md-6">
        <base-app-button class="bg-2" title="Pizze" @click="pushRoute('pizze')"/>
      </div>
      <div class="col-md-6">
        <base-app-button class="bg-3" title="Beverage" @click="pushRoute('beverage')"/>
      </div>
    </div>

  </section>
</template>

<script>
import MenuLayout from "@/components/app/MenuLayout";
import PizzaCarousel from "@/components/app/PizzaCarousel";

export default {
  components: {MenuLayout, PizzaCarousel},
  created() {
    let imageLoaded = 0;
    this.isLoading = true
    for (const imageSrc of this.fritti) {
      const img = new Image();
      img.src = this.helper.getImgUrl(imageSrc);

      img.onload = () => {
        imageLoaded++;
        if (imageLoaded === this.fritti.length) {
          this.isLoading = false;
        }

        console.log(imageLoaded);
      };
    }
  },
  data() {
    return {
      helper: this.$util,
      isLoading: false,
      fritti: [
        'fritti/nduja.png',
        'fritti/arancino.png',
        'fritti/funghi.png',
        'fritti/carne.png'
        // 'fritti/melanzane.png',
        // 'fritti/patate.png'
      ]
    };
  },
  computed: {
    arancini() {
      return this.$store.getters['menu/arancini'];
    },
    crocchette() {
      return this.$store.getters['menu/crocchette'];
    },
    fried() {
      return this.$store.getters['menu/fried'];
    },
  },
  methods: {
    pushRoute(route) {
      this.$router.push(route);
    }
  }

}
</script>

<style>
.icon-b {
  width: 1.6rem;
}
</style>
