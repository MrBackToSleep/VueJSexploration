import Vue from 'vue' //librairie "vue" dans node_modules
import Vuetify from 'vuetify' //vuetify pour rendre plus beau <3
import 'vuetify/dist/vuetify.min.css'
import app from './app.vue' //fichier app.vue local
import MovieItemComponent from './components/movieitem.vue' //fichier movieitem
import VueRouter from 'vue-router'

Vue.component('movie-item', MovieItemComponent);

Vue.use(VueRouter)

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

//test route 
const NotFound = { template: '<p>404 Page not found</p></script>' }
const Home = { template: '<p>home page test</p>' }
const About = { template: '<p>about page test</p>' }

const routes = {
  '/': Home,
  '/about': About
}



new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },

  //test route
  //render: h => h(this.ViewComponent)
  render: h => h(app)
})
