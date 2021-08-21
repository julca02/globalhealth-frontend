<template>
      <div
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
              :d="iconoMostrar"
            />
          </svg>
        </div>
        <h6 class="text-4xl font-bold text-deep-purple-accent-400 title">
          {{ casosMostrar }}
        </h6>
        <p class="mb-2 font-bold text-md">{{ nombreMostrar }}</p>
        <p class="text-gray-700">{{ resumenMonstrar }}</p>
      </div>
</template>

<script>
export default {
  props: {
    icono: String,
    casos: Number,
    nombre: String,
    resumen: String,
  },
  setup(props) {
    return {
      iconoMostrar: props.icono,
      casosMostrar: props.casos,
      nombreMostrar: props.nombre,
      resumenMonstrar: props.resumen,
    };
  },
};
</script>
