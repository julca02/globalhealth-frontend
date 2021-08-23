<template>
  <form
    @submit.prevent="searchCountry"
    class="
      mx-auto
      w-1/2
      h-10
      my-4
      px-4
      pr-2
      border
      rounded-full
      flex
      justify-center
      items-center
    "
  >
    <input
      type="search"
      name="search"
      v-model="buscar"
      placeholder="Buscar pais"
      class="
        appearance-none
        w-full
        outline-none
        focus:outline-none
        active:outline-none
      "
    />
    <button
      type="submit"
      class="ml-1 outline-none focus:outline-none active:outline-none"
    >
      <font-awesome-icon icon="search" class="text-blue-900"  />
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      buscar: "",
    };
  },
  methods: {
    searchCountry() {
      this.$emit("buscar", this.buscar);
    },
  },
};
</script>

<style>
</style>