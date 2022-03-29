import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const mutations = {
    SET_TOKEN: 'setToken',
    SET_COURSES:"setCourses",   
    SET_LEARNINGS:"setLearnings",
    SET_USER:"setUser",
}

const actions = {
    LOG_OUT:"logOut",
    LOGIN: 'login',
    SIGNUP:"signup",
    PROFIL_PHOTO:"profilPhoto",
    SING_UP:"singUp",
    GET_TOKEN:"getToken"
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
        
        async [actions.LOGIN]({ commit}, login) {
            const user = await axios.post('/users/login', login)
            commit('setToken', user.data.token.access_token)
        },
        async [actions.PROFIL_PHOTO](_, photo) {
            await axios.post("/users/update-profile-image", photo)
        },
        async [actions.GET_TOKEN]({commit}) {
            try {
                const getToken =  await localStorage.getItem('token')
                axios.defaults.headers.common['Authorization'] = `Bearer ${getToken}`
                commit(mutations.SET_TOKEN, getToken)
                const profile = await axios.get('/users/profile')
                commit(mutations.SET_USER, profile.data)
                commit(mutations.SET_COURSES, profile.data.created_courses);
                commit(mutations.SET_LEARNINGS, profile.data.learnings)
            } catch (error) {
                console.log("error1", error)
            }
        },
        [actions.LOG_OUT](){
            axios.defaults.headers.common['Authorization'] = ''
            localStorage.clear()
            window.location.href = "http://localhost:8080/"
        },
        async [actions.SING_UP](_, singup){
           await axios.post('/users', singup)
        }

    },
    modules: {
    }
}

export default user