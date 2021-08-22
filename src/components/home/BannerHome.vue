<template>
  <div class="overflow-hidden relative flex items-center min-h-screen z-0">
    <div
      class="
        absolute
        bg-gradient-to-tr
        from-blue-900
        via-blue-600
        to-blue-200
        w-full
        h-2/5
        z-0
        top-0
      "
      style="border-bottom-left-radius: 5%; border-bottom-right-radius: 5%"
    ></div>
    <div class="absolute inset-x-auto w-full z-10">
      <div class="w-5/6 mx-auto shadow-md rounded-md bg-white">
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
                    font-sans
                    text-3xl
                    font-bold
                    tracking-tight
                    text-gray-600
                    sm:text-4xl
                    sm:leading-none
                  "
                >
                  GlobalHealth, bienvenidos a nuestra plataforma de salud.<br
                    class="hidden md:block"
                  />
                  Mejora tu experiencia en tramines.
                </h2>

                <p class="text-base text-gray-700 md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat officiis explicabo ratione quia excepturi.
                </p>
              </div>
            </div>
            <div>
              <img
                class="object-cover w-full h-56 rounded sm:h-96"
                src="@/assets/43071.jpg"
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


