<template>
  <div class="relative min-h-screen flex">
    <div
      class="
        flex
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
          text-white
          bg-no-repeat bg-cover
          relative
        "
        style="
          background-image: url(https://coecadiz.com/wp-content/uploads/2018/06/fondo-login-web.jpg);
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
          <div
            class="
              sm:text-4xl
              xl:text-5xl
              font-bold
              leading-tight
              mb-6
              uppercase
              nav
            "
          >
            Ingreso de usuario 
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
          h-screen
          md:flex
          md:items-center
          md:justify-center
          w-full
          sm:w-auto
          xl:w-2/5
          p-8
          md:p-10
          lg:p-14
          sm:rounded-lg
          md:rounded-none
          bg-blue-50
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
              href="#"
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
              ><font-awesome-icon
                :icon="['fab', 'google']"
                class="w-6 mx-auto text-white"
            /></a>
          </div>
          <div class="flex items-center justify-center space-x-2">
            <span class="h-px w-16 bg-gray-200"></span>
            <span class="text-gray-300 font-normal">o</span>
            <span class="h-px w-16 bg-gray-200"></span>
          </div>
          <form class="mt-8 space-y-6">
            <div class="relative">
              <p v-if="loggedIn" class="text-xs text-red-500 text-center">
                {{ loggedIn.payload }}*
              </p>
              <label
                class="ml-3 text-sm font-bold text-gray-500 tracking-wide"
                for="email"
                >Email</label
              >
              <div class="relative">
                <input
                  class="
                    w-full
                    text-base
                    px-4
                    py-2
                    border-b border-gray-300
                    focus:outline-none
                    rounded-lg
                    focus:border-blue-500
                  "
                  id="email"
                  autofocus
                  type="email"
                  placeholder="mail@example.com"
                  required
                  v-model="data.email"
                />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <font-awesome-icon
                    icon="user"
                    class="w-6 mx-auto text-blue-600"
                  />
                </div>
              </div>
            </div>
            <div class="mt-8 content-center">
              <label
                class="ml-3 text-sm font-bold text-gray-500 tracking-wide"
                for="password"
              >
                Contraseña
              </label>
              <div class="relative">
                <input
                  class="
                    w-full
                    content-center
                    text-base
                    px-4
                    py-2
                    border-b
                    rounded-lg
                    border-gray-300
                    focus:outline-none
                    focus:border-blue-500
                  "
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  v-model="data.password"
                />
                <div
                  class="
                    absolute
                    inset-y-0
                    right-0
                    pr-3
                    flex
                    items-center
                    pointer-events-none
                  "
                >
                  <font-awesome-icon
                    icon="key"
                    class="w-6 mx-auto text-blue-600"
                  />
                </div>
              </div>
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
                  p-3
                  rounded-full
                  tracking-wide
                  font-semibold
                  shadow-lg
                  cursor-pointer
                  transition
                  ease-in
                  duration-500
                  nav
                "
                :disabled="
                  !data.email ||
                  !data.password ||
                  this.$store.state.User.isLoading
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
                  <span v-else>INGRESA</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import LoadingComponent from "@/components/layout/LoadingComponent.vue";
import NotifyComponent from "@/components/layout/NotifyComponent.js";
import { computed, reactive } from "@vue/reactivity";
export default {
  components: {
    LoadingComponent,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      email: "",
      password: "",
    });
    const loggedIn = computed(() => {
      return store.state.User.errorMessage;
    });
    const signin = async () => {
      try {
        const user = await store.dispatch("login", data);
        if (user) {
          router.push("/");
          NotifyComponent.login(
            `<h3 class="py-3 font-medium text-base">Hola, <b>${user.name}</b>👨🏻‍🏭</h3>`
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    return {
      data,
      loggedIn,
      signin,
    };
  },
};
</script>
