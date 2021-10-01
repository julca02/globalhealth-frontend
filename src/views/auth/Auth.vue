<template>
  <div class="flex flex-no-wrap bg-gray-100 h-screen">
    <div
      class="
        w-64
        absolute
        sm:relative
        shadow
        side-bar
        md:h-full
        flex-col
        justify-between
        hidden
        sm:flex
      "
    >
      <div class="px-8">
        <div class="h-16 w-full flex items-center">
          <img src="@/assets/logo_white_large.png" alt="logo" />
        </div>
        <ul class="mt-12">
          <li
            class="
              w-full
              text-gray-300
              hover:text-white
              cursor-pointer
              items-center
              mb-2
            "
          >
            <router-link
              to="/auth/medical-history"
              class="
                flex
                p-2
                rounded-2xl
                focus:shadow-outline
                transform
                hover:translate-x-2
                transition-transform
                ease-in
                duration-200
                focus:shadow-outline
                focus:bg-blue-500
              "
            >
              <font-awesome-icon
                icon="book-medical"
                class="w-auto h-6 text-gray-200"
              />
              <span class="text-md ml-2 nav">Historial clinico</span>
            </router-link>
          </li>
          <li
            class="
              w-full
              text-gray-300
              hover:text-white
              cursor-pointer
              items-center
              mb-2
            "
          >
            <router-link
              to="/auth/register-user"
              class="
                flex
                p-2
                rounded-2xl
                focus:shadow-outline
                transform
                hover:translate-x-2
                transition-transform
                ease-in
                duration-200
                focus:bg-blue-500
              "
            >
              <font-awesome-icon icon="user" class="w-auto h-6 text-gray-200" />
              <span class="text-md ml-2 nav">Registrar paciente</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="
        w-64
        z-40
        absolute
        side-bar
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
          bg-blue-800
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
        <font-awesome-icon icon="angle-right" class="w-auto h-6 text-white" />
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
      ></div>
      <div class="px-8 h-screen">
        <div class="h-16 w-full flex items-center">
          <img src="@/assets/logo_white_large.png" alt="logo white" />
        </div>
        <ul class="mt-2">
          <li
            class="
              w-full
              text-gray-300
              hover:text-white
              cursor-pointer
              items-center
              mb-2
            "
          >
            <router-link
              to="/auth/medical-history"
              class="
                flex
                items-center
                flex
                p-2
                rounded-2xl
                focus:shadow-outline
                transform
                hover:translate-x-2
                transition-transform
                ease-in
                duration-200
                focus:shadow-outline
                focus:bg-blue-500
              "
            >
              <font-awesome-icon
                icon="book-medical"
                class="w-auto h-6 text-white"
              />
              <span class="text-sm ml-2 nav">Historial clinico</span>
            </router-link>
          </li>
          <li
            class="
              w-full
              text-gray-300
              hover:text-white
              cursor-pointer
              items-center
              mb-2
            "
          >
            <router-link
              to="/auth/register-user"
              class="
                flex
                items-center
                flex
                p-2
                rounded-2xl
                focus:shadow-outline
                transform
                hover:translate-x-2
                transition-transform
                ease-in
                duration-200
                focus:shadow-outline
                focus:bg-blue-500
              "
            >
              <font-awesome-icon icon="user" class="w-auto h-6 text-white" />
              <span class="text-sm ml-2 nav">Registrar paciente</span>
            </router-link>
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
<style scoped>
.side-bar {
  background: #3d5af1;
}
</style>