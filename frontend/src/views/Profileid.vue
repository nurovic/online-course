<script>
import Courses from "../components/Courses.vue";
import {  mapState, mapActions } from "vuex";
export default {
  name: "Profileid",
  components: {
    Courses,
  },
  data() {
    return {
      user: {},
      selectedComponent: "LessonsVideo",
      profileImage: null
    };
  },
  methods: {
    ...mapActions("user", ["findUser"]),
  },
  async mounted() {
 await this.findUser(this.$route.params.id)
  },
  computed: {
    ...mapState("user", ["userId"]),
  }
};
</script>

<template>
  <div>
    <div class="container">
      <div class="container-left">
        <b class="name">{{userId.full_name}}</b>
        <br />
        <h2 class="master">{{userId.profession}}</h2>
        <br />
        <br />

        <b class="about-title">About</b>
        <div class="about-text">
          <p class="about font">
            {{userId.about}}
          </p>
        </div>
        <div class="lessons">
          <div
            id="title-courses"
          >
            Courses
          </div>
        </div>
      </div>
      <div class="container-right">
        <div class="profile-photo-container">
          <div class="profile-photo-img">
            <img v-if="userId.profile_image" class="profile-photo" :src="this.userId.profile_image" alt="" />
            <img v-else class="profile-photo" src="../assets/profile.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <Courses :userId="userId"/> 
  </div>
</template>

<style scoped>
.container {
  margin: 10px 200px;
}
.profile-photo-container .profile-photo-img .profile-photo {
  border-radius: 68% 32% 45% 55% / 42% 84% 16% 58%;
  height: 200px;
  width: 250px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.container-right .contant .contant-button {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  width: 250px;
  margin-top: 20px;
  align-items: center;
}

.container-right .contant .contant-button .button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 600px;
  /* background: rgba(228, 228, 228, 0.603); */
  margin: 3px;
  border: 2px solid rgba(100, 99, 99, 0.096);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 7px 7px, rgba(0, 0, 0, 0.022) 0px 5px 5px;
}

.container-right .contant .contant-button .button:hover {
  background: rgba(200, 210, 238, 0.39);
}
a {
  color: black;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 30px 40px;
}

.container .container-left .name {
  font-size: 50px;
}
.container .container-left .about-title {
  font-size: 30px;
}
.container .container-left .master {
  margin-top: 10px;
  font-size: 25px;
}
.container .container-left .instructor {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
}
.container .container-left .font {
  margin: 20px 0;
  font-size: 20px;
}
.container .container-left .about-text {
  width: 70%;
}
.lessons {
  display: flex;
  flex-direction: row;
}
#title-courses {
  margin: 2em 0.8em 0 0;
  font-size: 40px;
  color: rgb(141, 141, 141);
}
button {
  border: none;
}

.icon {
  color: rgba(0, 0, 0, 0.212);
  height: 3em;
}
.icon:hover {
  color: black;
}
.image-upload>input {
  display: none;
}
</style>
