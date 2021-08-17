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
      lg:py-20
    "
  >
    <Loading v-if="this.dataCovid === null"/>
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
    >
      <div
      class="text-center">
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
            class="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            ></polygon>
          </svg>
        </div>
        <h6 class="text-4xl font-bold text-deep-purple-accent-400">{{this.dataCovid.NUEVOS_CASOS || ''}}</h6>
        <p class="mb-2 font-bold text-md">Nuevos Casos</p>
        <p class="text-gray-700">
          Casos diarios de covid.
        </p>
      </div>

      <div class="text-center">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
          <svg class="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="text-4xl font-bold text-deep-purple-accent-400">{{this.dataCovid.NUEVOS_MUERTOS}}</h6>
        <p class="mb-2 font-bold text-md">Nuevos Muertos</p>
        <p class="text-gray-700">
          Muertos de covid en territorio colombiano. </p>
      </div>

      <div class="text-center">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
          <svg class="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="text-4xl font-bold text-deep-purple-accent-400">{{this.dataCovid.NUEVO_RECUPERADOS}}</h6>
        <p class="mb-2 font-bold text-md">Recuperados</p>
        <p class="text-gray-700">
          Personas recuperdas en Colombia. 
        </p>
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
  components:{
    Loading
  },

  created() {
    this.getCovid();
  },

  methods: {
    async getCovid() {
      try {
        let response = await getCovid.getCovidList()
        this.dataCovid = response.data.features[response.data.features.length-1].attributes || null
      } catch (error) {
        console.log(error)        
      }
    },
  },
};
</script>
