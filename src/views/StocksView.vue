<template>
  <div class="stocks">
    <Stock v-for="stock in stocks" :key="stock.name" :stock="stock" />
  </div>
</template>

<script>
import Stock from "../components/Stock.vue";
export default {
  components: { Stock },
  data() {
    return {
      stocks: [
        { name: "IBM", open: 89.9, close: 90, high: 100, low: 80 },
        { name: "Aple", open: 88.9, close: 70, high: 130, low: 80 },
        { name: "ABC", open: 89.9, close: 100, high: 100, low: 80 },
        { name: "CBC", open: 89.9, close: 95, high: 120, low: 80 },
        { name: "CDN", open: 89.9, close: 80, high: 97, low: 80 },
        { name: "OPP", open: 89.9, close: 87, high: 87, low: 80 },
      ],
    };
  },
};
</script>

<style>
.stocks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
  row-gap: 8px;
  margin-top: 8px;
}

.details h4 {
  font-size: x-large;
}
</style>
