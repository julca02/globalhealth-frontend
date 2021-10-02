<template>
  <div class="container mx-auto my-5 p-5 h-screen">
    <div class="md:flex no-wrap md:-mx-2">
      <!-- Left Side -->
      <div class="w-full md:w-1/2 lg:w-3/12 md:mx-2">
        <!-- Profile Card -->
        <div class="bg-white p-3 border-t-4 border-blue-400">
          <div class="image overflow-hidden">
            <img class="h-20 w-20 mx-auto" :src="user.avatar" alt="profile avatar" />
          </div>
          <h1 class="text-gray-900 font-bold text-xl leading-8 my-1 text-center">
            {{ user.name }}
          </h1>
          <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
            deserunt
          </p>
          <ul
            class="
              bg-gray-100
              text-gray-600
              py-2
              px-3
              mt-3
              divide-y
              rounded
              shadow-sm
            "
          >
            <li class="flex items-center py-3">
              <span>Estado</span>
              <span class="ml-auto">
                  <span class="bg-green-500 py-1 px-2 rounded text-white text-sm" v-if="user.state">Activo</span>
                  <span class="bg-red-500 py-1 px-2 rounded text-white text-sm" v-else>Ausente</span>
                </span>
            </li>
            <li class="flex items-center py-3">
              <span>Creado</span>
              <span class="ml-auto">{{ user.dateFormat }}</span>
            </li>
          </ul>
        </div>

      </div>
      <!-- Right Side -->
      <div class="w-full md:w-9/12 md:mx-2 my-2">
        <!-- About Section -->
        <div class="bg-white p-3 rounded-sm">
          <div
            class="
              flex
              items-center
              space-x-2
              font-semibold
              text-gray-900
              leading-8
            "
          >
            <font-awesome-icon icon="user" class="w-auto h-6" />
            <span class="tracking-wide">Informacion personal</span>
          </div>
          <div class="text-gray-700">
            <div class="grid md:grid-cols-2">
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Nombre</div>
                <div class="px-4 py-2">{{ user.name }}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Género</div>
                <div class="px-4 py-2">{{ user.gender }}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Numero</div>
                <div class="px-4 py-2">{{ user.phone }}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Email</div>
                <div class="px-4 py-2">{{ user.email }}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Fecha de Nacimiento</div>
                <div class="px-4 py-2">{{ user.birthFormat }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- End of about section -->

        <div class="my-4"></div>

        <!-- Experience and education -->
        <div class="bg-white p-3 shadow-sm rounded-sm">
          <div class="">
            <div>
              <div
                class="
                  flex
                  items-center
                  space-x-2
                  font-semibold
                  text-gray-900
                  leading-8
                  mb-3
                "
              >
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">Historial clinico</span>
              </div>
              <ul class="list-inside space-y-2">
                <li v-for="history in user.historyClinical" :key="history._id">
                  <div class="text-teal-600">{{ history.subject }}</div>
                  <div class="text-gray-500 text-xs">{{ history.date }}</div>
                  <div class="text-gray-500 text-xs">
                    {{ history.abstract }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- End of Experience and education grid -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { getUserDetail } from "@/services/getUsers";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const route = useRoute();
    const user = ref([]);
    onMounted(async () => {
      user.value = await getUserDetail(route.params.id);
    });
    return {
      user,
    };
  },
};
</script>

<style>
</style>