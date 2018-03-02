<template lang="html">
  <div id="nav">
    <router-link v-if="!isLogin" to="/login">Login</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/articles">Article</router-link>
    <!-- <router-link :to="{ name: '', params: {} }"></router-link> -->
    <button v-if="isLogin" @click="logout" class="button is-danger">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$store.dispatch('setIsLogin', false)
      this.$store.dispatch('setToken', null)
      this.$swal('you have logout!', {
        icon: 'success'
      })
      this.$router.push('/login')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin || localStorage.getItem('token')
    }
  }
}
</script>

<style lang="css">
</style>
