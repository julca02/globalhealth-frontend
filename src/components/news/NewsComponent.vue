<template>
  <LoadingComponent :tam="100" v-if="listNews === null" />
  <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
    <div
      v-for="item in listNews"
      :key="item"
      class="overflow-hidden transition-shadow duration-300 bg-white"
    >
      <img
        :src="item.urlToImage"
        class="object-cover w-full h-64 rounded-t-lg"
        alt="Img Noticia"
      />
      <div class="p-5 border border-t-0 rounded-b-lg shadow-md">
        <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            class="
              transition-colors
              duration-200
              text-blue-gray-900
              hover:text-deep-purple-accent-700
            "
            aria-label="Category"
            title="Salud"
            >Salud
          </a>
          <span class="text-gray-600">
            —{{ item.publishedAt.toLocaleString() }}</span
          >
        </p>
        <h3
          href="/"
          aria-label="Category"
          title="Visit the East"
          class="
            inline-block
            mb-3
            text-2xl
            font-bold
            leading-5
            transition-colors
            duration-200
            hover:text-deep-purple-accent-700
          "
        >
          {{ item.title }}
        </h3>
        <p class="mb-2 text-gray-700">
          {{ item.description }}
        </p>
        <p class="flex justify-between">
          <a
            :href="item.url"
            target="_blank"
            aria-label=""
            class="
              mr-10
              inline-flex
              items-center
              font-semibold
              transition-colors
              uppercase
              duration-200
              text-blue-600
              hover:text-blue-900
            "
            >Ver Mas</a
          >
          <span>{{ item.name }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import News from "@/services/getNews";
import LoadingComponent from "@/components/layout/LoadingComponent";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    LoadingComponent,
  },
  setup() {
    const listNews = ref(null);
    const getNews = async () => {
      try {
        let response = await News();
        const filterResponse = response.filter(
          (item) => item.urlToImage !== null
        );
        listNews.value = filterResponse || null;
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      getNews();
    });
    return {
      listNews,
    };
  },
};
</script>