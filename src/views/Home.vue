<template>
  <div class="home">
    <BannerHome/>
    <Button/>
    <TestimonialsHome/>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerHome from '../components/home/BannerHome.vue'
import TestimonialsHome from '../components/home/TestimonialsHome.vue'
import Button from '../components/home/ButtonHome.vue'

export default {
  name: 'Home',
  components: {
    TestimonialsHome,
    Button,
    BannerHome
  }
}
</script>
