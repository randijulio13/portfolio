<template>
  <div>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-container class="pa-0 fill-height">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-btn to="/" depressed text
          ><span class="hidden-sm-and-down"
            ><v-icon left>mdi-home</v-icon> Home</span
          ><span class="hidden-md-and-up"
            ><v-icon>mdi-home</v-icon></span
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
