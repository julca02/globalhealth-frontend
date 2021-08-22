<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-10 mx-auto">
      <div class="text-center max-w-xl mx-auto">
        <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
          Aquí todos son <br /> escuchados
        </h1>
        <h3 class="text-xl mb-5 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <div class="text-center mb-10">
          <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="lg:w-1/3 lg:mb-0 mb-6 p-4"
          v-for="item in arrayTestiomonials"
          :key="item"
        >
          <!-- component -->
          <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div class="flex justify-center md:justify-end -mt-16">
              <img
                class="
                  w-20
                  h-20
                  object-cover
                  rounded-full
                  border-2 border-indigo-500
                "
                :src="item.imagen"
              />
            </div>
            <div>
              <h2 class="text-gray-800 text-2xl font-semibold">
                {{ item.nombre }}
              </h2>
              <p class="mt-2 text-gray-600 italic">
                {{ item.testimonio }}
              </p>
            </div>
            <div class="flex justify-end mt-4">
              <p class="font-medium text-blue-500">
                {{ item.fecha.toLocaleString() }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const arrayTestiomonials = [
  {
    imagen: "https://electronicssoftware.net/wp-content/uploads/user.png",
    testimonio:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    nombre: "Pepito Perez",
    fecha: new Date(2020, 2, 12),
  },
  {
    imagen:
      "https://i.pinimg.com/originals/72/cd/96/72cd969f8e21be3476277d12d44c791c.png",
    testimonio:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    nombre: "Jesus Garcia",
    fecha: new Date(2019, 3, 9),
  },
  {
    imagen:
      "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
    testimonio:
      "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    nombre: "Cecilie Perez",
    fecha: new Date(2010, 2, 8),
  },
];

export default {
  name: "TestimonialsHome",

  setup() {
    return {
      arrayTestiomonials,
    };
  },
};
</script>

<style>
</style>