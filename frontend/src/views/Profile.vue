
<script>
import LessonsVideo from "../components/lessonsVideo.vue";
import Learnings from "../components/Learnings.vue";
import {  mapState } from "vuex";
export default {
  name: "Profile",
  components: {
    LessonsVideo,
    Learnings,
  },
  data() {
    return {
      courses: [],
      selectedComponent: "LessonsVideo",
    };
  },

  computed: {
    ...mapState("user", ["profile_image"])
  },
};
</script>


<template>
  <div>
    <div class="container">
      <div class="container-left">
        <b class="name"></b>
        <br />
        <h2 class="master">Proffesion</h2>
        <br />
        <br />

        <b class="about-title">About</b>
        <div class="about-text">
          <p class="about font">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil
            sint illo inventore quaerat. Perspiciatis velit et odio explicabo
            iusto quia dignissimos sequi corporis, pariatur veritatis omnis
            aliquam, consequuntur modi.
          </p>
        </div>
        <div class="lessons">
          <button
            id="title-courses"
            @click="selectedComponent = 'LessonsVideo'"
          >
            Courses
          </button>
          <button id="title-courses" @click="selectedComponent = 'Learnings'">
            Learning
          </button>
        </div>
      </div>
      <div class="container-right">
        <div class="profile-photo-container">
          <div class="profile-photo-img">
            <img
              class="profile-photo"
              :src="this.profile_image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <keep-alive>
      <component :is="selectedComponent"> </component>
    </keep-alive>
  </div>
</template>

<style  scoped>
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
  font-size: 40px;
}
.container .container-left .about-title {
  font-size: 30px;
}
.container .container-left .master {
  margin-top: 10px;
  font-size: 20px;
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
  cursor: pointer;
  color: rgb(141, 141, 141);
  /* outline: none; */
}
button {
  border: none;
}
#title-courses:hover {
  color: darkblue;
}
</style>