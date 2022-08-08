<template>
  <form @submit="addStock">
    <label>name:</label>
    <input v-model="name" required />
    <label>open:</label>
    <input v-model="open" type="number" required />
    <label>close:</label>
    <input v-model="close" type="number" required />
    <label>high:</label>
    <input v-model="high" type="number" />
    <label>low:</label>
    <input v-model="low" type="number" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "AddStockForm",
  emits: ["add-stock"],
  data() {
    return {
      name: "",
      open: "",
      close: "",
      high: "",
      low: "",
    };
  },
  methods: {
    addStock(e) {
      e.preventDefault();

      const newStock = {
        name: this.name,
        open: this.open,
        close: this.close,
        high: this.high,
        low: this.low,
      };
      this.$emit("add-stock", newStock);
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
