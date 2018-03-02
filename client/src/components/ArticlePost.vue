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
    <div v-if="!isUpload" class="file">
      <label class="file-label">
        <input @change="onChange" class="file-input" type="file" name="resume">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Image for background article
          </span>
        </span>
      </label>
    </div>
    <div v-else class="field">
      <label class="label"> {{ addArticle.image }} </label>
      <div class="control">
        <button class="button is-danger" @click="removeUrlImage">Remove</button>
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
        content: '',
        image: ''
      },
      isUpload: false
    }
  },
  methods: {
    onChange (e) {
      let self = this
      var files = e.target.files || e.dataTransfer.files
      if (files.length > 0) {
        let data = new FormData()
        data.append('image', files[0])
        self.$axios.post('articles/upload', data, {
          headers: { token: localStorage.getItem('token') }
        })
          .then(({data}) => {
            self.addArticle.image = data.imageUrl
            self.isUpload = true
          })
          .catch(err => {
            console.log(err)
            self.$swal('you must login first to create an article!')
            self.$router.push('/login')
          })
      }
    },
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
            self.addArticle = {
              title: '',
              content: '',
              image: ''
            }
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
        self.addArticle = {
          title: '',
          content: '',
          image: ''
        }
      }
    },
    removeUrlImage () {
      this.isUpload = false
      this.addArticle.image = ''
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
