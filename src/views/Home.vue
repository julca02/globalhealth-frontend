<template>
  <div class="home">
    <BannerHome />
    <ServiceCard />
    <TestimonialsHome />
    <NotificationLogin />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerHome from "../components/home/BannerHome.vue";
import TestimonialsHome from "../components/home/TestimonialsHome.vue";
import ServiceCard from "../components/home/ServiceCard.vue";
import NotificationLogin from '../components/home/NotificationLogin.vue';

export default {
  name: "Home",
  components: {
    TestimonialsHome,
    BannerHome,
    ServiceCard,
    NotificationLogin,
  },
};
</script>
    