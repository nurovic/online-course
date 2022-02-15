import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

const projects = {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        async fetchProjects() {
            const projects = await axios.get('/projects')
            return projects.data
        },
        async fetchCourseProjects(_, id) {
            const projects = await axios.get(`/courses/${id}/projects`)
            return projects.data
        },
        async getProject(_, data) {
            await axios.post('/projects', data)
        },
        async removeProject(_, id) {
            return await axios.delete(`/projects/${id}`)
        }
        
    },
    modules: {
    }
}

export default projects