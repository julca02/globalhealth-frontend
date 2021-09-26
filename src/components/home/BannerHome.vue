<template>
  <div class="relative flex items-center h-full z-0">
    <div
      class="
        absolute
        bg-blue-100
        w-full
        h-4/6
        top-0
        rounded-b-3xl
      "
    ></div>
    <div class="w-full z-10 mt-36">
      <div class="w-5/6 mx-auto shadow-md rounded-md shadow-2xl bg-white">
        <div
          class="
            px-4
            py-20
            mx-auto
            sm:max-w-xl
            md:max-w-full
            lg:max-w-screen-xl
            md:px-24
            lg:px-8
            lg:py-10
          "
        >
          <div class="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div class="flex flex-col justify-center">
              <div class="max-w-xl mb-6">
                <h2
                  class="
                    max-w-lg
                    mb-6
                    text-3xl
                    font-bold
                    tracking-tight
                    text-gray-600
                    sm:text-4xl
                    title
                  "
                >
                  GlobalHealth, bienvenidos a nuestra plataforma de salud<br
                    class="hidden md:block"
                  />
                  Mejora tu experiencia en tramites.
                </h2>

                <p class="text-base text-gray-700 md:text-lg nav">
                  Nos comprometemos en mejorar tu experiencia con cualquier tipo de entidades de salud, a través de nuestro servicios que grantizan una nueva forma de atender a nuestros pacientes de forma digital y eficaz.
                </p>
              </div>
            </div>
            <div>
              <img
                class="object-cover w-full h-56 rounded sm:h-96"
                src="@/assets/43071.jpg"
                alt="banner landingpage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerHome",
};
</script>


