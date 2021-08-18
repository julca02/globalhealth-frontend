<template>
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
      lg:py-15
    "
  >
    <Loading v-if="dataCovid === null" />
    <div v-else class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in dataCovid"
        :key="item"
        class="
          text-center
          border-2 border-gray-200
          px-4
          py-6
          rounded-lg
          shadow-lg
        "
      >
        <div
          class="
            flex
            items-center
            justify-center
            w-10
            h-10
            mx-auto
            mb-3
            rounded-full
            bg-indigo-50
            sm:w-12
            sm:h-12
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="item.icono"
            />
          </svg>
        </div>
        <h6 class="text-4xl font-bold text-deep-purple-accent-400">
          {{ item.casos }}
        </h6>
        <p class="mb-2 font-bold text-md">{{ item.nombre }}</p>
        <p class="text-gray-700">{{ item.resumen }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import getCovid from "@/services/getCovid";
import Loading from "@/components/layout/LoadingComponent";
export default {
  data: () => ({
    dataCovid: null,
  }),
  components: {
    Loading,
  },
  props: {
    covid: String,
  },
  created() {
    this.getCovid();
  },
  methods: {
    async getCovid() {
      try {
        let response = await getCovid.getCovidColombia();
        let response2 = await getCovid.getCovidWorld();
        if (this.covid === "colombia") {
          this.dataCovid = [
            {
              casos: response.todayCases,
              nombre: "Nuevos Casos",
              resumen: "Casos diarios de covid.",
              icono:
                "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              casos: response.todayDeaths,
              nombre: "Nuevos Muertos",
              resumen: "Muertos de covid en territorio colombiano.",
              icono:
                "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              casos: response.todayRecovered,
              nombre: "Recuperados",
              resumen: "Personas recuperdas en Colombia.",
              icono:
                "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
            },
          ];
        } else {
          this.dataCovid = [
            {
              casos: response2.todayCases,
              nombre: "Nuevos Casos",
              resumen: "Casos diarios de covid en el mundo",
              icono:
                "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              casos: response2.todayDeaths,
              nombre: "Nuevos Muertos",
              resumen: "Muertos diarios en todo el mundo",
              icono:
                "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              casos: response2.todayRecovered,
              nombre: "Recuperados",
              resumen: "Personas recuperdas en el mundo",
              icono:
                "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
            },
          ];
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
