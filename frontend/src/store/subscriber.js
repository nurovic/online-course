import axios from 'axios'
import store from './index'

store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'user/setUser':
            // eslint-disable-next-line
            const token = mutation.payload.tokens.access_token 
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                localStorage.setItem('token', token)
            } else {
                axios.defaults.headers.common['Authorization'] = null
                localStorage.setItem('token')
            }
            break
    }
})