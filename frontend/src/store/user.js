import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const mutations = {
    SET_TOKEN: 'setToken',
    SET_COURSES:"setCourses",   
    SET_LEARNINGS:"setLearnings",
    SET_USER:"setUser",
    SET_USER_ID:"userId",
    SET_PROFIL_ID:"profileId",
}

const actions = {
    LOG_OUT:"logOut",
    LOGIN: 'login',
    SIGNUP:"signup",
    PROFIL_PHOTO:"profilPhoto",
    SING_UP:"singUp",
    GET_TOKEN:"getToken",
    RESET_PASSWORD:"resetPassword",
    FIND_USER:"findUser",
    UPDATE_USER:"updateUser",
    CHANGE_PASSWORD:"changePassword",
}

const user = {
    namespaced: true,
    state: {
        token:"",
        courses:[],
        learnings:[],
        user:{},
        userId: {},
        profilId:""
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
        },
        [mutations.SET_USER_ID](state, userId){
            state.userId = userId
        },
        [mutations.SET_PROFIL_ID](state, profilid){
            state.profilId = profilid
            localStorage.setItem('profilId', profilid)
        }
    },
    actions: {
        async [actions.LOGIN]({ commit}, login) {
            const user = await axios.post('/users/login', login)
            commit(mutations.SET_PROFIL_ID, user.data._id)
            commit(mutations.SET_TOKEN, user.data.token.access_token)
        },
        async [actions.PROFIL_PHOTO](_, photo) {
            await axios.post("/users/update-profile-image", photo)
        },
        async [actions.GET_TOKEN]({commit}) {
            try {
                if (localStorage.token != null ) {
                const getToken =  await localStorage.getItem('token')
                axios.defaults.headers.common['Authorization'] = `Bearer ${getToken}`
                commit(mutations.SET_TOKEN, getToken)
                const profilId = await localStorage.getItem('profilId')
                const profile = await axios.get(`/users/profile/${profilId}`)
                commit(mutations.SET_USER, profile.data)
                commit(mutations.SET_COURSES, profile.data.created_courses);
                commit(mutations.SET_LEARNINGS, profile.data.learnings)
                }
            } catch (error) {
                console.log("error", error)
            }
        },
        [actions.LOG_OUT](){
            axios.defaults.headers.common['Authorization'] = ''
            localStorage.clear()
            window.location.href = "/"
        },
        async [actions.SING_UP](_, singup){
           await axios.post('/users', singup)
        },
        async [actions.RESET_PASSWORD](_, email) {
           const a =  await axios.post("/users/reset-password", {email})
           console.log(a)
        },
        async [actions.FIND_USER]({commit}, id){
            const findUser = await axios.get(`/users/${id}`)
            commit(mutations.SET_USER_ID, findUser.data)
        },
        async [actions.UPDATE_USER](_, user){
            await axios.patch('/users', user)
        },
        async [actions.CHANGE_PASSWORD](_, password){
            await axios.post('/users/change-password', password)
        }

    },
    modules: {
    }
}

export default user