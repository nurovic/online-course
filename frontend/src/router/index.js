import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CoursesId from "../views/CoursesId.vue";
import Courses from "../views/Courses.vue";
import VideoWatch from "../views/VideoWatch.vue";
import Projects from "../views/Projects.vue";
import EditProfile from "../views/EditProfile.vue";
import ChangePassword from "../views/ChangePassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import OrderList from "../views/OrderList.vue";
import Profile from "../views/Profile.vue";
import Profileid from "../views/Profileid.vue";
import Instructor from "../views/Instructor.vue";
import Navbar from "../components/Navbar.vue";
import CourseNavbar from "../components/CourseNavbar.vue";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      navbar: Navbar,
    },
  },
  {
    path: "/courses/:id",
    name: "CourseId",
    components: {
      default: CoursesId,
      navbar: Navbar,
    },
  },
  {
    path: "/courses",
    name: "Courses",
    components: {
      default: Courses,
      navbar: Navbar,
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token') === null) {
        return next({
          name: "LogIn",
        });
      }
      next();
    },
  },
  {
    path: "/order-list",
    name: "OrderList",
    components: {
      default: OrderList,
      navbar: Navbar,
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token') === null) {
        return next({
          name: "LogIn",
        });
      }
      next();
    },
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    components: {
      default: EditProfile,
      navbar: Navbar,
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token') === null) {
        return next({
          name: "LogIn",
        });
      }
      next();
    },
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    components: {
      default: ChangePassword,
      navbar: Navbar,
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token') === null) {
        return next({
          name: "LogIn",
        });
      }
      next();
    },
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    components: {
      default: ResetPassword,
      navbar: Navbar,
    },
  },
  {
    path: "/video-watch",
    name: "VideoWatch",
    components: {
      default: VideoWatch,
      "course-navbar": CourseNavbar,
    },
  },
  {
    path: "/projects",
    name: "Projects",
    components: {
      default: Projects,
      navbar: Navbar,
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token') === null) {
        return next({
          name: "LogIn",
        });
      }
      next();
    },
  },
  {
    path: "/profile",
    name: "Profile",
    components: {
      default: Profile,
      navbar: Navbar,
    },
  },
  {
    path: "/user/:id",
    name: "Profileid",
    components: {
      default: Profileid,
      navbar: Navbar,
    },
  },
  {
    path: "/instructor",
    name: "Instructor",
    components: {
      default: Instructor,
      navbar: Navbar,
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token') === null) {
        return next({
          name: "LogIn",
        });
      }
      next();
    },
  },
  {
    path: "/login",
    name: "LogIn",
    components: {
      default: LogIn,
      navbar: Navbar,
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    components: {
      default: SignUp,
      navbar: Navbar,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
