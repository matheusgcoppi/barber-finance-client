<template>
  <Header :active-page="activePage" />
</template>

<script>
import Header from "@/components/Header.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {
    Header: Header,
  },
  setup() {
    const activePage = ref("finance");
    return { activePage };
  },
};
</script>

<style>
* {
  margin: 0;
}
</style>