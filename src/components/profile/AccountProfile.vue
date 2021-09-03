<template>
  <section class="bg-gray-50 lg:py-10 min-h-screen">
    <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
      <div class="p-4 border-t-2 bg-opacity-5 border-blue-400 rounded-t">
        <div class="md:w-full md:mx-0">
          <div class="flex items-center space-x-4">
            <img
              class="w-auto h-20 object-cover rounded-full"
              alt="User avatar"
              :src="avatarRender ? avatarRender : user.avatar.url"
            />
            <label class="cursor-pointer mt-16">
              <span
                class="
                  -ml-12
                  text-base
                  leading-normal
                  px-4
                  py-2
                  bg-blue-500
                  text-white text-sm
                  rounded-full
                "
                ><font-awesome-icon icon="cloud-upload-alt"
              /></span>
              <input type="file" class="hidden" @change="onFileChange" />
            </label>
            <h1 class="text-gray-600">{{ user.name }}</h1>
          </div>
        </div>
      </div>
      <form class="bg-white space-y-6">
        <div
          class="
            md:inline-flex
            space-y-4
            md:space-y-0
            w-full
            p-4
            text-gray-500
            items-center
          "
        >
          <h2 class="md:w-1/3 max-w-sm mx-auto">Cuenta</h2>
          <div class="md:w-2/3 max-w-sm mx-auto">
            <label class="text-sm text-gray-400">Email</label>
            <div class="w-full inline-flex border">
              <input
                type="email"
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                :value="user.email"
                disabled
              />
            </div>
          </div>
        </div>

        <hr />
        <div
          class="
            md:inline-flex
            space-y-4
            md:space-y-0
            w-full
            p-4
            text-gray-500
            items-center
          "
        >
          <h2 class="md:w-1/3 mx-auto max-w-sm">Informacion personal</h2>
          <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
            <div>
              <label class="text-sm text-gray-400">Nombre completo</label>
              <div class="w-full inline-flex border">
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  :placeholder="user.name"
                  v-model="name"
                  required
                />
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-400">Numero de celular</label>
              <div class="w-full inline-flex border">
                <input
                  type="number"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  :placeholder="user.phone"
                  v-model="phone"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div
          class="
            md:inline-flex
            w-full
            space-y-4
            md:space-y-0
            p-8
            text-gray-500
            items-center
          "
        >
          <h2 class="md:w-4/12 max-w-sm mx-auto">Cambiar la contraseña</h2>

          <div
            class="
              md:w-5/12
              w-full
              md:pl-9
              max-w-sm
              mx-auto
              space-y-5
              md:inline-flex
              pl-2
            "
          >
            <div class="w-full inline-flex border-b">
              <input
                type="password"
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                placeholder="*****"
              />
            </div>
          </div>
          <div class="md:w-3/12 text-center md:pl-6">
            <button
              type="submit"
              class="
                disabled:opacity-25
                text-white
                w-full
                mx-auto
                max-w-sm
                rounded-md
                text-center
                bg-blue-500
                py-2
                px-4
                items-center
                transition
                ease-in
                duration-500
              "
              :disabled="!name || !phone || this.$store.state.User.isLoading"
              @click.prevent="updateUser"
            >
              <span className="inline-block mr-2">
                <div
                  v-if="this.$store.state.User.isLoading"
                  class="flex justify-center"
                >
                  <LoadingComponent :tam="20" />
                  <span>Cargando...</span>
                </div>
                <span v-else>Actualizar</span>
              </span>
            </button>
          </div>
        </div>
        <hr />
        <div class="w-full p-4 text-right text-gray-500">
          <button
            class="
              p-2
              bg-red-500
              rounded-xl
              text-white
              focus:outline-none
              mr-4
              hover:bg-red-600
            "
          >
            Borrar cuenta
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import LoadingComponent from "@/components/layout/LoadingComponent.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    LoadingComponent,
  },
  props: {
    user: Object,
  },
  setup() {
    const name = ref();
    const phone = ref();
    const avatar = ref(null);
    const avatarRender = ref(null);

    const store = useStore();
    const updateUser = async() => {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("phone", phone.value);
      formData.append("avatar", avatar.value);

      await store.dispatch( "update", formData);
    };
    const onFileChange = (e) => {
      const files = e.target.files[0];
      avatar.value = files;
      avatarRender.value = URL.createObjectURL(files);
    };
    return {
      name,
      phone,
      avatarRender,
      updateUser,
      onFileChange,
    };
  },
};
</script>