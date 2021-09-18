<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="
            sm:text-3xl
            text-2xl
            font-medium
            title-font
            mb-4
            text-gray-900
            title
          "
        >
          Registra a tus pacientes!
        </h1>
      </div>
      <form @click.prevent="" class="lg:w-1/2 md:w-2/3 mx-auto">
        <p class="text-red-500 text-center text-xs" v-if="errorMensaje">
          {{ errorMensaje.payload }}
        </p>
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-full">
            <div class="relative">
              <label
                for="name"
                class="text-sm font-bold text-gray-500 tracking-wide"
                >Nombre</label
              >
              <input
                v-model="data.name"
                type="text"
                id="name"
                name="name"
                class="
                  w-full
                  bg-gray-100
                  text-base
                  rounded-lg
                  border border-gray-300
                  focus:border-blue-500
                  focus:bg-white
                  focus:ring-2 focus:ring-blue-200
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label
                for="email"
                class="text-sm font-bold text-gray-500 tracking-wide"
                >Email</label
              >
              <input
                v-model="data.email"
                type="email"
                id="email"
                name="email"
                class="
                  w-full
                  bg-gray-100
                  text-base
                  rounded-lg
                  border border-gray-300
                  focus:border-blue-500
                  focus:bg-white
                  focus:ring-2 focus:ring-blue-200
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label
                for="password"
                class="text-sm font-bold text-gray-500 tracking-wide"
                >Contraseña</label
              >
              <input
                v-model="data.password"
                type="password"
                id="password"
                name="password"
                class="
                  w-full
                  bg-gray-100
                  text-base
                  rounded-lg
                  border border-gray-300
                  focus:border-blue-500
                  focus:bg-white
                  focus:ring-2 focus:ring-blue-200
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label
                for="passwordTwo"
                class="text-sm font-bold text-gray-500 tracking-wide"
                >Repetir contraseña</label
              >
              <input
                v-model="data.password2"
                type="password"
                id="passwordTwo"
                name="passwordTwo"
                class="
                  w-full
                  bg-gray-100
                  text-base
                  rounded-lg
                  border border-gray-300
                  focus:border-blue-500
                  focus:bg-white
                  focus:ring-2 focus:ring-blue-200
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              :disabled="
                !data.name ||
                !data.email ||
                !data.password ||
                !data.password2 ||
                this.$store.state.User.isLoading
              "
              @click.prevent="sendData"
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
            >
              <span
                ><div
                  class="flex justify-center"
                  v-if="this.$store.state.User.isLoading"
                >
                  <LoadingComponent :tam="30" />
                  <span>Cargando...</span>
                </div>
                <span v-else> Registrar </span>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { computed, reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import LoadingComponent from "@/components/layout/LoadingComponent.vue";
import NotifyComponent from "@/components/layout/NotifyComponent.js";
export default {
  components: { LoadingComponent },
  setup() {
    const store = useStore();
    const errorMensaje = computed(() => {
      return store.state.User.errorMessage;
    });
    const data = reactive({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
    const sendData = async () => {
      const userRegister = await store.dispatch("register", data);
      data.name = "";
      data.email = "";
      data.password = "";
      data.password2 = "";
      if (userRegister)
        NotifyComponent.login(
          `<h3 class="py-3 font-medium text-base">El usuario ha sido registrado👨🏻‍🏭</h3>`
        );
    };
    return { sendData, data, errorMensaje };
  },
};
</script>

<style>
</style>