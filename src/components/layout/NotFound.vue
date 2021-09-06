<template>
  <!-- component -->
  <div
    class="
      min-w-screen min-h-screen
      bg-blue-100
      flex
      items-center
      p-5
      lg:p-20
      overflow-hidden
      relative
    "
  >
    <div
      class="
        flex-1
        min-h-full min-w-full
        rounded-3xl
        bg-white
        shadow-xl
        p-10
        lg:p-20
        text-gray-800
        relative
        md:flex
        items-center
        text-center
        md:text-left
      "
    >
      <div class="w-full md:w-1/2">
        <div class="mb-10 lg:mb-20">
          <img src="@/assets/logo.svg" alt="" />
        </div>
        <div class="mb-10 md:mb-20 text-gray-600 font-light">
          <h1
            class="
              font-black
              uppercase
              text-3xl
              lg:text-4xl
              text-blue-500
              mb-10
            "
          >
           <div class="animate-ping w-1 h-20">🙃</div>
            404 Estamos perdidas, perdidas 
          </h1>
          <p>La ruta ingresada no fue encontrada.</p>
          <p>Intentalo otra vez.</p>
        </div>
        <div class="mb-20 md:mb-0">
          <router-link
          to="/"
            class="
              text-lg
              font-light
              outline-none
              focus:outline-none
              transform
              transition-all
              hover:scale-110
              text-blue-500
              hover:text-blue-600
            "
          >
          <font-awesome-icon icon="long-arrow-alt-left"></font-awesome-icon>
           Volver
          </router-link>
        </div>
      </div>
      <div class="w-full md:w-1/2 text-center">
        <img src="@/assets/404doctors.svg" alt="">
      </div>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>