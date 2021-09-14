<template>
  <div v-if="dataCovid === null">
    <LoadingComponent tam="6x"/>
  </div>
  <div v-else>
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 py-10">
      <CovidApiComponent
      />
    </div>
  </div>
</template>

<script>
import getCovid from "@/services/getCovid";
import LoadingComponent from "@/components/layout/LoadingComponent";
import { ref } from "@vue/reactivity";
import { provide, watchEffect } from "@vue/runtime-core";
import CovidApiComponent from "./CovidApiComponent.vue";
export default {
  components: {
    LoadingComponent,
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
          localStorage.setItem('CountryCovid', props.covid)
          let response = await getCovid.getCovidCountry(props.covid);
          dataCovid.value = [
            {
              casos: response.todayCases,
              nombre: "Nuevos Casos",
              resumen: `Casos diarios de covid en ${props.covid}`,
              icono: "viruses",
            },
            {
              casos: response.todayDeaths,
              nombre: "Nuevos Muertos",
              resumen: `Muertos de covid en ${props.covid}.`,
              icono: "skull-crossbones",
            },
            {
              casos: response.todayRecovered,
              nombre: "Nuevos Recuperados",
              resumen: `Personas recuperdas en ${props.covid}.`,
              icono: "heart",
            },
          ];
        } else {
          let response = await getCovid.getCovidWorld();
          dataCovid.value = [
            {
              casos: response.todayCases,
              nombre: "Nuevos Casos",
              resumen: "Casos diarios de covid en el mundo",
              icono: "viruses",
            },
            {
              casos: response.todayDeaths,
              nombre: "Nuevos Muertos",
              resumen: "Muertos diarios en todo el mundo",
              icono: "skull-crossbones",
            },
            {
              casos: response.todayRecovered,
              nombre: "Nuevos Recuperados",
              resumen: "Personas recuperdas en el mundo",
              icono: "heart",
            },
          ];
        }
      } catch (error) {
        console.log(`El pais ${props.covid} no existe, intenta escribirlo en ingles`)
      }
    };
    provide('result', dataCovid)
    watchEffect(() => {
      getCovidNews();
    });
    return {
      dataCovid,
    };
  },
};
</script>