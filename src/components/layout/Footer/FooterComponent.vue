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

            <p class="text-white max-w-md mt-2 mr-5 nav">
              La única manera de mantener tu salud es comer lo que no quieres,
              beber lo que no te gusta y hacer cosas que preferirías no hacer
            </p>
          </div>
        </div>

        <div class="mt-6 lg:mt-0 lg:flex-1">
          <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3">
            <div class="flex flex-col items-center justify-center space-y-5">
              <router-link
              v-for="(link, i) in navFooter.slice(0, 3)"
                :to="link.href"
                :key="i"
                class="
                  transition duration-500 ease-in-out transform text-white hover:text-medium hover:-translate-y-1 hover:scale-110 nav
                "
                >{{link.name}}</router-link
              >
            </div>

            <div class="flex flex-col items-center justify-center space-y-5">
              <router-link
              v-for="(link, i) in navFooter.slice(3, 6)"
                :to="link.href"
                :key="i"
                class="
                  transition duration-500 ease-in-out transform text-white hover:text-medium hover:-translate-y-1 hover:scale-110 nav
                "
                >{{link.name}}</router-link
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
                  <font-awesome-icon :icon="['fas', 'search']" size="lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="h-px my-6 bg-gray-300 border-none" />

      <div class="flex justify-between">
        <p class="text-medium text-gray-50 title">© GlobalHealth</p>
        <div>
          <a
            href="https://github.com/julca02/globalhealth-frontend"
            target="_blank"
            ><font-awesome-icon
              :icon="['fab', 'github']"
              size="lg"
              class="text-white"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
const navFooter = [
  { name: "Inicio", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Actualidad", href: "/noticias" },
  { name: "Preguntas", href: "/noticias" },
  { name: "Informacion", href: "/noticias" },
  { name: "Privacidad", href: "/noticias" },
];
export default {
  setup() {
    return {
      navFooter,
    };
  },
};
</script>

<style scoped>

.footer {
background: rgb(16,67,152);
background: linear-gradient(209deg, rgba(16,67,152,1) 21%, rgba(24,86,187,1) 34%, rgba(36,107,221,1) 94%);
}
</style>