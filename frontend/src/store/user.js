import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const mutations = {
    SET_USER: 'setUser',
    SET_TOKEN: 'setToken',
    SET_PROFILE_IMAGE:'setProfileImage',
    INITAUTH:"initAuth",
    SET_COURSES:"setCourses",   
    SET_LEARNINGS:"setLearnings"
}

const actions = {
    LOGIN: 'login',
    SIGNUP:"signup"
}

const user = {
    namespaced: true,
    state: {
        user_name: "",
        token:"",
        profile_image:"",
        courses:[],
        learnings:[]
    },
    mutations: {
        [mutations.SET_USER](state, user) {
            state.user_name = user.full_name
        },
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        [mutations.SET_PROFILE_IMAGE](state, profile_image) {
            state.profile_image = profile_image.profile_image
        },
        [mutations.SET_COURSES](state, courses){
            state.courses = courses
        },
        [mutations.SET_LEARNINGS](state, learnings){
            state.learnings = learnings            
            },
        // Log_Out(state,)
    },
    actions: {

        async [actions.LOGIN]({ commit, dispatch }, login) {
            const user = await axios.post('/users/login', login)
            console.log(user.data)
            commit('setToken', user.data.token.access_token)
        },

        async getToken({commit, dispatch}) {
            try {
                const getToken =  await localStorage.getItem('token')
                axios.defaults.headers.common['Authorization'] = `Bearer ${getToken}`
                commit('setToken', getToken)
                let profile = await axios.get('/users/profile')
                commit(mutations.SET_PROFILE_IMAGE, profile.data)
                commit(mutations.SET_USER, profile.data)
                commit(mutations.SET_COURSES,profile.data.created_courses);
                commit(mutations.SET_LEARNINGS, profile.data.learnings)
            } catch (error) {
                console.log("error", error)
            }
        },
        async logOut({commit}){
            commit('Log_Out', null)
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