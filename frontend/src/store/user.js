import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { router } from "../router"


Vue.use(Vuex)

const mutations = {
    SET_USER: 'setUser',
    SET_TOKEN: 'setToken',
    SET_PROFILE_IMAGE:'setProfileImage',
    INITAUTH:"initAuth",
    SET_COURSES:"setCourses"
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
        courses:[]
    },
    mutations: {
        [mutations.SET_USER](state, user) {
            state.user_name = user.full_name
        },
        setToken(state, token) {
            state.token = token
        },
        [mutations.SET_PROFILE_IMAGE](state, profile_image) {
            state.profile_image = profile_image.profile_image
        },
        [mutations.SET_COURSES](state, courses){
            state.courses = courses
        }
    },
    actions: {
        initAuth({commit}){
            let token = JSON.parse(localStorage.getItem("token"))
            if(token){
                commit("setToken", token)
            }else {
                router.push("/auth")
                return false
            }
        },
        async [actions.LOGIN]({ commit }, login) {
            const user = await axios.post('/users/login', login)
            commit(mutations.SET_USER, user.data)
            commit("setToken", user.data.tokens.access_token)
            commit(mutations.SET_PROFILE_IMAGE, user.data)
            commit(mutations.SET_COURSES,user.data.created_courses);
            localStorage.setItem("token",  JSON.stringify(user.data.tokens.access_token) )
        },
        async [actions.SIGNUP](_, signup){
            await axios.post("/users", signup)
        }

    },
    modules: {
    }
}

export default user