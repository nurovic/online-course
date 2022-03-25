<script>
import { mapState } from "vuex";

export default {
  name: "learnings",

  data() {
    return {
      isLoading: true,
    };
  },

  computed: {
    ...mapState("user", ["learnings"]),
  },

  async mounted() {
    await this.learnings;
    this.isLoading = false;
  },
};
</script>

<template>
  <div id="lessons-info" class="container">
    <div class="container-media">
      <div
        class="lesson-container"
        v-for="learning in learnings"
        :key="learning.id"
      >
        <div class="lesson-container-info">
          <div class="container-poster-video">
            <div class="poster-video">
              <div class="poster-img">
                <img class="image" :src="learning.cover" alt="" />
              </div>
            </div>
          </div>
          <div class="container-info-text">
            <div class="info-text">
              <span class="name">{{ learning.name }}</span>

              <router-link
                :to="{ name: 'CourseId', params: { id: learning._id } }"
                class="course-name"
              >
                <span class="name">{{ learning.course_name }}</span>
              </router-link>
              <span class="rating"></span>
              <span class="price">$ {{ learning.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#lessons-info {
  display: flex;

  flex-direction: column;

  font-size: 25px;
}

.container-media {
  width: 960px;

  height: 1020px;

  display: flex;

  flex-wrap: wrap;
}

.lesson-container:hover {
  transition: 0.25s;

  transform: scale(1.2);

  z-index: 2;
}

.lesson-container {
  width: 300px;

  height: 330px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 28px,
    rgba(0, 0, 0, 0.15) 0px 10px 10px;

  background: rgb(253, 253, 253);

  margin: 0 20px 40px 0;
}

.lesson-container-info {
  display: flex;

  flex-direction: column;
}

.lesson-container-info .info-text {
  display: flex;

  flex-direction: column;

  margin: 10px 0 10px 10px;
}

.lesson-container-info .info-text .name {
  font-size: 20px;

  font-weight: 500;
}

.lesson-container-info .info-text .course-name {
  font-size: 15px;

  margin: 10px 0;
}

.lesson-container-info .info-text .price {
  font-size: 20px;

  color: rgb(71, 71, 71);
}

.container-poster-video {
  position: relative;

  display: flex;

  flex-direction: row;

  margin-right: 20px;
}

.poster-img {
  display: block;

  height: 100%;

  width: 100%;

  object-fit: fill;
}

.image {
  width: 300px;

  height: 200px;
}

.image img {
  max-width: 100%;
}
</style>
