<template>
  <footer class="footer">
    <div class="container px-6 py-10 mx-auto">
      <div class="lg:flex">
        <div class="w-full -mx-6 lg:w-2/5">
          <div class="px-6">
            <div>
              <router-link
                to="/"
                class="text-xl font-bold text-white hover:text-gray-700"
                ><img
                  src="@/assets/logo_white_large.png"
                  class="w-auto h-10 mx-auto"
                  alt="logo footer"
              /></router-link>
            </div>

            <p class="text-white max-w-md mt-2 mr-5">
              La única manera de mantener tu salud es comer lo que no quieres,
              beber lo que no te gusta y hacer cosas que preferirías no hacer
            </p>
          </div>
        </div>

        <div class="mt-6 lg:mt-0 lg:flex-1">
          <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3">
            <div class="flex flex-col items-center justify-center space-y-5">
              <router-link
                to="/"
                class="
                  text-base
                  font-medium
                  text-gray-50
                  hover:text-gray-300
                  hover:border-b-2
                  border-blue-600
                "
                >Inicio</router-link
              >
              <router-link
                to="/blog"
                class="text-base font-medium text-gray-50 hover:text-gray-300"
                >Blog</router-link
              >
              <router-link
                to="/noticias"
                class="text-base font-medium text-gray-50 hover:text-gray-300"
                >Actualidad</router-link
              >
            </div>

            <div class="flex flex-col items-center justify-center space-y-5">
              <router-link
                to="#"
                class="text-base font-medium text-gray-50 hover:text-gray-300"
                >Preguntas</router-link
              >
              <router-link
                to="#"
                class="text-base font-medium text-gray-50 hover:text-gray-300"
                >Informacion</router-link
              >
              <router-link
                to="#"
                class="text-base font-medium text-gray-50 hover:text-gray-300"
                >Privacidad</router-link
              >
            </div>

            <div>
              <div class="relative mt-1">
                <input
                  type="text"
                  class="
                    w-full
                    pl-5
                    pr-10
                    py-2
                    border-2 border-gray-200
                    rounded-xl
                    hover:border-gray-300
                    focus:outline-none
                    focus:border-blue-400
                    transition-colors
                  "
                  placeholder="Inscribete..."
                />
                <button
                  class="
                    block
                    w-7
                    h-7
                    text-center text-xl
                    leading-0
                    absolute
                    top-2
                    right-2
                    text-gray-300
                    focus:outline-none
                    hover:text-gray-600
                    transition-colors
                  "
                >
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="h-px my-6 bg-gray-300 border-none" />

      <div class="flex justify-between">
        <p class="text-base font-medium text-gray-50 hover:text-gray-300">
          © GlobalHealth
        </p>
        <div>
          <a
            href="https://github.com/julca02/globalhealth-frontend"
            target="_blank"
            ><PaperClipIcon class="text-white w-auto h-5"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/outline";
import { PaperClipIcon } from "@heroicons/vue/outline";
export default {
  components: {
    SearchIcon,
    PaperClipIcon,
  },
};
</script>

<style scoped>
.footer {
background: rgb(18,70,130);
background: linear-gradient(171deg, rgba(18,70,130,1) 49%, rgba(0,49,119,1) 67%);
}
</style>