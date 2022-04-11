import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

const actions = {
    FETCH_PROJECTS: 'fetchProjects',
    FETCH_COURSE_PROJECTS: 'fetchCourseProjects',
    GET_PROJECT: 'getProject',
    REMOVE_PROJECT: 'removeProject'

}

const projects = {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        async [actions.FETCH_PROJECTS]() {
            const projects = await axios.get('/projects')
            return projects.data
        },
        async [actions.FETCH_COURSE_PROJECTS](_, id) {
            const projects = await axios.get(`/courses/${id}/projects`)
            return projects.data
        },
        async [actions.GET_PROJECT](_, data) {
            await axios.post('/projects', data)
        },
        async [actions.REMOVE_PROJECT](_, id) {
            return await axios.delete(`/projects/${id}`)
        }
        
    },
    modules: {
    }
}

export default projects