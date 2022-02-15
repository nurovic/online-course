<script>
import { mapActions } from "vuex";

export default {
  name: "Projects",

  data() {
    return {
      projects: [],
    };
  },
  methods: {
    ...mapActions("projects", ["fetchProjects", "removeProject"]),
    async deleteProject(id) {
      await this.removeProject(id);
      this.updateProjects();
    },
    async updateProjects() {
      this.projects = await this.fetchProjects();
    },
  },
  async mounted() {
    await this.updateProjects();
  },
};
</script>
<template>
  <div class="projects-container">
    <h1>Your Projects</h1>
    <div class="projects" v-for="project in projects" :key="project.id">
      <div class="project-container">
        <div class="img-container">
          <img :src="project.project_file" alt="" />
        </div>
        <div class="projects-detail">
          <div class="course-name" v-for="course in project.course_id" :key="course._id">
            <router-link :to="`/courses/${course._id}`">{{ course.course_name }}</router-link>
          </div>
          <div class="project-description">
            {{ project.comment }}
          </div>
          <span @click="deleteProject(project._id)" class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="icon-size"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="edit-panel"></div>
    </div>
  </div>
</template>



<style scoped>
.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project-container {
  width: 70em;
  height: 12em;
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.212);
  border-radius: 15px;
  margin-bottom: 10px;
}
.projects {
  display: flex;
  justify-content: space-around;
}
.img-container {
  /* width: 35em; */
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.projects-detail {
  padding-left: 20px;
}
.course-name {
  font-size: 1.5em;
  font-weight: 800;
}
.project-description {
  padding-top: 10px;
  font-size: 1.3em;
  font-weight: 500;
}
#icon-size {
  height: 40px;
  color: black;
}
.enlargeable-image > .slot {
  display:inline-block;
  max-width:100%;
  max-height:100%;
  cursor:zoom-in;
}
/* default img if no element passed in */
.enlargeable-image > .slot > img.default {
  max-width:100%;
  vertical-align:middle;
}
/* passed-in element when growth is happening */
.enlargeable-image.active > .slot {
  opacity:1;
  filter:grayscale(100%);
}
/* full version that grows (background image allows seamless transition from thumbnail to full) */
.enlargeable-image .full {
  cursor:zoom-out;
  background-color:transparent;
  align-items:center;
  justify-content:center;
  background-position: center center;
  background-repeat:no-repeat;
  background-size:contain;
  display:none;
  
}
.enlargeable-image .full > img {
  object-fit:contain;
  width:100%;
  height:100%;
}
/* full version while getting bigger */
.enlargeable-image .full.enlarging {
  display:flex;
  position:fixed;
  left:0px;
  top:0px;
  width:100%;
  height:100%;
  background-color:transparent;
  cursor:zoom-out;
  z-index:3;
}
/* full version while at its peak size */
.enlargeable-image .full.enlarged {
  display:flex;
  position:fixed;
  left:0px;
  top:0px;
  width:100%;
  height:100%;
  background-color:transparent;
  cursor:zoom-out;
  z-index:2;
}
/* full version while getting smaller */
.enlargeable-image .full.delarging {
  display:flex;
  position:fixed;
  left:0px;
  top:0px;
  width:100%;
  height:100%;
  background-color:transparent;
  cursor:zoom-in;
  z-index:1;
}
</style>