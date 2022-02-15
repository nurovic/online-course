import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)
const Mutations = {
    SET_LEVEL: 'SET_LEVEL'
}
const levels = {
    namespaced: true,
    state: {
        levels: []
    },
    mutations: {
        [Mutations.SET_LEVEL](state, level) 
            { state.levels = level }
    },
    actions: {
        async fetchLevels() {
            const level = await axios.get('/level')
            return level.data
            // commit(Mutations.SET_LEVEL, level.data)
        }
    },
    modules: {
    }
}

export default levels