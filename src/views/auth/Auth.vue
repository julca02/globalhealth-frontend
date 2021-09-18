<template>
  <div class="flex flex-no-wrap bg-gray-100 h-screen">
    <div
      class="
        w-64
        absolute
        sm:relative
        bg-blue-900
        shadow
        md:h-full
        flex-col
        justify-between
        hidden sm:flex
      "
    >
      <div class="px-8">
        <div class="h-16 w-full flex items-center">
          <img src="@/assets/logo_white_large.png" alt="logo" />
        </div>
        <ul class="mt-12">
          <li
            class="
              flex
              w-full
              justify-between
              text-gray-300
              hover:text-gray-400
              cursor-pointer
              items-center
              mb-6
            "
          >
            <div class="flex items-center">
              <font-awesome-icon icon="book-medical" class="w-auto h-6 text-white"/>
              <router-link class="text-sm ml-2" to="/auth/medical-history">Historial clinico</router-link>
            </div>
          </li>
          <li
            class="
              flex
              w-full
              justify-between
              text-gray-300
              hover:text-gray-400
              cursor-pointer
              items-center
              mb-6
            "
          >
            <div class="flex items-center">
              <font-awesome-icon icon="user" class="w-auto h-6 text-white"/>
              <router-link class="text-sm ml-2" to="/auth/register-user">Registrar paciente</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="
        w-64
        z-40
        absolute
        bg-gray-800
        shadow
        md:h-full
        flex-col
        justify-between
        sm:hidden
        transition
        duration-150
        ease-in-out
      "
      id="mobile-nav"
    >
      <div
        id="openSideBar"
        class="
          h-10
          w-10
          bg-gray-800
          absolute
          right-0
          mt-16
          -mr-10
          flex
          items-center
          shadow
          rounded-tr rounded-br
          justify-center
          cursor-pointer
        "
        @click="sidebarHandler(true)"
      >
      <font-awesome-icon icon="angle-right" class="w-auto h-6 text-white"/>
      </div>
      <div
        id="closeSideBar"
        class="
          hidden
          h-10
          w-10
          bg-gray-800
          absolute
          right-0
          mt-16
          -mr-10
          flex
          items-center
          shadow
          rounded-tr rounded-br
          justify-center
          cursor-pointer
          text-white
        "
        @click="sidebarHandler(false)"
      >
      </div>
      <div class="px-8 h-screen">
        <div class="h-16 w-full flex items-center">
          <img src="@/assets/logo_white_large.png" alt="" />
        </div>
        <ul class="mt-12">
          <li
            class="
              flex
              w-full
              justify-between
              text-gray-300
              hover:text-gray-500
              cursor-pointer
              items-center
              mb-6
            "
          >
            <div class="flex items-center">
              <font-awesome-icon icon="book-medical" class="w-auto h-6 text-white"/>
              <router-link class="text-sm ml-2" to="/auth/medical-history">Historial clinico</router-link>
            </div>
          </li>
          <li
            class="
              flex
              w-full
              justify-between
              text-gray-600
              hover:text-gray-500
              cursor-pointer
              items-center
              mb-6
            "
          >
            <div class="flex items-center">
              <font-awesome-icon icon="user" class="w-auto h-6 text-white"/>
              <router-link class="text-sm ml-2" to="/auth/register-user">Registrar paciente</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
      <div class="w-full h-full rounded">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LightWithIconsAtBottom",
  data() {
    return {
      moved: true,
    };
  },
  methods: {
    sidebarHandler() {
      var sideBar = document.getElementById("mobile-nav");
      sideBar.style.transform = "translateX(-260px)";
      if (this.$data.moved) {
        sideBar.style.transform = "translateX(0px)";
        this.$data.moved = false;
      } else {
        sideBar.style.transform = "translateX(-260px)";
        this.$data.moved = true;
      }
    },
  },
};
</script>