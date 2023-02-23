<template>
  <div class="card card-button mx-auto shadow ">
    <div class="card-body d-flex align-items-center justify-content-center ">
      <h1 class="mt-2">{{ title }}</h1>
    </div>
  </div>
</template>

<script> export default {
  props: ['title']
}</script>

<style scoped>
.card {
  font-family: 'Mistrully', sans-serif;
  color: #fff;
  width: 14rem;
  height: 6.5rem;
  -webkit-border-radius: 1.563rem;
  -moz-border-radius: 1.563rem;
  border-radius: 1.563rem;
  cursor: pointer;
  background-color: #5c924a;
  transition: all .1s;
  -webkit-box-shadow: 3px 4px 15px -5px #7E7E7E;
  box-shadow: 3px 4px 15px -5px #7E7E7E;
}

.card-button:hover {
  filter: brightness(120%);
  transform: scale(0.97);
}

.card-button:focus {
  filter: brightness(120%);
  transform: scale(0.93);
}


.bg-1 {
  background-color: #977548;
}

.bg-2 {
  background-color: #9f843d;
}

.bg-3 {
  background-color: #afac52;
}

/* Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) 
@media (min-width: 768px) { ... }

/* Large devices (desktops, 992px and up) 
@media (min-width: 992px) { ... }

/* Extra large devices (large desktops, 1200px and up) 
@media (min-width: 1200px) { ... }*/
</style>