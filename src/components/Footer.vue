<template>
  <v-footer class="mt-5 d-flex justify-center black" padless>
    <v-card flat tile class="ma-5 black white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          :href="icon.href"
          fab
          text
          depressed
          small
          class="ma-2 white--text"
          ><v-icon class="white--text">{{ icon.icon }}</v-icon></v-btn
        >
      </v-card-text>

      <v-card-text class="white--text pt-0 px-5">
        Copyright &copy; Randi Yulio Fajri
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        href: "https://wa.me/6281373020035",
        icon: "mdi-whatsapp",
        color: "green",
      },
      {
        href: "https://fb.me/the13thjuly",
        icon: "mdi-facebook",
        color: "blue",
      },
      {
        href: "https://www.linkedin.com/in/randi-yulio-fajri-388422138/",
        icon: "mdi-linkedin",
        color: "primary",
      },
      {
        href: "https://instagram.com/randijuliofajri",
        icon: "mdi-instagram",
        color: "purple",
      },
    ],
  }),
};
</script>

<style></style>
