<template>
  <section class="container">
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
<!--    <div class="row g-4">-->
<!--      <div class="col-md-4">-->
<!--        <base-app-button class="bg-1" title="Indietro" @click="pushRoute('pizze')"/>-->
<!--      </div>-->
<!--      <div class="col-md-4">-->
<!--        <base-app-button class="bg-2" title="Fritti" @click="pushRoute('fritti')"/>-->
<!--      </div>-->
<!--      <div class="col-md-4">-->
<!--        <base-app-button class="bg-3" title="Beverage" @click="pushRoute('beverage')"/>-->
<!--      </div>-->
<!--    </div>-->
    <pizza-carousel :data="pizze" />

    <p class="fw-bold my-5">
      <img src="../assets/icon/small.png" class="icon" alt=""> = tonda &nbsp;
      <img src="../assets/icon/large.png" class="icon" alt=""> = in teglia
    </p>
    <menu-layout v-show="hasLimitedPizzaMenu" title="Limited" :data="limitedPizzaMenu"/>
    <menu-layout title="Le Rosse" :data="redPizzaMenu"/>
    <menu-layout title="Le Bianche" :data="whitePizzaMenu"/>
    <menu-layout title="Le Speciali" :data="specialPizzaMenu"/>
    <div class="row mt-5 ">
      <div class="col-12 text-center pb-4">
        <p class="small ">
          * ogni ingrediente aggiunto costa 1€
        </p>
        <p class="small ">
          ** si possono scegliere al massimo due gusti solo per il formato Family
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import MenuLayout from "@/components/app/MenuLayout";
import PizzaCarousel from '@/components/app/PizzaCarousel'

export default {
  components: {MenuLayout, PizzaCarousel},
  created() {
    let imageLoaded = 0;
    this.isLoading = true
    for (const imageSrc of this.pizze) {
      const img = new Image();
      img.src = this.helper.getImgUrl(imageSrc);

      img.onload = () => {
        imageLoaded++;

        if (imageLoaded === this.pizze.length) {
          console.log("Done !");
          this.isLoading = false;
        }

        console.log(imageLoaded);
      };
    }
    // this.loadPage("approfondimenti");
  },
  data() {
    return {
      helper: this.$util,
      isLoading: false,
      pizze: ['pizze/tropena.png', 'pizze/mortazza.png', 'pizze/colorata.png', 'pizze/diavola.png','pizze/parmigiana.png','pizze/silana.png']
    };
  },
  computed: {
    redPizzaMenu() {
      return this.$store.getters['menu/redPizzaMenu'];
    },
    whitePizzaMenu() {
      return this.$store.getters['menu/whitePizzaMenu'];
    },
    specialPizzaMenu() {
      return this.$store.getters['menu/specialPizzaMenu'];
    },
    limitedPizzaMenu() {
      return this.$store.getters['menu/limitedPizzaMenu'];
    },
    hasLimitedPizzaMenu() {
      return this.$store.getters['menu/hasLimitedPizzaMenu'];
    }
  },
}
</script>

<style>
.icon {
  width: 2.4rem;
}

p {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.3rem;
}
</style>
