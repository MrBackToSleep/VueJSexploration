import Vue from 'vue' //librairie "vue" dans node_modules
import Vuetify from 'vuetify' //vuetify pour rendre plus beau <3
import 'vuetify/dist/vuetify.min.css'
import app from './app.vue' //fichier app.vue local
import MovieItemComponent from './components/movieitem.vue' //fichier movieitem
Vue.component('movie-item', MovieItemComponent);
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
new Vue({
  el: '#app',
  render: h => h(app)
})
