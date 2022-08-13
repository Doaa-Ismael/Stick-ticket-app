<template>
  <div class="card">
    <h3>
      Rate: {{ forexPair.rate }}
    </h3>
    <div>
      <p>Base: {{ forexPair.base }}</p>
      <p>Quote: {{ forexPair.quote }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForexPair",
  props: ["forexPair"],

};
</script>

