<template>
  <v-card elevation="1">
    <v-img lazy-src="https://picsum.photos/16/9" :src="portfolio.photos[0]"></v-img>
    <v-card-text>
      <h1 class="font-weight-bold title">{{ portfolio.title }}</h1>
      <h1 class="font-weight-light subtitle-2">{{ portfolio.detail }}</h1>
      <v-chip
        class="mt-2 mr-2"
        color="black"
        text-color="white"
        small
        v-for="(tag, i) in portfolio.tags"
        :key="i"
        >{{ tag }}</v-chip
      >
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :to="`/${portfolio.link}`" small text
        >Detail <v-icon right>mdi-arrow-right</v-icon></v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["portfolio"],
};
</script>

<style></style>
