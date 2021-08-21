<template>
  <div v-if="dataCovid === null">
    <Loading />
  </div>
  <div v-else>
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 py-10">
      <CovidApiComponent
        v-for="item in dataCovid"
        :key="item.nombre"
        :icono="item.icono"
        :casos="item.casos"
        :nombre="item.nombre"
        :resumen="item.resumen"
      />
    </div>
  </div>
</template>

<script>
import getCovid from "@/services/getCovid";
import Loading from "@/components/layout/LoadingComponent";
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import CovidApiComponent from "./CovidApiComponent.vue";
export default {
  components: {
    Loading,
    CovidApiComponent,
  },
  props: {
    covid: {
      type: String,
    },
  },
  setup(props) {
    const dataCovid = ref(null);
    const getCovidNews = async () => {
      try {
        if (props.covid) {
          console.log(props.covid)
          localStorage.setItem('CountryCovid', props.covid)
          let response = await getCovid.getCovidCountry(props.covid);
          dataCovid.value = [
            {
              casos: response.todayCases,
              nombre: "Nuevos Casos",
              resumen: `Casos diarios de covid en ${props.covid}`,
              icono:
                "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              casos: response.todayDeaths,
              nombre: "Nuevos Muertos",
              resumen: `Muertos de covid en ${props.covid}.`,
              icono:
                "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              casos: response.todayRecovered,
              nombre: "Nuevos Recuperados",
              resumen: `Personas recuperdas en ${props.covid}.`,
              icono:
                "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
            },
          ];
        } else {
          let response = await getCovid.getCovidWorld();
          dataCovid.value = [
            {
              casos: response.todayCases,
              nombre: "Nuevos Casos",
              resumen: "Casos diarios de covid en el mundo",
              icono:
                "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              casos: response.todayDeaths,
              nombre: "Nuevos Muertos",
              resumen: "Muertos diarios en todo el mundo",
              icono:
                "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              casos: response.todayRecovered,
              nombre: "Nuevos Recuperados",
              resumen: "Personas recuperdas en el mundo",
              icono:
                "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
            },
          ];
        }
      } catch (error) {
        console.log(error);
      }
    };
    watchEffect(() => {
      getCovidNews();
    });
    return {
      dataCovid,
    };
  },
};
</script>