<template>
    <DateNow title="Noticias"/>
    <NewsComponent/>
</template>

<script>
import NewsComponent from '../components/news/NewsComponent.vue';
import DateNow from "../components/covid/DateNow.vue";

export default {
  components: { NewsComponent, DateNow },
  name: "News",
};
</script>

<style>
</style>