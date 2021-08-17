<template>
  <SpringSpinner
    class="mx-auto"
    :animation-duration="3000"
    :size="100"
    :color="'#1424C4'"
  />
</template>

<script>
import { SpringSpinner } from "epic-spinners";
export default {
  components: {
    SpringSpinner
  },
};
</script>

<style>
</style>