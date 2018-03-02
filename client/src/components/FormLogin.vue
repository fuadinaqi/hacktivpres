<template lang="html">
  <div class="">
    <div class="message-header">
      <p>Login Here!</p>
    </div>
    <br>
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input v-model="dataLogin.email" class="input" type="email" placeholder="Email input">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <!-- <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span> -->
      </div>
      <!-- <p class="help is-danger">This email is invalid</p> -->
    </div>

    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input v-model="dataLogin.password" class="input" type="password" placeholder="Password input">
        <span class="icon is-small is-left">
          <i class="fas fa-key"></i>
        </span>
        <!-- <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span> -->
      </div>
      <!-- <p class="help is-success">This username is available</p> -->
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button @click="login" class="button is-link">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-login',
  data () {
    return {
      dataLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      let self = this
      if (this.dataLogin.email && this.dataLogin.password) {
        this.$axios.post('authors/signin', {
          email: self.dataLogin.email,
          password: self.dataLogin.password
        })
          .then(response => {
            console.log(response)
            if (response.data.msg === 'password salah') {
              return this.$swal('password salah!', {
                icon: 'warning'
              })
            }
            localStorage.setItem('token', response.data.token)
            self.$store.dispatch('setIsLogin', true)
            self.$store.dispatch('setToken', response.data.token)
            self.$swal('berhasil sign up!', {
              icon: 'success'
            })
            self.$router.push('/')
          })
          .catch(err => {
            console.log(err)
            this.$swal('username / password salah', {
              icon: 'warning'
            })
          })
      } else {
        this.$swal('isi yang bener', {
          icon: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
