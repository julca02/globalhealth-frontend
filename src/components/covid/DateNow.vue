<template>
  <div>
      <p
        class="
          mb-2
          text-xs
          font-semibold
          tracking-wide
          text-gray-600
          uppercase
          sm:text-center
        "
      >
        {{ dia }} {{ mes }} {{ año }}
      </p>
      <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
        <div>
          <p
            class="
              inline-block
              max-w-lg
              font-sans
              text-3xl
              font-extrabold
              leading-none
              tracking-tight
              text-black
              transition-colors
              duration-200
              hover:text-deep-purple-accent-700
              sm:text-4xl
            "
            :class="[clase]"
          >
            {{ title }}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
const mesNombre = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
export default {
  props: {
    title: String,
    clase: String,
  },
  setup() {
    const dia = ref(0);
    const mes = ref(0);
    const año = ref(0);
    const setTime = () => {
      const date = new Date();
      dia.value = date.getDate().toLocaleString();
      mes.value = mesNombre[date.getMonth()];
      año.value = date.getFullYear();
    };
    onMounted(() => {
      setTime();
    });
    return { dia, mes, año}
  },
};
</script>
