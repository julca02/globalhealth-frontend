<template>
  <div
    class="text-center border-2 border-gray-200 px-4 py-6 rounded-lg shadow-lg"
    v-for="item in todos"
    :key="item"
  >
    <div
      class="
        flex
        items-center
        justify-center
        w-10
        h-10
        mx-auto
        mb-3
        rounded-full
        bg-indigo-50
        sm:w-12
        sm:h-12
      "
    >
      <font-awesome-icon
        :icon="item.icono"
        class="flex-shrink-0 h-6 w-6 text-blue-600"
        aria-hidden="true"
      />
    </div>
    <h6 class="text-4xl font-bold text-deep-purple-accent-400">
      {{ item.casos }}
    </h6>
    <p class="mb-2 font-bold text-md title">{{ item.nombre }}</p>
    <p class="text-gray-700">{{ item.resumen }}</p>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
  setup() {
    const todos = inject("result");
    return {
      todos,
    };
  },
};
</script>
