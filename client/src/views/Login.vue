<template lang="html">
  <div class="login">
    <div class="columns">
      <div class="column">
        <FormLogin/>
      </div>
      <div class="column">
        <FormSignup/>
      </div>
    </div>
  </div>
</template>

<script>
import FormLogin from '../components/FormLogin'
import FormSignup from '../components/FormSignup'

export default {
  name: 'login',
  components: {
    FormLogin,
    FormSignup
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
</style>
