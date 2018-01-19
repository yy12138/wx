<template>
  <div id="app">
    <login v-if="!user.id"/>
    <home v-if="user.id"/>
  </div>
</template>

<script>
import Login from "@/pages/Login/Login.vue"
import Home from "@/pages/Home/Home.vue"
export default {
  name: 'App',
  components: {
    Login,
    Home
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
<style lang="less" scoped>
#app{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url("./pages/Login/images/app_bac.jpg");
  background-size: cover;
}
</style>

