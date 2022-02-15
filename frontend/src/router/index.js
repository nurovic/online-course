import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CoursesId from '../views/CoursesId.vue'
import Courses from '../views/Courses.vue'
import VideoWatch from '../views/VideoWatch.vue'
import Projects from '../views/Projects.vue'
import EditProfile from '../views/EditProfile.vue'
import ResetPassword from '../views/ResetPassword.vue'
import OrderList from '../views/OrderList.vue'
import Profile from '../views/Profile.vue'
import Instructor from '../views/Instructor.vue'
import Navbar from "../components/Navbar.vue"
import CourseNavbar from "../components/CourseNavbar.vue"
import Stripe from "../components/Stripe.vue"
import LogIn from "../views/LogIn.vue"
import SignUp from "../views/SignUp.vue"



Vue.use(VueRouter)

const routes = [
  {
    path: '/stripe',
    name: 'Stripe',
    components:  {
      default: Stripe,
      "navbar": Navbar
    }
  },
  {
    path: '/',
    name: 'Home',
    components:  {
      default: Home,
      "navbar": Navbar
    }
  },
  {
    path: '/courses/:id',
    name: 'CourseId',
    components: {
      default: CoursesId,
      "navbar": Navbar
    }
  },
  {
    path: '/courses',
    name: 'Courses',
    components: {
      default: Courses,
      "navbar": Navbar
    }
  },
  {
    path: '/order-list',
    name: 'OrderList',
    components: {
      default: OrderList,
      "navbar": Navbar
    }
  },
  {
    path: '/edit-profile',
    name: 'EditProfile',
    components: {
      default: EditProfile,
      "navbar": Navbar
    }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    components: {
      default: ResetPassword,
      "navbar": Navbar
    }
  },
  {
    path: '/video-watch',
    name: 'VideoWatch',
    components: {
      default: VideoWatch,
      "course-navbar":CourseNavbar

    }
  },
  {
    path: '/projects',
    name: 'Projects',
    components: {
      default: Projects,
      "navbar": Navbar
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    components: {
      default: Profile,
      "navbar": Navbar
    }
  },
  {
    path: '/instructor',
    name: 'Instructor',
    components: {
      default: Instructor,
      "navbar": Navbar
    }
  },
  {
    path: '/login',
    name: 'LogIn',
    components: {
      default: LogIn,
      "navbar": Navbar
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    components: {
      default: SignUp,
      "navbar": Navbar
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
