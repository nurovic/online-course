<script>
import { mapActions, mapState } from "vuex";
// import Dropdown from "@/components/Dropdown";
export default {
  components: {
    // Dropdown,
  },
  data() {
    return {
      isLoading: true,
      courseName: "",
      title: "",
      levels: [],
      categories: [],
      description: "",
      movie: null,
      price: Number,
      selectedCategory: "",
      selectedLevel: "",
      cover: null,
    };
  },
  computed: {
    ...mapState("movies", ["movieId"]),
  },
  methods: {
    ...mapActions("category", ["fetchCategory"]),
    ...mapActions("levels", ["fetchLevels"]),
    ...mapActions("movies", ["createMovie"]),
    ...mapActions("courses", ["createCourse"]),

    onFileSelected(event) {
      this.movie = event.target.files[0];
    },
    onFileSelectedCover(event) {
      this.cover = event.target.files[0];
    },
    async sendCourse(e) {
      e.preventDefault();
      try {
        this.isLoading = true
        const formdata = new FormData();
        formdata.append("title", this.title);
        formdata.append("movie", this.movie);
        await this.createMovie(formdata);

        const courseform = new FormData();
        courseform.append("course_name", this.courseName);
        courseform.append("file", this.movieId);
        courseform.append("price", this.price);
        courseform.append("description", this.description);
        courseform.append("category", this.selectedCategory);
        courseform.append("level", this.selectedLevel);
        courseform.append("cover", this.cover);
        await this.createCourse(courseform);
        this.isLoading = false
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },

  async mounted() {
    this.categories = await this.fetchCategory();
    this.levels = await this.fetchLevels();
    this.isLoading = false;
  },
};
</script>

<template>
  <div class="instructor-container">
    <div v-if="isLoading">Please Wait...</div>
    <div v-else class="field course-information">
      <h1 class="information-title field">Create Course</h1>
      <div class="field projectName">
        <label for="projectName">Project Name</label>
        <input
          class="input"
          type="text"
          key="courseName"
          v-model="courseName"
        />
      </div>
      <div class="field">
        <label for="cover"> Select Cover </label>
        <input type="file" @change="onFileSelectedCover" />
      </div>
      <div class="field title">
        <label for="title">Title</label>
        <input class="input" type="text" key="title" v-model="title" />
      </div>

      <div class="field movie">
        <label for="movie"> Select Lessons </label>
        <input type="file" @change="onFileSelected" />
      </div>

      <div class="field level">
        <span>Level</span>
        <select class="input" v-model="selectedLevel">
          <option v-for="level in levels" :key="level._id" :value="level._id">
            {{ level.level }}
          </option>
        </select>
      </div>

      <div class="field category">
        <span>Category</span>
        <select class="input" v-model="selectedCategory">
          <option
            v-for="category in categories"
            :key="category._id"
            :value="category._id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>

      <br />
      <div class="description field">
        <textarea
          class="textarea"
          placeholder="Project About Comment"
          v-model="description"
        >
        </textarea>
      </div>

      <div class="price field">
        <input
          class="input"
          type="number"
          key="price"
          v-model="price"
          placeholder="Price"
        />
      </div>

      <div class="field field-button">
        <button class="button" type="submit" @click="sendCourse">
          Add Lesson
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.logo-home {
  display: block;
  height: 200px;
}
.field-button {
  align-items: center;
}
.button {
  width: 300px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-radius: 15px;
  justify-content: center;
  background: rgba(78, 140, 255, 0.301);
}
.button:hover {
  background: rgba(78, 140, 255, 0.801);
  transition: 0.5s ease-in-out;
}
.input {
  margin-top: 13px;
  padding-left: 10px;
  border-radius: 15px;
  height: 30px;
}
.input::placeholder {
  text-align: center;
}
.course-information {
  display: flex;
  flex-direction: column;
  padding: 5% 0 0 30%;
}
.textarea {
  height: 200px;
  width: 400px;
}
.field {
  display: flex;
  flex-direction: column;
  width: 80vh;
  margin: 15px;
}
textarea {
  display: block;
  resize: none;
  width: 20%;
  height: 50%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>

 