<template>
  <div>
    <Hero />
    <Portofolio />
    <Skills />
  </div>
</template>

<script>
import Hero from "../components/Home/Hero";
import Portofolio from "../components/Home/Portofolio";
import Skills from "../components/Home/Skills";

export default {
  name: "Home",

  components: {
     Hero,Portofolio,Skills
  },
};
</script>
