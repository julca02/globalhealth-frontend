<template>
  <div id="nav">
    <NavbarComponent/>
  </div>
  <router-view />
  <FooterComponent/>
</template>

<script>
import NavbarComponent from './components/layout/NavBar/NavbarComponent.vue';
import FooterComponent from '@/components/layout/Footer/FooterComponent.vue'
export default {
  components: {
    NavbarComponent,
    FooterComponent
   
  }
};
</script>

