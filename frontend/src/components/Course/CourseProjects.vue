<script>
import { mapActions } from "vuex";

export default {
  name: "Projects",

  data() {
    return {
      projects: [],
      project_file: null,
      comment: "",
      course_id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions("projects", [
      "fetchCourseProjects",
      "createProject",
      "getProject",
      "removeProject",
    ]),
    onFileSelected(event) {
      this.project_file = event.target.files[0];
    },
    async createProject(e) {
      e.preventDefault();
      let data = new FormData();
      data.append("project_file", this.project_file);
      data.append("comment", this.comment);
      data.append("course_id", this.course_id);
      await this.getProject(data);
      this.updateProject();
    },
    async updateProject() {
      this.projects = await this.fetchCourseProjects(this.$route.params.id);
    },
    async deleteProject(id) {
      await this.removeProject(id);
      this.updateProject();
    },
  },
  async mounted() {
    await this.updateProject();
  },
};
</script>

<template>
  <div class="project-container">
    <span class="add-project-title">Add Project</span>
    <div class="add-project">
      <form @submit="createProject">
        <textarea
          name="add-project"
          id="add-project"
          v-model="comment"
        ></textarea>
        <div class="buttons">
          <input type="file" @change="onFileSelected" />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>

    <div class="projects" v-for="project in projects" :key="project.id">
      <img
        class="project-image image-file"
        :src="project.project_file"
        alt=""
      />

      <div class="project-owner">
        <div
          class="user-name">
          <router-link
          to="/"
          >

          {{ project.createdBy.full_name }}
          </router-link>
        </div>
        <p class="project-description">{{ project.comment }}</p>
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
</template>



<style scoped>
.projects {
  display: flex;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.212);
  border-radius: 15px;
  margin-bottom: 20px;
}
.image-file {
 object-fit:contain;
  width: 200px;
  height: 10em;
}
.project-owner {
  margin-left: 20px;
  height: 150px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 15px;
}

.user-name {
  font-size: 20px;
  font-weight: 600;
}
.project-description {
  margin-top: 15px;
  margin-right: 30px;
  max-height: 100px;
}
.add-project {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
}

textarea {
  resize: none;
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 5px;
}
.add-project-title {
  font-size: 25px;
  font-weight: 500;
}
button {
  margin: 10px 0 0 20px;
  width: 35%;
}
#icon-size {
  height: 40px;
  color: black;
}

</style>