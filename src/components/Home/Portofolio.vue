<template>
  <v-container class="my-5 py-5">
    <v-row>
      <v-col cols="12" class="d-flex justify-center my-5">
        <h1 class="display-2 font-weight-light">My Portfolios</h1>
      </v-col>
      <v-col
        v-for="(portfolio, i) in portfolios"
        :key="i"
        lg="3"
        md="6"
        sm="12"
      >
        <Card :portfolio="portfolio" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "@/components/Portfolio/Card.vue";
export default {
  components: { Card },
  computed: {
    portfolios() {
      return this.$store.getters.portfolios();
    },
  },
};
</script>

<style></style>
