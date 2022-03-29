<script>
import LessonsVideo from "../components/lessonsVideo.vue";
import Learnings from "../components/Learnings.vue";
import { mapState, mapActions } from "vuex";
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
      profileImage: null
    };
  },
  methods: {
    ...mapActions("user", ["profilPhoto"]),
    async onFileSelectedCover(event) {
      this.profileImage = await event.target.files[0];
      await this.sendPhoto()
    },
    async sendPhoto() {
      const formdata = new FormData();
      formdata.append("profile_image", this.profileImage);
      await this.profilPhoto(formdata);
      location.reload()
    }
  },
  computed: {
    ...mapState("user", ["user"]),
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="container-left">
        <b class="name">{{user.full_name}}</b>
        <br />
        <h2 class="master">{{user.profession}}</h2>
        <br />
        <br />

        <b class="about-title">About</b>
        <div class="about-text">
          <p class="about font">
            {{user.about}}
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
            <img v-if="user.profile_image" class="profile-photo" :src="this.user.profile_image" alt="" />
            <img v-else class="profile-photo" src="../assets/profile.jpg" alt="" />
            <div class="image-upload">
              <label for="file-input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
               </label>
              <input id="file-input" type="file" @change="onFileSelectedCover" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <keep-alive>
      <component :is="selectedComponent"> </component>
    </keep-alive>
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
