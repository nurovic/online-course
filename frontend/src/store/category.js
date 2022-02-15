import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

const category = {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        async fetchCategory() {
            const category = await axios.get('/category')
            return category.data
        },

    },
    modules: {
    }
}

export default category