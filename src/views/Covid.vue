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
    <DateNow title="Buscar pais" />
    <SearchCountry @buscar="searchCountry = $event" />
    <ListCovid v-if="searchCountry" :covid="searchCountry" />
    <ListCovid v-else :covid="lastCountry" />
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
    <DateNow title="Colombia" />
    <ListCovid covid="Colombia" />
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
    <ListCovid />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import DateNow from "../components/covid/DateNow.vue";
import ListCovid from "../components/covid/ListCovid.vue";
import SearchCountry from "../components/covid/SearchCountry.vue";
export default {
  components: { DateNow, ListCovid, SearchCountry },
  setup() {
    const searchCountry = ref("");
    const lastCountry = localStorage.getItem("CountryCovid");
    return {
      searchCountry,
      lastCountry,
    };
  },
};
</script>