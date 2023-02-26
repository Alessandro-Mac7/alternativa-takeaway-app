<template>
  <section>
    <h1> {{ title }} </h1>
    <div class="row text-center" v-for="(pizza) in data" v-bind:key="pizza.key">
      <div class="col-md-12 ">
        <p class="name">
          {{ pizza.name }} &nbsp;
          <img src="../../assets/icon/small.png" class="icon" alt="">
          {{ pizza.price_small }} &nbsp;
          <img src="../../assets/icon/large.png" class="icon" alt="">
          {{ pizza.price_large }}
        </p>
      </div>
      <div class="col-md-12">
        <p class="ingredients">{{ pizza.ingredients }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'data']
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
}

.icon {
  width: 1.3rem;
}

.name {
  font-family: 'Mynerve', cursive;
  font-size: 1.6rem;
  line-height: 1;
}

.number {
  font-family: 'Mistrully', sans-serif;
  font-size: 1.6rem;
  line-height: 1.2;
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