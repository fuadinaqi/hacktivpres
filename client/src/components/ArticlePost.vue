<template lang="html">
  <div class="">
    <h1 class="title">Post a new Article Here!</h1>
    <div class="field">
      <div class="control">
        <input v-model="addArticle.title" class="input" type="text" placeholder="Title">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <textarea v-model="addArticle.content" class="textarea" placeholder="Content..."></textarea>
      </div>
    </div>
    <button @click="post" type="button" class="button is-primary" name="button">Post!</button>
  </div>
</template>

<script>
export default {
  name: 'article-post',
  data () {
    return {
      addArticle: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    post () {
      let self = this
      if (self.addArticle.title && self.addArticle.content) {
        this.$axios.post('articles/create', self.addArticle, {
          headers: { token: localStorage.getItem('token') }
        })
          .then(({data}) => {
            let newArticles = self.dataArticles
            newArticles.reverse()
            newArticles.push(data)
            // console.log(data, 'asdsad')
            self.$store.dispatch('setArticles', newArticles)
            self.$swal('your post has been public', {
              icon: 'success'
            })
          })
          .catch(err => {
            console.log(err)
            self.$swal('you must login first to create an article!')
            self.$router.push('/login')
          })
      } else {
        this.$swal('please complete the field!', {
          icon: 'warning'
        })
      }
    }
  },
  computed: {
    dataArticles () {
      return this.$store.getters.getArticles
    }
  }
}
</script>

<style lang="css" scoped>
</style>
