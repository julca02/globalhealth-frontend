<template>
  <div class="relative min-h-screen flex">
    <div
      class="
        flex flex-col
        sm:flex-row
        items-center
        md:items-start
        sm:justify-center
        md:justify-start
        flex-auto
        min-w-0
        bg-white
      "
    >
      <div
        class="
          sm:w-1/2
          xl:w-3/5
          h-full
          hidden
          md:flex
          flex-auto
          items-center
          justify-center
          p-10
          overflow-hidden
          bg-purple-900
          text-white
          bg-no-repeat bg-cover
          relative
        "
        style="
          background-image: url(https://static.vecteezy.com/system/resources/previews/001/206/141/original/doctors-png.png);
        "
      >
        <div
          class="
            absolute
            bg-gradient-to-b
            from-blue-300
            to-blue-500
            opacity-75
            inset-0
            z-0
          "
        ></div>
        <div class="w-full max-w-md z-10">
          <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
            Globalhealth
          </div>
          <div class="sm:text-sm xl:text-md text-gray-200 font-normal">
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s when an unknown printer
            took a galley of type and scrambled it to make a type specimen book
            it has?
          </div>
        </div>
      </div>
      <div
        class="
          md:flex
          md:items-center
          md:justify-center
          w-full
          sm:w-auto
          md:h-full
          w-2/5
          xl:w-2/5
          p-8
          md:p-10
          lg:p-14
          sm:rounded-lg
          md:rounded-none
          bg-white
        "
      >
        <div class="max-w-md w-full space-y-8">
          <div class="text-center">
            <img src="@/assets/logo.svg" class="mx-auto" />
            <h2 class="mt-6 text-3xl font-bold text-gray-900 nav">
              Bienvenido
            </h2>
          </div>
          <div class="flex flex-row justify-center items-center space-x-3">
            <a
              href="https://www.behance.net/ajeeshmon"
              target="_blank"
              class="
                w-11
                h-11
                items-center
                justify-center
                inline-flex
                rounded-2xl
                font-bold
                text-lg
                bg-blue-900
                hover:shadow-lg
                cursor-pointer
                transition
                ease-in
                duration-300
              "
              ><img class="w-4 h-4" src="" alt=""
            /></a>
          </div>
          <div class="flex items-center justify-center space-x-2">
            <span class="h-px w-16 bg-gray-200"></span>
            <span class="text-gray-300 font-normal">o</span>
            <span class="h-px w-16 bg-gray-200"></span>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div class="relative">
              <div class="absolute right-3 mt-4">
                <font-awesome-icon
                  icon="asterisk"
                  size="xs"
                  class="text-blue-500"
                />
              </div>
              <p v-if="loggedIn" class="text-xs text-red-500 text-center">
                {{ loggedIn.payload }}*
              </p>
              <label
                class="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                for="email"
                >Email</label
              >
              <input
                class="
                  w-full
                  text-base
                  px-4
                  py-2
                  border-b border-gray-300
                  focus:outline-none
                  rounded-2xl
                  focus:border-blue-500
                "
                id="email"
                autofocus
                type="email"
                placeholder="mail@example.com"
                required
                v-model="email"
              />
            </div>
            <div class="mt-8 content-center">
              <label
                class="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                for="password"
              >
                Contraseña
              </label>
              <input
                class="
                  w-full
                  content-center
                  text-base
                  px-4
                  py-2
                  border-b
                  rounded-2xl
                  border-gray-300
                  focus:outline-none
                  focus:border-blue-500
                "
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                v-model="password"
              />
            </div>
            <div class="flex items-center justify-end">
              <div class="text-sm">
                <a href="#" class="text-indigo-400 hover:text-blue-500">
                  Olvidaste la contraseña?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="
                  disabled:opacity-25
                  w-full
                  flex
                  justify-center
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-600
                  hover:bg-gradient-to-l
                  hover:from-blue-600
                  hover:to-blue-800
                  text-gray-100
                  p-4
                  rounded-full
                  tracking-wide
                  font-semibold
                  shadow-lg
                  cursor-pointer
                  transition
                  ease-in
                  duration-500
                "
                :disabled="
                  !email || !password || this.$store.state.User.isLoading
                "
                @click.prevent="signin"
              >
                <span className="inline-block mr-2">
                  <div
                    v-if="this.$store.state.User.isLoading"
                    class="flex justify-center"
                  >
                    <LoadingComponent :tam="30" />
                    <span>Cargando...</span>
                  </div>
                  <span v-else>Ingresa</span>
                </span>
              </button>
            </div>
            <p
              class="
                flex flex-col
                items-center
                justify-center
                mt-10
                text-center text-md text-gray-500
              "
            >
              <span>No tienes cuenta?</span>
              <a
                href="#"
                class="
                  text-indigo-400
                  hover:text-blue-500
                  no-underline
                  hover:underline
                  cursor-pointer
                  transition
                  ease-in
                  duration-300
                "
                >Registrate</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingComponent from "@/components/layout/LoadingComponent.vue";
import NotifyComponent from '@/components/layout/NotifyComponent.js'
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  components: {
    LoadingComponent,
  },
  computed: {
    loggedIn() {
      return this.$store.state.User.errorMessage;
    },
  },
  methods: {
    async signin() {
      try {
        const user = await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        if (user) {
          this.$router.push("/");
          NotifyComponent.login(`<h3 class="py-3 font-medium text-base">Hola, <b>${user.name}</b>👨🏻‍🏭</h3>`)
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
