<template>
  <Popover class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2 border-gray-100
          py-6
          md:justify-start
          md:space-x-10
        "
      >
        <div class="flex lg:w-0 lg:flex-1 items-center space-x-10">
          <a href="/#">
            <span class="sr-only">GlobalHealth</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="@/assets/logo.svg"
              alt="globalHealth"
            />
          </a>
          <PopoverGroup as="nav" class="hidden md:flex space-x-10">
            <router-link
              to="/noticias"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Noticias
            </router-link>
            <router-link
              to="/informacion"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Informacion
            </router-link>
            <noticias-nav-bar />
          </PopoverGroup>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="
              bg-white
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500
              hover:bg-gray-100
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-indigo-500
            "
          >
            <span class="sr-only">Abir Menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a
            href="#"
            class="
              whitespace-nowrap
              text-base
              font-medium
              text-gray-500
              hover:text-gray-900
            "
          >
            Ingresa
          </a>
          <a
            href="#"
            class="
              ml-8
              whitespace-nowrap
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent border-blue-800
              rounded-md
              shadow-sm
              text-base
              font-medium
              text-gray-500
              hover:bg-blue-900
              hover:text-white
            "
          >
            Registrate
          </a>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-white
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="@/assets/logo.svg"
                  alt="logo"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500
                    hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2 focus:ring-inset focus:ring-indigo-500
                  "
                >
                  <span class="sr-only">Cerrar menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link
                  v-for="item in solutions"
                  :key="item.name"
                  :to="item.href"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </router-link>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <router-link
                v-for="item in resources"
                :key="item.name"
                :to="item.href"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {{ item.name }}
              </router-link>
            </div>
            <div>
              <a
                href="#"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-base
                  font-medium
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                "
              >
                Registrate
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Tienes usuario?
                {{ " " }}
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                  Ingresa
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import NoticiasNavBar from "./NoticiasNavBar.vue";

const solutions = [
  {
    name: "Noticias",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/noticias",
  },
  {
    name: "Doctores",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
  },
  {
    name: "Salud",
    description: "Your customers' data will be safe and secure.",
    href: "#",
  },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
    NoticiasNavBar,
  },
  setup() {
    return {
      solutions,
    };
  },
};
</script>