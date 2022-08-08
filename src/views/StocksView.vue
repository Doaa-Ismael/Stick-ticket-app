<template>
  <div class="stocks">
    <div class="stock" v-for="{name, open, close, high, low} in stocks">
      <div class="details">
        <h4  :style="{ color: close >= open ? 'green' : 'red' }">{{ close }}</h4>
        <h4>{{ name }}</h4>
      </div>
      <div>
        <p>Open: {{open}}</p>
        <p>Close: {{close}}</p>
        <p>High: {{high}}</p>
        <p>Low: {{low}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

.stock {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 220px;
  background: #c6c4c5b3;
  border-radius: 10px;
  padding: 8px;
}

.details {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.details h4 {
  font-size: x-large;
}


</style>
