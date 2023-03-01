<template>
  <section class="container">
    <p class="fw-bold my-5">
      <img src="../assets/icon/small-b.png" class="icon-b" alt=""> = piccola &nbsp;
      <img src="../assets/icon/large-b.png" class="icon-b" alt=""> = family &nbsp;
      <img src="../assets/icon/beer.png" class="icon-b" alt=""> = birra
    </p>
    <menu-layout title="Soft Drinks" :data="beverageSoft" :beverage="true"/>
    <menu-layout title="Le Birre" :data="beverageBeer" :beverage="true"/>

    <div class="row pb-5 g-4">
      <div class="col-md-4">
        <base-app-button class="bg-2" title="Pizze" @click="pushRoute('pizze')"/>
      </div>
      <div class="col-md-4">
        <base-app-button class="bg-3" title="Beverage" @click="pushRoute('fritti')"/>
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
    beverageSoft() {
      return this.$store.getters['menu/beverageSoft'];
    },
    beverageBeer() {
      return this.$store.getters['menu/beverageBeer'];
    }
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
