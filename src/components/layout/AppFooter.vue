<template>
  <footer v-if="show" class="py-5">
    <div class="container">

      <div class="row mb-5 mx-auto text-center">
        <img src="../../assets/footer-logo.png" @click="scrollToTop" class="img-fluid img-app" alt="pizza-bg">
      </div>

      <div class="row mb-4 mx-auto text-center">
        <a href="tel:+393207414601" class="contact-text footer-text-2">
          320 7414601
        </a>
        <p class="footer-text my-2">
          Via Coschi, <span class="footer-text-2">42</span>, Lamezia Terme
        </p>
      </div>

      <div class="mb-4">
        <a target="_blank" rel="noopener noreferrer"
           href="https://www.facebook.com/alternativatakeaway/"
           class="icoFacebook " title="Facebook">
          <img src="../../assets/icon/facebook.png" class="contact-icon footer-icon" alt="">
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alternativa_take_away/"
           class="icoInstagram " title="Instagram">
          <img src="../../assets/icon/insta.png" class="contact-icon footer-icon" alt="">
        </a>
      </div>

      <div class="row">
        <div class="col-md-12 ">
          <p class="text-center copy">&copy; Copyright 2023 - Alternativa Take Away. Tutti i diritti riservati.</p>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
export default {
  data() {
    return {
      helper: this.$util,
      show: false,
    }
  },
  methods: {
    setShow() {
      setTimeout(() => {
        this.show = true;
      }, 300);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.setShow();
  },
}
</script>

<style scoped>
footer {
  background: #393939;
  -webkit-box-shadow: inset 0 2px 13px 6px #333333;
  -moz-box-shadow: inset 0 2px 13px 6px #333333;
  box-shadow: inset 0 2px 13px 6px #333333;
  color: white;
  position: relative;
  bottom: 0;
}

.copy {
  font-size: 1rem;
  padding: 0.8rem;
  border-top: 1px solid #efa94a;
}
.footer-icon{
  width: 2.5rem !important;
  margin: 1rem;
}

.img-app {
  margin: auto;
  cursor: pointer;
  transition: all .1s;
  max-width: 15rem !important;
}

.img-app:hover {
  filter: brightness(120%);
  transform: scale(0.98);
}

.img-app:focus {
  filter: brightness(150%);
  transform: scale(0.93);
}

.contact-text {
  font-size: 1.6rem;
  color: #9f843d;
  text-decoration: none;
  transition: all .1s;
  transform: scale(0.90);
}

.contact-text:hover, .contact-text:focus {
  filter: brightness(150%);
  transform: scale(0.99);
}

.footer-text {
  font-family: 'Mistrully', sans-serif;
}

.footer-text-2 {
  font-family: 'Mynerve', cursive;
}
</style>