<template>
  <div v-if="!this.$store.state.User.LoggedIn" class="container mx-auto my-10 px-10 bg-blue-500 rounded-2xl">
    <div class="flex flex-wrap items-center justify-between h-auto py-16 login">
      <div class="flex items-center mb-2">
        <font-awesome-icon icon="info-circle" size="lg" class="text-white"/>
        <div class="flex flex-col ml-3 text-white">
          <div class="font-bold text-2xl text-justify title leading-none">Ingresa a tu cuenta!</div>
          <p class="text-xl leading-none mt-1 nav">
           Tendrás la posibilidad de encontar diferentes servicos.
          </p>
        </div>
      </div>
      <button
        class="
          flex-no-shrink
          px-10
          ml-4
          py-2
          bg-white
          text-lg
          shadow-sm
          hover:shadow-lg
          font-medium
          tracking-wider
          text-blue-500
          rounded-full
        "
      >
        Ingresar
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login{
  background-image: url('https://res.cloudinary.com/dpdklk8ze/image/upload/v1630771662/589c81c364b351149f22a823_d86ncl.png');
  background-size: 25%;
  background-repeat: no-repeat;
  background-position-x: 75%;
}
</style>