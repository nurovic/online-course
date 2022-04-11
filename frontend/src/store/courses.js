import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'




Vue.use(Vuex)

const actions = {
    FETCH_COURSES: 'fetchCourses',
    FETCH_COURSES_ID: 'fetchCoursesId',
    MAKE_COMMENT: 'makeComment',
    REMOVE_COMMENT: 'removeComment',
    CREATE_COURSE: 'createCourse',
}

const mutations = {
    SET_COURSE: 'setCourse'
}

const courses = {
    namespaced: true,
    state: {
        fetchCourse:[]
    },
    mutations: {
        [mutations.SET_COURSE](state, course){
            state.fetchCourse = course
        }
    },
    actions: {
        async [actions.FETCH_COURSES]({commit}) {
            const fetchCourse = await axios.get('/courses')
            commit(mutations.SET_COURSE, fetchCourse.data)
            return fetchCourse.data
        },
        async [actions.FETCH_COURSES_ID](_, id) {
            const courseId = await axios.get(`/courses/${id}`)
            return courseId.data
        },
        async [actions.MAKE_COMMENT](_, {id, comment}){
            await axios.post(`/courses/${id}/make-comment`,{comment})
        },
        async [actions.REMOVE_COMMENT](_,{id, commentId}){
            await axios.delete(`/courses/${id}/${commentId}`)
        },
        async [actions.CREATE_COURSE](_,courseform){
            await axios.post('/courses',courseform)

        }
    },
    modules: {
    }
}

export default courses