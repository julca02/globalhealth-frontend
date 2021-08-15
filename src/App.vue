<template>
  <div id="nav">
    <NavbarComponent/>
  </div>
  <router-view />
</template>

<script>
import NavbarComponent from './components/layout/NavBar/NavbarComponent.vue';
export default {
  components: {
    NavbarComponent
   
  }
};
</script>

