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
      <img src="../assets/home-full.png" class="img-fluid img-app" alt="pizza-bg">
    </div>
    <base-section color="1">
      <div class="row g-4">
        <div class="col-md-12">
          <base-app-button class="bg-1" title="Pizze" @click="pushRoute('pizze')"/>
        </div>
        <div class="col-md-12">
          <base-app-button class="bg-2" title="Fritti" @click="pushRoute('fritti')"/>
        </div>
        <div class="col-md-12">
          <base-app-button class="bg-3" title="Beverage" @click="pushRoute('beverage')" />
        </div>
      </div>
        <img src="../assets/pizza-full.png" class=" mt-5 img-fluid img-app" alt="pizza-bg">
    </base-section>
    <base-section title="L'Impasto" color="2">
      <p class="text-center">Creato da una miscela di farine selezionata accuratamente per garantire un equilibrio perfetto tra proteine e amidi,
        in modo da ottenere una consistenza elastica e un sapore intenso.
        La lunga lievitazione a temperatura controllata permette di sviluppare al meglio gli aromi e i sapori, conferendo alla pizza una fragranza e un gusto inconfondibile.
        La consistenza alveolata e soffice dell'impasto, unita ad una crosta croccante e dorata, rende la pizza unica nel suo genere, ideale per ogni occasione e per tutti i palati.</p>
      <img src="../assets/impasto.png" class="mt-5 img-fluid img-app" alt="pizza-bg">

    </base-section>
    <base-section title="Le Materie Prime" color="3">
      <p>L'utilizzo di materie prime eccellenti, come la mozzarella e il sugo di pomodoro, rappresentano un elemento fondamentale per ottenere una pizza straordinaria.<br>
        La mozzarella di alta qualità, fresca e prodotta con latte locale di altissima qualità. Grazie alla sua freschezza e alla sua consistenza, si unisce agli altri ingredienti, creando una sinergia perfetta tra sapori e consistenze.<br>
        Il sugo di pomodoro, conferisce alla pizza un gusto intenso con una nota di acidità equilibrata.<br>
        L'utilizzo di materie prime eccellenti, permette di creare una pizza unica nel suo genere, con un sapore autentico e un aroma intenso, in grado di soddisfare anche i palati più esigenti.
      </p>
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
