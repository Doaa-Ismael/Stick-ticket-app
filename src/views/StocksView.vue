<template>
  <button @click="showAddStockForm">Add stock</button>
  <div v-if="showStockForm">
    <AddStockForm @add-stock="addStock" />
  </div>

  <div class="container">
    <Stock v-for="stock in stocks" :key="stock.name" :stock="stock" />
  </div>
</template>

<script>
import Stock from "../components/Stock.vue";
import AddStockForm from "../components/AddStockForm.vue";
import { STOCKS } from "../utils/constans";

function saveStocks(stocks) {
  sessionStorage.setItem(STOCKS, JSON.stringify(stocks));
}

function getSavedStocks() {
  const savedStocks = sessionStorage.getItem(STOCKS);
  return !savedStocks || savedStocks === "undefined"
    ? null
    : JSON.parse(savedStocks);
}

export default {
  components: { AddStockForm, Stock },
  data() {
    return {
      showStockForm: false,
    };
  },
  beforeCreate() {
    const initialStocks = [
      { name: "IBM", open: 89.9, close: 90, high: 100, low: 80 },
      { name: "Aple", open: 88.9, close: 70, high: 130, low: 80 },
      { name: "ABC", open: 89.9, close: 100, high: 100, low: 80 },
      { name: "CBC", open: 89.9, close: 95, high: 120, low: 80 },
      { name: "CDN", open: 89.9, close: 80, high: 97, low: 80 },
      { name: "OPP", open: 89.9, close: 87, high: 87, low: 80 },
    ];
    const savedStocks = getSavedStocks();
    if (savedStocks) {
      this.stocks = savedStocks;
    } else {
      this.stocks = initialStocks;
      saveStocks(this.stocks);
    }
  },
  methods: {
    addStock(newStock) {
      this.stocks = [...this.stocks, newStock];
      saveStocks(this.stocks);
      this.showStockForm = false;
    },
    showAddStockForm() {
      this.showStockForm = !this.showStockForm;
    },
  },
};
</script>
