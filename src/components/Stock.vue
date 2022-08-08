<template>
  <div class="stock">
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

<style>
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
