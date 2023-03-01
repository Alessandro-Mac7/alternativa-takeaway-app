<template>
  <section class="container">
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
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

    <p class="fw-bold my-5">
      <img src="../assets/icon/small.png" class="icon" alt=""> = tonda &nbsp;
      <img src="../assets/icon/large.png" class="icon" alt=""> = in teglia
    </p>
    <menu-layout v-show="hasLimitedPizzaMenu" title="Limited" :data="limitedPizzaMenu"/>
    <menu-layout title="Le Rosse" :data="redPizzaMenu"/>
    <menu-layout title="Le Bianche" :data="whitePizzaMenu"/>
    <menu-layout title="Le Speciali" :data="specialPizzaMenu"/>

    <div class="row my-5">
      <div class="col-12 text-center pb-4">
        <p class="small ">
          * ogni ingrediente aggiunto costa 1€<br>
          ** si possono scegliere al massimo due gusti solo per il formato Family <br>
          <span class="allergeni" @click="showAllergeni"> *** allergeni </span>
        </p>
      </div>
    </div>

    <div class="row pb-5 g-4">
      <div class="col-md-6">
        <base-app-button class="bg-2" title="Fritti" @click="pushRoute('fritti')"/>
      </div>
      <div class="col-md-6">
        <base-app-button class="bg-3" title="Beverage" @click="pushRoute('beverage')"/>
      </div>
    </div>

  </section>
</template>

<script>
import MenuLayout from "@/components/app/MenuLayout";
import PizzaCarousel from '@/components/app/PizzaCarousel'
import BaseDialog from "@/components/ui/BaseDialog";

export default {
  components: {BaseDialog, MenuLayout, PizzaCarousel},
  created() {
    let imageLoaded = 0;
    this.isLoading = true
    for (const imageSrc of this.pizze) {
      const img = new Image();
      img.src = this.helper.getImgUrl(imageSrc);

      img.onload = () => {
        imageLoaded++;
        if (imageLoaded === this.pizze.length) {
          this.isLoading = false;
        }

        console.log(imageLoaded);
      };
    }
    // this.loadPage("approfondimenti");
  },
  data() {
    return {
      helper: this.$util,
      isLoading: false,
      allergeni: false,
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
    }
  },
  methods: {
    pushRoute(route) {
      this.$router.push(route);
    },
    showAllergeni() {
      this.allergeni = true;
    },
    cleanAllergeniDialog() {
      this.allergeni = false
    }
  }
}
</script>

<style>
.icon {
  width: 2.4rem;
}

p {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.3rem;
}
.allergeni {
  font-weight: bold;
  cursor: pointer;
}
.allergeni:hover, .allergeni:focus{
  color: #9f843d;
}
</style>
