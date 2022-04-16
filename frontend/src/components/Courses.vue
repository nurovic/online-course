<script>
import { mapActions } from "vuex";
import { notification } from 'ant-design-vue';
export default {
  name: "learnings",
  props: ["userId"],
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    ...mapActions("order", ["addOrders"]),

    async order(id) {
      await this.addOrders(id);
      notification.success({message: 'Course Added to Order'})
    },
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
        v-for="learning in userId.created_courses"
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
              <button name="button" type="submit" class="button" > 
              <div class="price-buy" @click="order(learning._id)">
                Add Order
              </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#lessons-info {
  display: flex;
  flex-direction: column;
  font-size: 25px;
}
.price-buy {
  font-size: 20px;
  font-weight: 300;
}
.button {
    cursor: pointer;
    width:200px;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgb(76, 167, 179);
    border: 3px solid rgba(76, 179, 174, 0.705);
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 7px 30px, rgba(0, 0, 0, 0.2) 0px 5px 5px;
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
.name {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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
