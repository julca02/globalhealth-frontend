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
    <DateNow title="Colombia" />
    <CovidApiComponent
      covid="colombia"
      clase="px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
      lg:py-15"
    />
  </div>
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
    <DateNow title="Mundo" clase="text-blue-900" />
    <CovidApiComponent
      clase="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
      lg:py-15"
    />
  </div>
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