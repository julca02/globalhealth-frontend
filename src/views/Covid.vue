<template>
  <DateNow title="Colombia"/>
  <CovidApiComponent covid="colombia" />
  <DateNow title="Mundo"/>
  <CovidApiComponent />
</template>

<script>
import CovidApiComponent from "../components/covid/CovidApiComponent.vue";
import DateNow from "../components/covid/DateNow.vue";
export default {
  components: { CovidApiComponent, DateNow },
};
</script>

<style>
</style>