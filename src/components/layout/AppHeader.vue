<template>
    <div class="container">
        <div class="row">
            <div class="col mt-5 mb-4 mx-auto">
                <img src="../../assets/logo.png" class="logo-img clickable" alt="logo" @click="pushRoute('/')"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    pushRoute(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
.clickable {
    cursor: pointer;
    transition: all .1s;
}
.clickable:hover {
    filter: brightness(120%);
    transform: scale(0.98);
}

.clickable:focus  {
    filter: brightness(150%);
    transform: scale(0.93);
}

</style>