const URL = "http://localhost:3000"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'admin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:"~/plugins/localStorage.js", ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    component: 'fa',
    icons:{ 
      solid:true,
      brands: true
    
  }
},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    baseURL: URL,
    
    },
  proxy:{
    "/api": URL
  },



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },
  auth: {
    strategies :{
      local:{
        endpoints:{
          login: {  
            login: {url :'http://localhost:3000/api/auth/login', method: 'post', propertyName: 'local'},
            logout: {url :'http://localhost:3000/api/auth/logout', method: 'post', propertyName: 'local'},
            user: {url :'http://localhost:3000/api/auth/user', method: 'get', propertyName: 'user'}
          },
          logout: true
        }
      }
    }
  }
}
