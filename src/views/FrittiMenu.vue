<template>
  <section class="container">
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

export default {
  components: {MenuLayout},
  created() {
    // this.loadPage("approfondimenti");
  },
  data() {
    return {
      isLoading: false,
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
