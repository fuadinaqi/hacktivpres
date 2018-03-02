<template lang="html">
  <div class="">
    <h1>Article Detail</h1>
    <!-- {{ articleDetail }} -->
    <!-- <article class="message">
      <div class="message-header">
        <p>{{ article.title }}</p>
      </div>
      <div class="message-body">
        <img :src="article.image" style="width:auto;" alt="articleImage">
        {{ article.content }}
      </div>
    </article> -->
  </div>
</template>

<script>
export default {
  name: 'article-detail',
  data () {
    return {
      dataArticle: ''
    }
  },
  props: [
    'articleDetail'
  ],
  created () {
    let self = this
    let data = this.dataArticles.filter(article => {
      return article._id === self.$route.params.id
    })
  },
  computed: {
    dataArticles () {
      return this.$store.getters.getArticles()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
