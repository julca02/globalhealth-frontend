<template>
  <div class="mx-auto flex justify-center">
    <font-awesome-icon
      icon="spinner"
      class="text-blue-600"
      :size="tam"
      pulse
    />
  </div>
</template>

<script>
export default {
  props: {
    tam: String,
  },
};
</script>

<style>
</style>