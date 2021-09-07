<template>
  <div class="accent">
    <v-container>
      <v-row class="pt-5">
        <v-col lg="6" class="light align-self-center">
          <div class="ma-2">
            <h1 class="display-2 font-weight-light white--text">Hello, I'm</h1>
            <h1 class="display-3 my-2 font-weight-black white--text">
              Randi Yulio Fajri
            </h1>
            <h1 class="display-1 font-weight-light white--text">
             a Web Developer
            </h1>
          </div>
          <v-row class="my-2">
            <v-col>
              <v-btn
                v-for="(icon, i) in icons"
                :key="i"
                :href="icon.href"
                fab
                depressed
                small
                :class="`ma-2 ${icon.color}`"
                ><v-icon class="white--text">{{ icon.icon }}</v-icon></v-btn
              >
            </v-col>
          </v-row>
          <v-btn
            depressed
            rounded
            dark
            class="ma-2"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=randijulio13@gmail.com"
            ><v-icon left>mdi-email</v-icon> Email Me</v-btn
          >
          <v-btn
            depressed
            rounded
            outlined
            light
            class="ma-2"
            download
            href="assets/RandiYulioFajri.pdf"
            ><v-icon left>mdi-clipboard-account</v-icon> My Resume</v-btn
          >
        </v-col>
        <v-col  lg="6" class="hidden-md-and-down justify-center pb-0">
          <v-img contain max-height="500" src="@/assets/me.jpg"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>

<style></style>
