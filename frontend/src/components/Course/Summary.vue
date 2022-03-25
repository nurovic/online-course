<script>
import { mapActions } from "vuex";
export default {
  name: "Summary",
  data() {
    return {
      course: [],
    };
  },
  methods: {
    ...mapActions("courses", ["fetchCoursesId"]),
  },
    async mounted() {
    this.course = await this.fetchCoursesId(this.$route.params.id);
  },
};
</script>


<template>
  <div class="information-container">
    <div class="video-container" v-for="mv in this.course.file" :key="mv.id">
      <video class="video" width="100%" height="20%" controls >
        <source :src="mv.movie" type="video/mp4">
      </video>
    </div>

    <div class="text">
      <div class="info-text-container">
        <div class="info-text">
          <b>{{course.course_name}}</b>
          <br />
          <div class="text-area">
            {{course.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.video-container {
  width: 100%;
}

.info-text-container {
  padding: 30px 0;
}
.text-area {
  margin-top: 15px;
}
</style>