<template lang="html">
  <div class="">
    <div class="message-header">
      <p>Signup Here!</p>
    </div>
    <br>
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input v-model="dataSignup.email" :class="emailClass" type="email" placeholder="Email input">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <!-- <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span> -->
      </div>
      <p v-if="isEmail" class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input v-model="dataSignup.password" :class="passwordClass" type="password" placeholder="Password input">
        <span class="icon is-small is-left">
          <i class="fas fa-key"></i>
        </span>
        <!-- <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span> -->
      </div>
      <p v-if="isPassword" class="help is-danger">Password at least minimum 8 characters</p>
    </div>

    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input v-model="passwordConfirmation" :class="pswConfirmationClass" type="password" placeholder="Re-input Password">
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
        <button @click="signup" class="button is-link">Sign Up!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-login',
  data () {
    return {
      dataSignup: {
        email: '',
        password: ''
      },
      passwordConfirmation: '',
      emailClass: 'input',
      isEmail: true,
      isPassword: true,
      isPasswordConf: true,
      passwordClass: 'input',
      pswConfirmationClass: 'input'
    }
  },
  methods: {
    signup () {
      let self = this
      if (this.dataSignup.email && this.dataSignup.password && this.passwordConfirmation) {
        if (this.isEmail || this.isPassword || this.isPasswordConf) {
          return self.$swal('Isi dengan benar!', {
            icon: 'warning'
          })
        }
        this.$axios.post('authors/signup', {
          email: self.dataSignup.email,
          password: self.dataSignup.password
        })
          .then(({ data }) => {
            if (data.msg === 'email sudah terdaftar') {
              return self.$swal('email sudah terpakai', {
                icon: 'warning'
              })
            }
            self.$axios.post('authors/signin', {
              email: self.dataSignup.email,
              password: self.dataSignup.password
            })
              .then(response => {
                localStorage.setItem('token', response.data.token)
                self.$store.dispatch('setToken', response.data.token)
                self.$store.dispatch('setIsLogin', true)
                self.$swal('berhasil sign up!', {
                  icon: 'success'
                })
                self.$router.push('/')
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      } else {
        this.$swal('isi yang bener', {
          icon: 'warning'
        })
      }
    },
    validEmail (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line no-useless-escape
      return re.test(email)
    }
  },
  watch: {
    'dataSignup.email' (value) {
      if (value.length > 0) {
        if (this.validEmail(value)) {
          this.emailClass = 'input is-success'
          this.isEmail = false
        } else {
          this.emailClass = 'input is-danger'
          this.isEmail = true
        }
      } else {
        this.emailClass = 'input'
        this.isEmail = false
      }
    },
    passwordConfirmation (value) {
      if (value.length > 0) {
        if (value === this.dataSignup.password) {
          this.pswConfirmationClass = 'input is-success'
          this.isPasswordConf = false
        } else {
          this.pswConfirmationClass = 'input is-danger'
          this.isPasswordConf = true
        }
      } else {
        this.pswConfirmationClass = 'input'
        this.isPasswordConf = false
      }
    },
    'dataSignup.password' (value) {
    // console.log(value)
      if (value.length > 0) {
        // console.log('asdasdas')
        if (value.length > 7) {
          this.passwordClass = 'input is-success'
          this.isPassword = false
        } else {
          this.passwordClass = 'input is-danger'
          this.isPassword = true
        }
      } else {
        this.passwordClass = 'input'
        this.isPassword = false
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
