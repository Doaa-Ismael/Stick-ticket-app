<template>
  <form @submit="addStock">
    <label>base:</label>
    <input v-model="base" required />
    <label>quote:</label>
    <input v-model="quote" required />
    <label>rate:</label>
    <input v-model="rate" type="number" required />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "AddForexPairForm",
  emits: ["add-forex-pair"],
  data() {
    return {
      base: "",
      quote: "",
      rate: "",
    };
  },
  methods: {
    addStock(e) {
      e.preventDefault();

      const newStock = {
        base: this.base,
        quote: this.quote,
        rate: this.rate,
      };
      this.$emit("add-forex-pair", newStock);
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}

button {
  padding: 8px;
}
</style>
