import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'




Vue.use(Vuex)

// const mutations = {

// }

// const actions = {
// FETCH_EVETN:'fetchEvent'
// }
const courses = {
    namespaced: true,
    state: {
        fetchCourse:[]
    },
    mutations: {
        setCourse(state, course){
            state.fetchCourse = course
        }
    },
    actions: {
        async fetchCourses({commit}) {
            const fetchCourse = await axios.get('/courses')
            commit("setCourse", fetchCourse.data)
            return fetchCourse.data
        },
        async fetchCoursesId(_, id) {
            const courseId = await axios.get(`/courses/${id}`)
            return courseId.data
        },
        async makeComment(_, {id, comment}){
            await axios.post(`/courses/${id}/make-comment`,{comment})
        },
        async removeComment(_,{id, commentId}){
            await axios.delete(`/courses/${id}/${commentId}`)
        },
        async createCourse (_,courseform){
            await axios.post('/courses',courseform)

        }
    },
    modules: {
    }
}

export default courses