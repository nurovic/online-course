
<script>
import Summary from "@/components/Course/Summary.vue";
import OrderAbout from "@/components/Course/OrderAbout.vue";
import CourseProjects from "@/components/Course/CourseProjects";
import MovieList from "@/components/Course/MovieList";
import Commented from "@/components/Course/Commented";
import MakeComment from "@/components/Course/MakeComment";
import { mapActions } from "vuex";

export default {
  components: {
    summaryCourse: Summary,
    OrderAbout,
    projects: CourseProjects,
    movielist: MovieList,
    Commented,
    MakeComment,
  },
  data() {
    return {
      course: [],
      isActive: true,
      inActive: false,
      seen: false,
      selectedComponent: "summaryCourse",
      isLoading: true,
    };
  },

  methods: {
    ...mapActions("courses", ["fetchCoursesId"]),

    handleScroll() {
      const currentScroll = window.scrollY;

      if (currentScroll > 200) {
        this.seen = true;
      } else {
        this.seen = false;
      }
    },
  },
  created() {
    if (typeof window !== "undefined")
      addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  async mounted() {
    this.course = await this.fetchCoursesId(this.$route.params.id);
    this.isLoading = false;
  },
};
</script>

<template>
  <div class="container">
    <transition name="fade" mode="in-out">
      <div v-show="seen" class="navbar-scroll">
        <div class="navbar-movie"  v-for="mv in this.course.file" :key="mv.id">
          <video class="video" poster width="11%" height="25%" controls>
            <source :src="mv.movie" type="video/mp4" />
          </video>
          <div class="navbar-course-detail">
            <span class="navbar-description">{{ course.description }}</span>
          </div>
        </div>
      </div>
    </transition>

    <div class="left-right-container">
      <div class="left-container">
        <div class="left-container-title">
          <h1 class="course-name">{{ course.course_name }}</h1>
          <br />
          <div class="by">
            Course By
            <b>
              <router-link :to="`/user/${course.user_id._id}`">{{course.user_id.full_name}}</router-link>
            </b>
          </div>
        </div>

        <div class="left-container info-navbar">
          <ul id="info-navbar">
            <button class="button" @click="selectedComponent = 'summaryCourse'">
              Summary
            </button>
            <button class="button" @click="selectedComponent = 'movielist'">
              Introduction
            </button>
            <button class="button" @click="selectedComponent = 'projects'">
              Projects
            </button>
          </ul>
        </div>
        <hr />
        <keep-alive>
          <component :is="selectedComponent"> </component>
        </keep-alive>
        <span class="comments">Comments</span>
        <Commented />
        <MakeComment />
      </div>

      <div class="right-container">
        <div v-if="!seen">
          <OrderAbout :course="course" />
          <hr />
        </div>

        <div v-if="seen" class="course-detail-container">
          <OrderAbout :course="course" />
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.container {
  margin: 10px 200px;
}

.right-container-navbar {
  top: 0;
}

.left-right-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.left-container {
  width: 70%;
  margin: 0 40px 20px 0;
}
.left-container .left-container-title .course-name {
  font-size: 45px;
}

.left-container .left-container-title .by {
  font-size: 20px;
}
#info-navbar {
  display: flex;
  flex-direction: row;
  padding: 45px 0 0 0;
  margin-bottom: 15px;
}

#info-navbar a {
  font-size: 18px;
  margin-right: 30px;
}
.button {
  background: none;
  border-style: none;
  margin-right: 10px;
  height: 35px;
  font-size: 15px;
}
.button:hover {
  background: rgb(107, 107, 107);
}
.right-container {
  padding: 25px;
}
.course-detail-container {
  position: fixed;
  z-index: 10;
  margin: -60px 0;
  border-radius: 7px;
  background: rgba(238, 246, 246, 0.746);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 10px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
.navbar-scroll {
  position: fixed;
  background: rgba(82, 82, 82, 1);
  height: 120px;
  width: 100%;
  top: 0;
  margin: 0 0 0 -240px;
  padding: 10px 240px;
  z-index: 1;
}
.navbar-scroll .navbar-movie {
  display: flex;
  flex-direction: row;
}

.navbar-scroll .navbar-course-detail {
  margin: 0 50% 0 20px;
  color: rgb(211, 209, 209);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.comments {
  font-size: 30px;
  font-weight: 600;
}
.navbar-description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>