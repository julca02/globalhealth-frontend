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
import { SearchCircleIcon, EmojiSadIcon, HeartIcon } from '@heroicons/vue/outline';
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
              icono: SearchCircleIcon,
            },
            {
              casos: response.todayDeaths,
              nombre: "Nuevos Muertos",
              resumen: `Muertos de covid en ${props.covid}.`,
              icono: EmojiSadIcon,
            },
            {
              casos: response.todayRecovered,
              nombre: "Nuevos Recuperados",
              resumen: `Personas recuperdas en ${props.covid}.`,
              icono: HeartIcon,
            },
          ];
        } else {
          let response = await getCovid.getCovidWorld();
          dataCovid.value = [
            {
              casos: response.todayCases,
              nombre: "Nuevos Casos",
              resumen: "Casos diarios de covid en el mundo",
              icono: SearchCircleIcon,
            },
            {
              casos: response.todayDeaths,
              nombre: "Nuevos Muertos",
              resumen: "Muertos diarios en todo el mundo",
              icono: EmojiSadIcon,
            },
            {
              casos: response.todayRecovered,
              nombre: "Nuevos Recuperados",
              resumen: "Personas recuperdas en el mundo",
              icono: HeartIcon,
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