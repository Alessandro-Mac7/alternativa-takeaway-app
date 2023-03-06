<template>
  <section >
    <div class="container bg-img my-4">
      <div class="row my-5">
        <div class="col-12 ">
          <a href="https://www.google.com/maps/place/L%E2%80%99alternativa+take+away/@38.9537199,16.2806589,17z/data=!3m1!4b1!4m6!3m5!1s0x133fe5b34605eb47:0x1ee7e7b83b773a40!8m2!3d38.9537199!4d16.2828476!16s%2Fg%2F11b74tkqw3" class="contact-icon">
            <img src="../assets/icon/map.png" class="contact-icon" alt="">
          </a>
          <a href="tel:+393207414601" class="contact-icon">
            <img src="../assets/icon/phone-call.png" class="contact-icon mx-4" alt="">
          </a>
          <a href="https://wa.me/3207414601" target="_blank" class="contact-icon ">
            <img src="../assets/icon/order-w.png" class="contact-icon" alt="">
          </a>
        </div>
      </div>
      <app-quote text="panza mia fhatti capanna" author="Proverbio calabrese" />
      <p class="text-center my-5">
        Siamo una piccola rosticceria a conduzione familiare nata nel 2012 con l'intento
        di portare sul tavolo dei nostri clienti <strong>tradizione e contemporaneità</strong>.<br>
        Offriamo diversi servizi tra cui la <strong>consegna domicilio</strong> dei nostri prodotti e la progettazione e realizzazione di <strong>banchetti</strong>.
      </p>
      <img src="../assets/home-full.png" @click="scroll('section1')" class="img-fluid img-app clickable" alt="pizza-bg">
    </div>
    <base-section color="1" id="section1">
      <div class="row g-4">
        <div  class="col-md-12">
          <base-app-button class="bg-1" title="Pizze" @click="pushRoute('pizze')"/>
        </div>
        <div class="col-md-12">
          <base-app-button class="bg-2" title="Fritti" @click="pushRoute('fritti')"/>
        </div>
        <div class="col-md-12">
          <base-app-button class="bg-3" title="Beverage" @click="pushRoute('beverage')" />
        </div>
      </div>
        <img src="../assets/pizza-full.png" @click="scroll('section2')" class=" mt-5 img-fluid img-app clickable" alt="pizza-bg">
    </base-section>

    <base-section title="La Pizza" id="section2" color="2">
      <p>
        La nostra pizza è il frutto di una sinergia tra <strong>tecnica, esperienza e passione</strong>,
        unita alla scelta attenta delle materie prime e alla giusta dose di  <strong>amore 💖</strong>.
      </p>
      <div class="animate__animated animate__pulse animate__infinite infinite"></div>

      <p class="text-center">
        Utilizziamo una miscela di varie tipologie di farina per conferire al nostro prodotto
        un carattere unico e riconoscibile per il suo gusto, la sua leggerezza e soprattutto la sua digeribilità.
        La pizza viene sottoposta ad un processo di <strong>lievitazione minimo di 48 ore</strong>
        e tempi di <strong>maturazione</strong> appropriati a <strong>temperatura controllata</strong>,
        il che garantisce al prodotto finale leggerezza e digeribilità. Una sola pizza a volte potrebbe non essere sufficiente 😊
      </p>
      <p>
        Il nostro desiderio è di offrire un prodotto unico nel quale il gusto, l'aroma e la consistenza si fondono in una sinfonia di sapori.
      </p>
      <img src="../assets/impasto.png" class="mt-5 img-fluid img-app" alt="pizza-bg">

    </base-section>

  </section>
</template>

<script>
import AppQuote from "@/components/app/AppQuote";
import BaseSection from "@/components/ui/BaseSection";
export default {
  components: {BaseSection, AppQuote},
  methods: {
    pushRoute(route) {
      this.$router.push(route);
    },
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }

  }
}
</script>

<style>
.contact-icon{
  width: 4.4rem;
  transition: all .1s;
  transform: scale(0.90);
}
.contact-icon:hover{
  filter: brightness(120%);
  transform: scale(0.99);
}
.contact-icon:focus{
  filter: brightness(150%);
  transform: scale(0.99);
}
.img-app{
  max-width: 30rem !important;
}

@media only screen and (max-width: 480px) {
  .img-fluid {
    width: 100% !important;
  }
}
</style>
