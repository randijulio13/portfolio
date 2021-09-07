<template>
  <v-container class="my-5 py-5">
    <v-row class="justify-center">
      <v-col cols="12" class="d-flex justify-center my-5">
        <h1 class="display-2 font-weight-light">My Skills</h1>
      </v-col>
      <v-col
        class="d-flex align-center justify-center text-center"
        lg="1"
        md="2"
        sm="4"
        v-for="logo in logos"
        :key="logo"
      >
        <v-img max-width="100" :src="logo"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
        "https://cdn.worldvectorlogo.com/logos/codeigniter.svg",
        "https://cdn.worldvectorlogo.com/logos/php-1.svg",
        "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg",
        "https://cdn.worldvectorlogo.com/logos/vue-js-1.svg",
        "https://cdn.worldvectorlogo.com/logos/vuetify.svg",
        "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        "https://cdn.worldvectorlogo.com/logos/jquery-4.svg",
        "https://cdn.worldvectorlogo.com/logos/mysql-3.svg",
        "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        "https://cdn.worldvectorlogo.com/logos/photoshop-cc-7.svg",
      ],
    };
  },
};
</script>

<style></style>
