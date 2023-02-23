<template>
  <section class="container">
    <p class="fw-bold my-5">
      <img src="../assets/icon/small.png" class="icon" alt=""> = piccola &nbsp;
      <img src="../assets/icon/large.png" class="icon" alt=""> = family
    </p>
    <menu-layout title="Limited" :data="limitedPizzaMenu" />
    <menu-layout title="Le Rosse" :data="redPizzaMenu" />
    <menu-layout title="Le Bianche" :data="whitePizzaMenu" />
    <menu-layout title="Le Speciali" :data="specialPizzaMenu" />
    <div class="row mt-5 ">
      <div class="col-12 text-center pb-4">
        <p class="small ">
          * ogni ingrediente aggiunto costa 1€
        </p>
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
    }
  },
}
</script>

<style>
.icon {
  width: 1.3rem;
}
p {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.3rem;
}
</style>
