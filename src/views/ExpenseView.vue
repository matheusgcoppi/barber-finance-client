<template>
  <Header :activePage="activePage"></Header>
</template>

<script>
import Header from "@/components/Header.vue";
import { ref } from "vue";

export default {
  components: { Header },
  setup() {
    const activePage = ref("expense");
    return { activePage };
  },
};
</script>

<style scoped></style>