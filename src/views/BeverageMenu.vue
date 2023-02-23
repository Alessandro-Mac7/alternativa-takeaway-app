<template>
  <section class="container">
    <p class="fw-bold my-5">
      <img src="../assets/icon/small-b.png" class="icon" alt=""> = piccola &nbsp;
      <img src="../assets/icon/large-b.png" class="icon" alt=""> = family
    </p>
    <menu-layout title="Le Birre" :data="beverageBeer" />
    <menu-layout title="Soft Drinks" :data="beverageSoft" />

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

}
</script>

<style>
.icon {
  width: 1.3rem;
}
</style>
