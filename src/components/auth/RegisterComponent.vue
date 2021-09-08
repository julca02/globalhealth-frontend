<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          Por favor, registar cada globalhealthiano
        </h1>
      </div>
      <form @click.prevent="" class="lg:w-1/2 md:w-2/3 mx-auto">
        <p class="text-red-500 text-center text-xs" v-if="errorMensaje">
          {{ errorMensaje.payload }}
        </p>
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-full">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600"
                >Nombre</label
              >
              <input
                v-model="data.name"
                type="text"
                id="name"
                name="name"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-2 focus:ring-indigo-200
                  text-base
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
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Email</label
              >
              <input
                v-model="data.email"
                type="email"
                id="email"
                name="email"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-2 focus:ring-indigo-200
                  text-base
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
              <label for="password" class="leading-7 text-sm text-gray-600"
                >Contraseña</label
              >
              <input
                v-model="data.password"
                type="password"
                id="password"
                name="password"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-2 focus:ring-indigo-200
                  text-base
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
              <label for="passwordTwo" class="leading-7 text-sm text-gray-600"
                >Repetir contraseña</label
              >
              <input
                v-model="data.password2"
                type="password"
                id="passwordTwo"
                name="passwordTwo"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-2 focus:ring-indigo-200
                  text-base
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
                flex
                mx-auto
                text-white
                bg-blue-500
                border-0
                py-2
                px-8
                focus:outline-none
                hover:bg-blue-600
                rounded
                text-lg
                disabled:opacity-25
              "
            >
              <span
                ><div class="flex justify-center" v-if="this.$store.state.User.isLoading">
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
  {{ data }}
</template>

<script>
import { computed, reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import LoadingComponent from "@/components/layout/LoadingComponent.vue";
export default {
  components: {LoadingComponent},
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
      store.dispatch("register", data);
    };
    return { sendData, data, errorMensaje };
  },
};
</script>

<style>
</style>