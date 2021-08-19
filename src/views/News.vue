<template>
  <div
    class="
      px-4
      mx-auto
      text-center
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
      lg:pt-10
    "
  >
    <DateNow title="Noticias" clase="text-blue-900" />
  </div>
  <div
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
      lg:py-20
    "
  >
    <NewsComponent />
  </div>
</template>

<script>
import NewsComponent from "../components/news/NewsComponent.vue";
import DateNow from "../components/covid/DateNow.vue";

export default {
  components: { NewsComponent, DateNow },
  name: "News",
};
</script>

<style>
</style>