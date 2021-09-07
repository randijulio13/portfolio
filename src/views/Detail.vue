<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col lg="8" md="12">
        <v-row>
          <v-col cols="12">
            <v-carousel hide-delimiters height="auto">
              <v-carousel-item
                v-for="(photo, i) in portfolio.photos"
                :key="i"
                :src="photo"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" class="text-center">
            <h1 class="display-2 font-weight-light">
              {{ portfolio.title }}
            </h1>
            <v-chip
              class="my-4 mr-2"
              color="black"
              text-color="white"
              v-for="(tag, i) in portfolio.tags"
              :key="i"
              >{{ tag }}</v-chip
            >
            <p class="subtitle-1">{{ portfolio.description }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    portfolio() {
      return this.$store.getters.portfolios(this.$route.params.link);
    },
  },
  mounted() {
    console.log(this.portfolio);
  },
};
</script>

<style></style>
