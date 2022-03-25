import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const mutations = {
    SET_TOKEN: 'setToken',
    SET_COURSES:"setCourses",   
    SET_LEARNINGS:"setLearnings",
    SET_USER:"setUser"
}

const actions = {
    LOGIN: 'login',
    SIGNUP:"signup",
    PROFIL_PHOTO:"profilPhoto"
}

const user = {
    namespaced: true,
    state: {
        token:"",
        courses:[],
        learnings:[],
        user:{}
    },
    mutations: {
        [mutations.SET_TOKEN](state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        [mutations.SET_COURSES](state, courses){
            state.courses = courses
        },
        [mutations.SET_LEARNINGS](state, learnings){
            state.learnings = learnings            
        },
        [mutations.SET_USER](state, user){
            state.user = user
        }
    },
    actions: {
        
        async [actions.LOGIN]({ commit, dispatch }, login) {
            const user = await axios.post('/users/login', login)
            commit('setToken', user.data.token.access_token)
        },
        async [actions.PROFIL_PHOTO](_, photo) {
            await axios.post("/users/update-profile-image", photo)
        },
        async getToken({commit}) {
            try {
                const getToken =  await localStorage.getItem('token')
                axios.defaults.headers.common['Authorization'] = `Bearer ${getToken}`
                commit('setToken', getToken)
                let profile = await axios.get('/users/profile')
                commit("setUser", profile.data)
                commit(mutations.SET_COURSES,profile.data.created_courses);
                commit(mutations.SET_LEARNINGS, profile.data.learnings)
            } catch (error) {
                console.log("error", error)
            }
        },
        logout(){
            axios.defaults.headers.common['Authorization'] = ''
            localStorage.clear()
        },

    },
    modules: {
    }
}

export default user