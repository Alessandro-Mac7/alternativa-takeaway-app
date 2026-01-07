<template>
  <section :class="color ? 'bg-' + color : ''">
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
  /* Full viewport minus bottom nav */
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
}

section > .container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.app-title {
  font-family: 'Mistrully', sans-serif;
}

.bg-1 {
  background-color: #585045;
}

.bg-2 {
  background-color: #866841;
}

.bg-3 {
  background-color: #8d8b4a;
}

.bg-4 {
  background-color: #5e5031;
}
</style>