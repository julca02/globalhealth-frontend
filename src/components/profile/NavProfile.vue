<template>
  <Menu as="div" class="ml-3 relative">
    <div>
      <MenuButton
        class="
          bg-gray-800
          flex
          text-sm
          rounded-full
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-offset-gray-800
          focus:ring-white
        "
      >
        <span class="sr-only">Open user menu</span>
        <img class="h-8 w-8 rounded-full" :src="image" alt="" />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="
          origin-top-right
          absolute
          right-0
          mt-2
          w-48
          rounded-md
          shadow-lg
          py-1
          bg-white
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
      >
        <MenuItem v-slot="{ active }">
          <a
            href="#"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700',
            ]"
            >Perfil</a
          >
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button
            @click="logoutUser"
            :class="[
              active ? 'bg-gray-100' : '',
              'block w-full text-left px-4 py-2 text-sm text-gray-700',
            ]"
          >
            Cerrar
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { useStore } from "vuex";
export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  props: {
    image: String,
  },
  setup(props) {
    const store = useStore()
    const logoutUser = () => {
      store.dispatch('logout')
    };
    return {
      props,
      logoutUser
    };
  },
};
</script>

<style>
</style>