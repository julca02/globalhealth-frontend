<template>
  <div>
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
          >
            {{ title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dia: 0,
    mes: 0,
    año: 0,
    mesNombre: [
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
    ],
  }),
  props: {
    title: String,
  },
  methods: {
    setTime() {
      const date = new Date();
      this.dia = date.getDate().toLocaleString();
      this.mes = this.mesNombre[date.getMonth()];
      this.año = date.getFullYear().toLocaleString();
    },
  },
  mounted() {
    this.setTime();
  },
};
</script>

<style>
</style>