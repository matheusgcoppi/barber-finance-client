<template>
  <Header :active-page="activePage"></Header>
  <div class="container">
    <form>
      <h2>New Expense</h2>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" id="description" required v-model="description" />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <CurrencyInput v-model="value" :options="{ currency: 'BRL' }" />
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" id="date" required v-model="date" />
      </div>
      <div class="form-group">
        <label for="payment">Payment Method</label>
        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option v-for="option in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import CurrencyInput from "./CurrencyInput";

export default {
  components: { Header, CurrencyInput },
  name: "App",
  setup() {
    const activePage = ref("expense");
    const value = ref(0.0);
    const description = ref("");
    const date = ref(null);
    const selected = ref("");
    const options = ref([
      { text: "Cash", value: 1 },
      { text: "Credit Card", value: 2 },
      { text: "Debit Card", value: 3 },
      { text: "Pix", value: 4 },
      { text: "Bill", value: 5 },
      { text: "Other", value: 6 },
    ]);

    return { activePage, value, options, description, date, selected };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

form {
  display: block;
  max-height: 450px;
  height: 100vh;
  max-width: 600px;
  width: 100vw;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>