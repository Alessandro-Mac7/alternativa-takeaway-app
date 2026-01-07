<template>
  <section class="container">

    <base-dialog :show="!!allergeni" title="Allergeni" @close="cleanAllergeniDialog">
      <div class="text-start">
          Alcuni prodotti possono essere surgelati all’origine o congelati in loco (mediante abbattimento rapido di
          temperatura) rispettando le procedure di autocontrollo ai sensi del regolamento Ce 852/2004.
        Invitiamo pertanto a rivolgersi al personale per avere tutte le informazioni relative al prodotto che
        desiderate».
        Allergeni – Il cliente è pregato di comunicare al personale la necessità di consumare alimenti privi di
        determinate sostanze allergeniche prima dell’ordinazione. Durante le preparazioni in cucina, non si possono
        escludere contaminazioni crociate. Pertanto i nostri piatti possono contenere le seguenti sostanze allergeniche
        ai sensi del Reg. UE 1169/11
        Tab. 2 - Elenco degli allergeni per i quali sussiste l’obbligo di indicazione in etichetta.
        Allegato III bis (Direttiva 2003/89/CE e ss. mm.)
        <ul class="list-unstyled text-start">
          <li>Cereali contenenti glutine (grano, orzo, segale, avena, farro, kamut o i loro ceppi ibridati) e prodotti
            derivati
          </li>
          <li>● Crostacei e prodotti derivati</li>
          <li>● Uova e prodotti derivati</li>
          <li>● Pesce e prodotti derivati</li>
          <li>● Arachidi e prodotti derivati</li>
          <li>● Soia e prodotti derivati</li>
          <li>● Latte e prodotti derivati (compreso lattosio)</li>
          <li>● Frutta a guscio cioè mandorle (Amigdalus communis), nocciole (Corylus avellana), noci comuni (Juglans
            regia),
            noci di acagiù (Anacardium occidentale), noci pecan [Carya illinoiensis (Wangenh) K. Koch], noci del Brasile
            (Bertholletia excelsa), pistacchi (Pistacia vera), noci del Queensland (Macadamia ternifolia) e prodotti
            derivati
          </li>
          <li>● Sedano e prodotti derivati</li>
          <li>● Senape e prodotti derivati</li>
          <li>● Semi di sesamo e prodotti derivati</li>
          <li>● Anidride solforosa e solfiti in concentrazioni superiori a 10 mg/kg o mg/l espressi come SO2</li>
          <li>● Lupino e prodotti a base di lupino*</li>
          <li>● Molluschi e prodotti a base di mollusco*</li>
        </ul>
        <p class="small">* Prodotti introdotti da Direttiva 2006/142, recepita a livello nazionale con D.Lgs. 178/2007.</p>
      </div>
    </base-dialog>

    <pizza-carousel :data="pizze"/>

    <!-- Category Filter Navigation -->
    <nav class="category-nav" aria-label="Categorie Pizza">
      <button
        @click="activeCategory = 'all'"
        :aria-pressed="activeCategory === 'all'"
        :class="['category-pill', { active: activeCategory === 'all' }]"
      >
        Tutte
      </button>
      <button
        v-if="hasLimitedPizzaMenu"
        @click="activeCategory = 'limited'"
        :aria-pressed="activeCategory === 'limited'"
        :class="['category-pill', { active: activeCategory === 'limited' }]"
      >
        Limited
      </button>
      <button
        @click="activeCategory = 'rosse'"
        :aria-pressed="activeCategory === 'rosse'"
        :class="['category-pill', { active: activeCategory === 'rosse' }]"
      >
        Rosse
      </button>
      <button
        @click="activeCategory = 'bianche'"
        :aria-pressed="activeCategory === 'bianche'"
        :class="['category-pill', { active: activeCategory === 'bianche' }]"
      >
        Bianche
      </button>
      <button
        @click="activeCategory = 'speciali'"
        :aria-pressed="activeCategory === 'speciali'"
        :class="['category-pill', { active: activeCategory === 'speciali' }]"
      >
        Speciali
      </button>
    </nav>

    <div class="size-legend">
      <div class="legend-item">
        <img src="../assets/icon/small.png" class="legend-icon" loading="lazy" alt="Pizza tonda">
        <span class="legend-text">Tonda</span>
      </div>
      <div class="legend-item">
        <img src="../assets/icon/large.png" class="legend-icon" loading="lazy" alt="Pizza in teglia">
        <span class="legend-text">Teglia</span>
      </div>
    </div>

    <div class="menu-sections">
      <transition name="section-fade">
        <div v-if="hasLimitedPizzaMenu && (activeCategory === 'all' || activeCategory === 'limited')" key="limited" class="menu-section">
          <menu-layout title="Limited" :data="limitedPizzaMenu"/>
        </div>
      </transition>
      <transition name="section-fade">
        <div v-if="activeCategory === 'all' || activeCategory === 'rosse'" key="rosse" class="menu-section">
          <menu-layout title="Le Rosse" :data="redPizzaMenu"/>
        </div>
      </transition>
      <transition name="section-fade">
        <div v-if="activeCategory === 'all' || activeCategory === 'bianche'" key="bianche" class="menu-section">
          <menu-layout title="Le Bianche" :data="whitePizzaMenu"/>
        </div>
      </transition>
      <transition name="section-fade">
        <div v-if="activeCategory === 'all' || activeCategory === 'speciali'" key="speciali" class="menu-section">
          <menu-layout title="Le Speciali" :data="specialPizzaMenu"/>
        </div>
      </transition>
    </div>

    <div class="important-notes">
      <p class="note-text">
        * Ogni ingrediente aggiunto costa €1<br>
        ** Due gusti disponibili solo per formato Family
      </p>
      <button class="allergeni-button" @click="showAllergeni">
        Informazioni Allergeni
      </button>
    </div>

  </section>
</template>

<script>
import MenuLayout from "@/components/app/MenuLayout";
import PizzaCarousel from '@/components/app/PizzaCarousel'
import BaseDialog from "@/components/ui/BaseDialog";
export default {
  components: {BaseDialog, MenuLayout, PizzaCarousel},
  data() {
    return {
      helper: this.$util,
      allergeni: false,
      activeCategory: 'all',
      pizze: ['pizze/tropena.png', 'pizze/mortazza.png', 'pizze/colorata.png', 'pizze/diavola.png', 'pizze/parmigiana.png', 'pizze/silana.png']
    };
  },
  computed: {
    redPizzaMenu() {
      return this.$store.getters['menu/redPizzaMenu'];
    },
    whitePizzaMenu() {
      return this.$store.getters['menu/whitePizzaMenu'];
    },
    specialPizzaMenu() {
      return this.$store.getters['menu/specialPizzaMenu'];
    },
    limitedPizzaMenu() {
      return this.$store.getters['menu/limitedPizzaMenu'];
    },
    hasLimitedPizzaMenu() {
      return this.$store.getters['menu/hasLimitedPizzaMenu'];
    },
  },
  methods: {
    showAllergeni() {
      this.allergeni = true;
    },
    cleanAllergeniDialog() {
      this.allergeni = false;
    }
  }
}
</script>

<style>
/* Category Filter Navigation */
.category-nav {
  position: sticky;
  top: 0;
  z-index: 900;
  background: linear-gradient(to bottom, #393939 85%, rgba(57, 57, 57, 0) 100%);
  padding: 1rem 0;
  margin: 0 -12px;
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  flex-wrap: wrap;
}

.category-pill {
  background-color: rgba(123, 122, 91, 0.25);
  color: #D4D0C5;
  border: 2px solid transparent;
  padding: 0.5rem 1.1rem;
  border-radius: 24px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 44px;
  min-width: 80px;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.category-pill::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-pill:hover {
  background-color: rgba(197, 194, 106, 0.3);
  color: #E5DD8A;
  border-color: rgba(197, 194, 106, 0.5);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.category-pill:hover::before {
  opacity: 1;
}

.category-pill.active {
  background: linear-gradient(135deg, #C5C26A 0%, #b5b25a 100%);
  color: #393939;
  border-color: #C5C26A;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(197, 194, 106, 0.4);
  transform: scale(1.02);
}

.category-pill:active {
  transform: scale(0.98);
}

.category-pill:focus-visible {
  outline: 3px solid #E5DD8A;
  outline-offset: 2px;
}

/* Menu section animations */
.menu-sections {
  position: relative;
}

.menu-section {
  will-change: transform, opacity;
}

.section-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}

.section-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.section-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.section-fade-enter-to,
.section-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 480px) {
  .category-nav {
    gap: 0.4rem;
    padding: 0.75rem 0.5rem;
  }

  .category-pill {
    font-size: 1.05rem;
    padding: 0.4rem 0.9rem;
    min-width: 70px;
  }
}

/* Size legend styles */
.size-legend {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.25rem;
  background-color: rgba(123, 122, 91, 0.15);
  border-radius: 12px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.legend-icon {
  width: 3rem;
  height: 3rem;
  object-fit: contain;
}

.legend-text {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #E5DD8A;
}

/* Important notes section */
.important-notes {
  background-color: rgba(197, 194, 106, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 2rem 0;
  text-align: center;
}

.note-text {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #D4D0C5;
}

.allergeni-button {
  background: linear-gradient(135deg, #C5C26A 0%, #a8a55a 100%);
  color: #393939;
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 12px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  min-height: 44px;
  width: 100%;
  max-width: 300px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(197, 194, 106, 0.3);
  position: relative;
  overflow: hidden;
}

.allergeni-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.allergeni-button:hover {
  background: linear-gradient(135deg, #d4d277 0%, #b5b262 100%);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 20px rgba(197, 194, 106, 0.4);
}

.allergeni-button:hover::before {
  opacity: 1;
}

.allergeni-button:active {
  transform: translateY(-1px) scale(0.99);
  box-shadow: 0 4px 10px rgba(197, 194, 106, 0.3);
}

.allergeni-button:focus-visible {
  outline: 3px solid #E5DD8A;
  outline-offset: 2px;
}

p {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.3rem;
}
</style>
