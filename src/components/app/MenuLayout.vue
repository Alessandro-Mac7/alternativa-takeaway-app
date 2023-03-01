<template>
  <section>
    <h1> {{ title }} </h1>
    <div class="row text-center" v-for="(d) in data" v-bind:key="d.key">
      <div class="col-md-12 ">
        <p class="name">
          <strong>{{ d.name }} &nbsp;</strong>
          <img v-show="d.price_small && !beverage && !fritti" src="../../assets/icon/small.png" class="icon" alt="">
          <img v-show="d.price_small && d.type === 'soft'" src="../../assets/icon/small-b.png" class="icon-b" alt="">
          <img v-show="d.price_small && d.type === 'beer'" src="../../assets/icon/beer.png" class="icon-b" alt="">
          <span class="fw-bold color4">{{ d.price_small }} &nbsp;</span>
          <img v-show="d.price_large && !beverage" src="../../assets/icon/large.png" class="icon" alt="">
          <img v-show="d.price_large && beverage" src="../../assets/icon/large-b.png" class="icon-b" alt="">
          <span class="fw-bold color5">{{ d.price_large }}</span>
        </p>
      </div>

      <div class="col-md-12">
        <p class="ingredients">{{ d.ingredients }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'data', 'beverage', 'fritti']
}
</script>

<style scoped>
h1 {
  font-family: 'Mistrully', sans-serif;
  margin-top: 2rem;
  margin-bottom: 3rem;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: #8f2323;
  font-size: 2.5rem;
}

.icon {
  width: 1.6rem;
}
.icon-b {
  width: 1.3rem;
}
.name {
  font-family: 'Mynerve', cursive;
  font-size: 1.6rem;
  line-height: 1;
}

.ingredients {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.1rem;
  font-style: italic;

}

.clickable {
  cursor: pointer;
  transition: all .1s;
}

.clickable:hover {
  filter: brightness(120%);
  transform: scale(0.98);
}

.clickable:focus {
  filter: brightness(150%);
  transform: scale(0.93);
}

</style>