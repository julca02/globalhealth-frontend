<template>
  <SpringSpinner
    class="mx-auto"
    :animation-duration="3000"
    :size="tam"
    :color="'#1424C4'"
  />
</template>

<script>
import { SpringSpinner } from "epic-spinners";
export default {
  components: {
    SpringSpinner
  },
  props:{
    tam: Number
  }
};
</script>

<style>
</style>