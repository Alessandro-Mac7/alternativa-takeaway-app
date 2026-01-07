<template>
  <section>
    <div class="container hero-section">
      <app-quote text="panza mia fhatti capanna" author="Proverbio calabrese" />
      <p class="text-center my-5">
        Siamo una piccola rosticceria a conduzione familiare nata nel 2012 con l'intento
        di portare sul tavolo dei nostri clienti <strong>tradizione e contemporaneità</strong>.<br>
        Offriamo diversi servizi tra cui la <strong>consegna domicilio</strong> dei nostri prodotti e la progettazione e realizzazione di <strong>banchetti</strong>.
      </p>
      <div class="pizza-cta-wrapper" title="Scopri di più">
        <img src="../assets/home-full.png" @click="scroll('section1')" class="img-fluid img-app clickable pizza-cta" alt="Clicca per scoprire di più">
      </div>
    </div>

    <base-section title="La Pizza" id="section1" color="2">
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
      <div class="dough-cta-wrapper" title="Vai ai Contatti">
        <img src="../assets/impasto.png" @click="scroll('section2')" class="img-fluid img-app dough-cta" alt="Il nostro impasto">
      </div>

    </base-section>

    <base-section title="Contatti" id="section2">
      <div class="contatti-content">
        <div class="logo-cta-wrapper" title="Torna su">
          <img src="../assets/footer-logo.png" @click="scrollToTop" class="img-fluid logo-contatti logo-cta" alt="Logo Alternativa">
        </div>

        <a href="tel:+393207414601" class="phone-link">
          320 7414601
        </a>

        <p class="address">
          Via Coschi, <span class="address-number">42</span>, Lamezia Terme
        </p>

        <p class="hours">
          Siamo operativi dal <strong class="color4">Lunedì</strong> al <strong class="color4">Sabato</strong> <br>
          dalle 17:00 alle 22:30 <br>
          <strong class="color4">Domenica</strong> ci riposiamo 😀
        </p>

        <div class="social-links">
          <a target="_blank" rel="noopener noreferrer"
             href="https://www.facebook.com/alternativatakeaway/"
             class="social-link" title="Facebook">
            <img src="../assets/icon/facebook.png" class="social-icon" alt="Seguici su Facebook">
          </a>
          <a target="_blank" rel="noopener noreferrer"
             href="https://www.instagram.com/alternativa_take_away/"
             class="social-link" title="Instagram">
            <img src="../assets/icon/insta.png" class="social-icon" alt="Seguici su Instagram">
          </a>
        </div>
      </div>
    </base-section>

  </section>
</template>

<script>
import AppQuote from "@/components/app/AppQuote";
import BaseSection from "@/components/ui/BaseSection";
export default {
  components: {BaseSection, AppQuote},
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style>
/* Hero section - full viewport */
.hero-section {
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  padding-bottom: 2rem;
}

.img-app{
  max-width: 30rem !important;
}

/* Pizza CTA Animation */
.pizza-cta-wrapper {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.pizza-cta {
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
  transition: all 0.3s ease;
}

.pizza-cta:hover {
  animation-play-state: paused;
  transform: scale(1.05) rotate(2deg);
  filter: drop-shadow(0 15px 30px rgba(197, 194, 106, 0.4));
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-8px) rotate(1deg);
  }
  75% {
    transform: translateY(-4px) rotate(-1deg);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .pizza-cta,
  .dough-cta,
  .logo-cta {
    animation: none;
  }
}

/* Dough CTA Animation */
.dough-cta-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  cursor: pointer;
}

.dough-cta {
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
  transition: all 0.3s ease;
}

.dough-cta:hover {
  animation-play-state: paused;
  transform: scale(1.05) rotate(2deg);
  filter: drop-shadow(0 15px 30px rgba(197, 194, 106, 0.4));
}

/* Contatti Section */
.contatti-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

/* Logo CTA Animation - suggests scroll to top */
.logo-cta-wrapper {
  position: relative;
  cursor: pointer;
}

.logo-contatti {
  max-width: 12rem !important;
  margin-bottom: 1rem;
}

.logo-cta {
  animation: bounce-up 2s ease-in-out infinite;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));
  transition: all 0.3s ease;
}

.logo-cta:hover {
  animation-play-state: paused;
  transform: translateY(-8px) scale(1.05);
  filter: drop-shadow(0 12px 24px rgba(197, 194, 106, 0.4));
}

@keyframes bounce-up {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

.phone-link {
  font-family: 'Mynerve', cursive;
  font-size: 1.8rem;
  color: #D4A76B;
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

.phone-link:hover {
  color: #E5C08B;
  background-color: rgba(197, 194, 106, 0.15);
  transform: scale(1.02);
}

.phone-link:focus {
  outline: 3px solid #C5C26A;
  outline-offset: 2px;
}

.address {
  font-family: 'Mistrully', sans-serif;
  font-size: 1.3rem;
  margin: 0;
}

.address-number {
  font-family: 'Mynerve', cursive;
  color: #D4A76B;
}

.hours {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  min-width: 44px;
  min-height: 44px;
  border-radius: 12px;
  transition: all 0.2s ease;
  background-color: rgba(197, 194, 106, 0.1);
}

.social-link:hover {
  background-color: rgba(197, 194, 106, 0.25);
  transform: translateY(-3px);
}

.social-link:focus {
  outline: 3px solid #C5C26A;
  outline-offset: 2px;
}

.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  transition: all 0.2s ease;
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}

@media only screen and (max-width: 480px) {
  .img-fluid {
    width: 100% !important;
  }

  .logo-contatti {
    max-width: 10rem !important;
  }

  .phone-link {
    font-size: 1.5rem;
  }

  .address {
    font-size: 1.1rem;
  }

  .hours {
    font-size: 1.1rem;
  }
}
</style>
