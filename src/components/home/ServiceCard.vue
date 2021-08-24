<template>
  <div
    class="
      px-4
      my-10
      py-10
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
      lg:py-10
    "
  >
    <div class="flex flex-wrap text-center mb-6 md:mb-10">
      <div class="lg:w-1/2">
        <h2
          class="
            max-w-md
            mb-6
            text-3xl
            md:text-5xl
            font-bold
            tracking-tight
            text-gray-600
            sm:text-4xl
            sm:leading-none
            xl:max-w-lg
            title
          "
        >
          Nuestros servicios siempre estarán aquí!
        </h2>
      </div>
      <div class="lg:w-1/2">
        <p class="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde omnis
          iste natus.
        </p>
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-center">
      <div class="mx-10" v-for="item in servicesCard" :key="item">
        <div class="md:flex md:justify-center md:space-x-8">
          <div
            class="
              mt-16
              py-4
              px-4
              bg-whit
              w-72
              bg-white
              rounded-xl
              border-2
              border-gray-50
              hover:shadow-xl
              transform
              hover:scale-110
              transition
              duration-500
              mx-auto
              md:mx-0
            "
          >
            <div class="w-sm text-center">
              <font-awesome-icon
                :icon="item.icon"
                size="lg"
                spin
                class="text-blue-600"
              />
              <div class="mt-4 text-blue-600 text-center">
                <h1 class="text-xl font-bold nav">{{ item.name }}</h1>
                <p class="mt-4 text-gray-600 font-medium">
                  {{ item.abstract }}
                </p>
                <router-link
                  :to="item.href"
                  class="
                    block
                    my-8
                    mb-4
                    py-2
                    px-14
                    border-2
                    border-blue-100
                    rounded-full
                    bg-blue-600
                    text-white
                    tracking-widest
                    hover:bg-white
                    hover:text-blue-600
                    transition
                    duration-200
                  "
                >
                  Más
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const servicesCard = [
  {
    name: "Historial clinico",
    abstract:
      "Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.",
    href: "/",
    icon: "stethoscope",
  },
  {
    name: "Noticias de salud",
    abstract:
      "Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.",
    href: "/noticias",
    icon: "newspaper",
  },
  {
    name: "Covid",
    abstract:
      "Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.",
    href: "/covid-noticias",
    icon: "virus",
  },
];
export default {
  setup() {
    return {
      servicesCard,
    };
  },
};
</script>