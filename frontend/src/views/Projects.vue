<script>
import { mapActions } from "vuex";
import EnlargeableImage from "@diracleo/vue-enlargeable-image";
import { notification } from 'ant-design-vue';
export default {
  name: "Projects",
  components: {
    EnlargeableImage,
  },
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
      notification.error({message: 'Project Deleted.'})
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
        <enlargeable-image
          :src_large="project.project_file"
          animation_duration="500"
        >
          <img class="img-container" :src="project.project_file" alt="" />
        </enlargeable-image>
        <div class="projects-detail">
          <div class="course-name">
            <router-link :to="`/courses/${project.course_id._id}`"
              >Course: {{ project.course_id.course_name }}</router-link
            >
          </div>
          <div class="project-description">Comment: {{ project.comment }}</div>
        </div>
        <span @click="deleteProject(project._id)" class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="icon-size"
            class="h-6 w-6 icon-color"
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

.icon-color:hover {
  fill: gray;
}
.img-container {
  border-radius: 15px;
  height: 12em;
  width: 250px;
  object-fit: cover;
}
.projects-detail {
  width: 90%;
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
</style>
