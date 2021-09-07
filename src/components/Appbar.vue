<template>
  <div>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-container class="pa-0 fill-height">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-btn to="/" depressed text
          ><v-icon left>mdi-home</v-icon> Home</v-btn
        >
        <v-btn
          depressed
          text
          class="ma-2"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=randijulio13@gmail.com"
          ><v-icon left>mdi-email</v-icon> Email Me</v-btn
        >
        <v-btn
          depressed
          dark
          class="ma-2"
          download
          href="assets/RandiYulioFajri.pdf"
          ><v-icon left>mdi-clipboard-account</v-icon> My Resume</v-btn
        >
      </v-container>
    </v-app-bar>
  </div>
</template>

<style></style>
