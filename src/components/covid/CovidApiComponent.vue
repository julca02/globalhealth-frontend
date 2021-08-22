<template>
  <div
    class="text-center border-2 border-gray-200 px-4 py-6 rounded-lg shadow-lg"
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
      <component
        :is="iconoMostrar"
        class="flex-shrink-0 h-6 w-6 text-blue-600"
        aria-hidden="true"
      />
    </div>
    <h6 class="text-4xl font-bold text-deep-purple-accent-400">
      {{ casosMostrar }}
    </h6>
    <p class="mb-2 font-bold text-md title">{{ nombreMostrar }}</p>
    <p class="text-gray-700">{{ resumenMonstrar }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icono: Function,
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
