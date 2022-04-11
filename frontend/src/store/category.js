import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

const actions = {
    FETCH_CATEGORY: 'fetchCategory'
}

const category = {
    namespaced: true,
    state: {
    },
    mutations: {
    },
    actions: {
        async [actions.FETCH_CATEGORY]() {
            const category = await axios.get('/category')
            return category.data
        },

    },
    modules: {
    }
}

export default category