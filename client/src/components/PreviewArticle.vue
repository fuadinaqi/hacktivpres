<template lang="html">
  <div class="">
    <article v-for="article in dataArticles" :key="article._id" class="message">
      <div class="message-header">
        <p>{{ article.title }}</p>
      </div>
      <div class="message-body">
        <img :src="article.image" style="width:auto;" alt="articleImage">
        {{ article.content }}
      </div>
      <router-link :to="{ path: `/articles/${article._id}`, params: { id: article._id } }">Detail</router-link>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PreviewArticle',
  props: [
    'dataArticles'
  ]
}
</script>

<style lang="css" scoped>
</style>
