<template>
  <div id="nav">
    <NavbarComponent />
  </div>
  <router-view />
  <FooterComponent />
</template>

<script>
import NavbarComponent from "./components/layout/NavBar/NavbarComponent.vue";
import FooterComponent from "@/components/layout/Footer/FooterComponent.vue";
export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap');
.title {
  font-family: "Montserrat", sans-serif;
}
.nav {
  font-family: 'Urbanist', sans-serif;
}
</style>

