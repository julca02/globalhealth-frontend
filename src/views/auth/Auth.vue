<template>
  <div class="flex flex-wrap justify-center bg-blue-100">
    <router-link to="/auth/medical-history" class="transition ease-in-out duration-500 p-2 w-36 rounded-3xl hover:underline"
      >Historial clinico</router-link
    >
    <router-link to="/auth/register-user" class="transition ease-in-out duration-500 p-2 w-36 rounded-3xl hover:underline"
      >Registrar usuario</router-link
    >
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
</style>