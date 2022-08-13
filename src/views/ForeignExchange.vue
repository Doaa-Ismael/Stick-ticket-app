<template>
  <button @click="showAddForexForm">Add New Pair</button>
  <div v-if="showForexForm">
    <AddForexPairForm @add-forex-pair="addForex" />
  </div>

  <div class="container">
    <ForexPair v-for="forexPair in forex" :key="forexPair.rate" :forexPair="forexPair" />
  </div>
</template>

<script>
import ForexPair from "../components/ForexPair.vue";
import { FOREX } from "../utils/constans";
import AddForexPairForm from "../components/AddForexPairForm.vue";

function saveForex(forex) {
  sessionStorage.setItem(FOREX, JSON.stringify(forex));
}

function getSavedForex() {
  const savedForex = sessionStorage.getItem(FOREX);
  return !savedForex || savedForex === "undefined"
      ? null
      : JSON.parse(savedForex);
}

export default {
  components: {AddForexPairForm,  ForexPair },
  data() {
    return {
      showForexForm: false,
    };
  },
  beforeCreate() {
    const initialForex = [
      { base: "USD", quote: 'EGP', rate: '19' },
      { base: "EUR", quote: 'USD', rate: 0.96 },
    ];
    const savedForex = getSavedForex();
    if (savedForex) {
      this.forex = savedForex;
    } else {
      this.forex = initialForex;
      saveForex(this.forex);
    }
  },

  created() {
    console.log("created!", this.forex)
  },
  methods: {
    addForex(newForexPair) {
      this.forex = [...this.forex, newForexPair];
      saveForex(this.forex);
      this.showForexForm = false;
    },
    showAddForexForm() {
      this.showForexForm = !this.showForexForm;
    },
  },
};
</script>
