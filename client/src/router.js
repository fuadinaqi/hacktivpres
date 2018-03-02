import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Article from './views/Article.vue'
import PreviewArticle from './components/PreviewArticle.vue'
import ArticleDetail from './components/ArticleDetail.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/articles',
      component: Article,
      children: [
        {
          path: '',
          component: PreviewArticle
        },
        {
          path: ':id',
          component: ArticleDetail
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) {
    if (to.path === '/login') {
      next(false)
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
