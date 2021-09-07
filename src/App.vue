<template>
  <v-app>
    <Appbar />
      <v-main>
    <transition name="fade" mode="out-in">
        <router-view />
    </transition>
      </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Appbar from "./components/Appbar.vue";
export default {
  name: "App",
  components: { Footer, Appbar },
  data: () => ({
    //
  }),
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
