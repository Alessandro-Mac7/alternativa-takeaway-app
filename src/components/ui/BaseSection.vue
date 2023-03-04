<template>
  <section :class="'bg-' + color">
    <div class="container py-5">
      <h1 v-show="title" class="app-title mb-5">{{ title }}</h1>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title','color'],
};
</script>

<style scoped>
section {
  color: #FFFFFF;
}
.app-title{
  font-family: 'Mistrully', sans-serif;
}
.bg-1 {
  background-color: #585045;
  min-height: 100%;

}
.bg-2 {
  background-color: #866841;
  min-height: 100%;

}
.bg-3 {
  background-color: #8d8b4a;
  min-height: 100%;

}
.bg-4 {
  background-color: #5e5031;
  min-height: 100%;

}
</style>