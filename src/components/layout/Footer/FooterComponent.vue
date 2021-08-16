<template>
  <footer class="py-5 bg-blue-900">
    <div
      class="container mx-auto px-5 space-x-5">
      <div class="sm:flex sm:flex-wrap sm:justify-between sm:items-center">
        <div class="flex-1">
          <div>
            <img
              src="@/assets/logo_white_large.png"
              alt="Footer logo"
              class="h-10 w-auto"
            />
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quia sint sunt beatae.
            </p>
          </div>
        </div>
        <div class="flex-1 justify-end">
          <ul class="list-none">
            <li class="mb-3">
              <router-link
                class="
                  text-base
                  font-medium
                  text-gray-50
                  border-b border-transparent
                  hover:text-gray-300
                  hover:border-gray-50
                "
                to="#"
                >Inicio</router-link
              >
            </li>
            <li class="mb-3">
              <router-link
                class="
                  text-base
                  font-medium
                  text-gray-50
                  border-b border-transparent
                  hover:text-gray-300
                  hover:border-gray-50
                "
                to="#"
                >Salud</router-link
              >
            </li>
            <li class="mb-3">
              <router-link
                class="
                  text-base
                  font-medium
                  text-gray-50
                  border-b border-transparent
                  hover:text-gray-300
                  hover:border-gray-50
                "
                to="#"
                >Post</router-link
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <ul>
            <li class="mb-3">
              <router-link
                class="
                  text-base
                  font-medium
                  text-gray-50
                  border-b border-transparent
                  hover:text-gray-300
                  hover:border-gray-50
                "
                to="#"
                >Equipo</router-link
              >
            </li>
            <li class="mb-3">
              <router-link
                class="
                  text-base
                  font-medium
                  text-gray-50
                  border-b border-transparent
                  hover:text-gray-300
                  hover:border-gray-50
                "
                to="#"
                >Privacidad</router-link
              >
            </li>
            <li class="mb-3">
              <router-link
                class="
                  text-base
                  font-medium
                  text-gray-50
                  border-b border-transparent
                  hover:text-gray-300
                  hover:border-gray-50
                "
                to="#"
                >Contactanos</router-link
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <div class="relative mt-1">
            <input
              type="text"
              id="password"
              class="
                w-full
                pl-3
                pr-10
                py-2
                border-2 border-gray-200
                rounded-xl
                hover:border-gray-300
                focus:outline-none
                focus:border-blue-500
                transition-colors
              "
              placeholder="Search..."
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
                text-gray-400
                focus:outline-none
                hover:text-gray-900
                transition-colors
              "
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/outline";
/* import { CursorClickIcon } from "@heroicons/vue/outline"; */
export default {
  components: {
    SearchIcon,
  },
};
</script>

<style>
</style>