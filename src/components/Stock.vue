<template>
  <div class="card">
    <div class="details">
      <h4 :style="{ color: stock.close >= stock.open ? 'green' : 'red' }">
        {{ stock.close }}
      </h4>
      <h4>{{ stock.name }}</h4>
    </div>
    <div>
      <p>Open: {{ stock.open }}</p>
      <p>Close: {{ stock.close }}</p>
      <p>High: {{ stock.high }}</p>
      <p>Low: {{ stock.low }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  props: ["stock"],
};
</script>

