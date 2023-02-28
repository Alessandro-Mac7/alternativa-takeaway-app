<template>
  <app-header/>
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/layout/AppHeader.vue';

export default {
  components: { AppHeader },
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200&family=Mynerve&display=swap');

.color1 {color: #393939;}
.color2 {color: #7B7A5B;}
.color3 {color: #866042;}
.color4 {color: #AFAC52;}
.color5 {color: #b4874b;}

@font-face {
  font-family: "ADayWithoutSun";
  src: local("ADayWithoutSun"),
  url(./assets/fonts/ADayWithoutSun-EgzW.ttf) format("truetype");
}
@font-face {
  font-family: "Bimbo";
  src: local("Bimbo"),
  url(./assets/fonts/BimboFinetipTrial.ttf) format("truetype");
}
@font-face {
  font-family: "Mistrully";
  src: local("Mistrully"),
  url(./assets/fonts/Mistrully.ttf) format("truetype");
}

.small-pizza {
  background-image: url("./assets/icon/small.png");
}
.large-pizza {
  background-image: url("./assets/icon/large.png");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ece2e2;
  background-color: #393939;
  min-height: 100vh;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

</style>
