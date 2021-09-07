<template>
  <div>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-container class="pa-0 fill-height">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-btn to="/" depressed text
          ><span class="hidden-md-and-down"
            ><v-icon left>mdi-home</v-icon> Home</span
          ><span class="hidden-lg-and-up"
            ><v-icon>mdi-home</v-icon></span
          ></v-btn
        >
        <v-btn
          depressed
          text
          class="ma-2"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=randijulio13@gmail.com"
          ><span class="hidden-md-and-down"
            ><v-icon left>mdi-email</v-icon> Email Me</span
          ><span class="hidden-lg-and-up"
            ><v-icon>mdi-email</v-icon></span
          ></v-btn
        >
        <v-btn
          depressed
          dark
          class="ma-2"
          download
          href="assets/RandiYulioFajri.pdf"
          ><span class="hidden-md-and-down"
            ><v-icon left>mdi-clipboard-account</v-icon> My Resume</span
          ><span class="hidden-lg-and-up"
            ><v-icon>mdi-clipboard-account</v-icon></span
          ></v-btn
        >
      </v-container>
    </v-app-bar>
  </div>
</template>

<style></style>
