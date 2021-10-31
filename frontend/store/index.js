import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

export const actions = {
    
    async fetchCourses(ctx, id) {
        const reqCourses = await axios.get(`/courses/${id}`)
        return reqCourses.data.courses[0]
    }
}