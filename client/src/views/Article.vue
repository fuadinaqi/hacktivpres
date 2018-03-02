<template lang="html">
  <div class="">
    <div class="columns">
      <div class="column">
        <ArticlePost/>
      </div>
      <div class="column">
        <h1 class="title">Preview Articles</h1>
        <router-view :dataArticles="dataArticles"/>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlePost from '../components/ArticlePost'

export default {
  name: 'article',
  components: {
    ArticlePost
  },
  methods: {
    getAllArticles () {
      let self = this
      this.$axios.get('articles')
        .then(({data}) => {
          self.$store.dispatch('setArticles', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getAllArticles()
  },
  computed: {
    dataArticles () {
      return this.$store.getters.getArticles
    }
  }
}
</script>

<style scoped lang="css">
</style>
