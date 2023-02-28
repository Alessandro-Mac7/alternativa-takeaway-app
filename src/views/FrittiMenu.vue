<template>
  <section class="container">
    <menu-layout title="I Fritti" :data="fried" :fritti="true"/>
    <menu-layout title="Arancini e Frittatine" :data="arancini" :fritti="true"/>
    <menu-layout title="Polpette e Crocchette" :data="crocchette" :fritti="true"/>

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

}
</script>

<style>
.icon-b {
  width: 1.6rem;
}
</style>
