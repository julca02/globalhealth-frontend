<template>
  <AccountProfile :user="data"/>
</template>

<script>
import AccountProfile from '../../components/profile/AccountProfile.vue'
import { useStore } from "vuex";
import { computed } from '@vue/reactivity';
export default {
  components: { AccountProfile },
  setup(){
    const store = useStore()
    const data = computed(() => store.state.User.user)
    return{
      data
    }
  }
}
</script>

<style>

</style>