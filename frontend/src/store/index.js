import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import user from './user'
import projects from './projects'
import courses from './courses'
import category from './category'
import movies from './movies'
import levels from './levels'
import order from './order'


// const z = axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')`;
// const z = axios.defaults.headers.common['Authorization'] = "Bearer" + localStorage.getItem("token") ;
// console.log(z)
axios.defaults.baseURL = 'http://localhost:3000'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    projects,
    courses,
    category,
    movies,
    levels,
    order
  }
})
