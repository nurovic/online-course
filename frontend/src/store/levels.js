import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)
const actions = {
    FETCH_LEVELS: 'fetchLevels'
}
const levels = {
    namespaced: true,
    state: {},
    actions: {
        async [actions.FETCH_LEVELS]() {
            const level = await axios.get('/level')
            return level.data
        }
    },
    modules: {
    }
}

export default levels