<template>
  <section class="blockquote">
    <h1>{{ text }}</h1>
    <h4>&mdash; {{ author }}</h4>
  </section>
</template>

<script>
export default {
  props: ["text", "author"]
};
</script>

<style scoped>

/* Blockquote main style */
.blockquote {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  color: #efa94a;
  padding: 30px 0;
  width: 100%;
  max-width: 500px;
  z-index: 1;
  margin: 80px auto;
  align-self: center;
  border-top: solid 1px;
  border-bottom: solid 1px;
}

/* Blockquote header */
.blockquote h1 {
  font-family: 'ADayWithoutSun', sans-serif;
  position: relative;
  color: #FFFFFF;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 0.3rem;
  line-height: 1;
  margin: 0;
}

/* Blockquote right double quotes */
.blockquote:after {
  position: absolute;
  content: "”";
  color: #efa94a;
  font-size: 10rem;
  line-height: 0;
  bottom: -43px;
  right: 30px;
}

/* increase header size after 600px */
@media all and (min-width: 600px) {
  .blockquote h1 {
    font-size: 60px;
  }

}

/* Blockquote subheader */
.blockquote h4 {
  font-family: 'Bimbo', sans-serif;
  position: relative;
  color: #c4bfb4;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  padding-top: 20px;
  z-index: 1;
}

</style>