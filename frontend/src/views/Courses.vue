<script>
import { Carousel, Slide } from "vue-carousel";
import { mapActions } from "vuex";
export default {
  name: "Courses",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      isLoading: true,
      categories: [],
    };
  },
  computed: {
    filteredCategory() {
      return this.categories.filter((list) => list.course.length > 0);
    },
  },
  async mounted() {
    this.categories = await this.fetchCategory();
    this.isLoading = false;
  },
  methods: {
    ...mapActions("category", ["fetchCategory"]),
    ...mapActions("order", ["addOrders"]),
    async order(id){
      await this.addOrders(id)
      
    }
  },
};
</script>

<template>
  <div class="course-carousel">
    <div v-if="isLoading">Please Wait...</div>
    <div else>
      <div
        class="container-carousel"
        v-for="category in filteredCategory"
        :key="category.id"
      >
        <h1>{{ category.name }}</h1>
        <carousel :autoplay="true" :per-page="8">
          <slide
            class="slide"
            v-for="course in category.course"
            :key="course._id"
          >
            <div width="100%" height="cover">
              <img class="image" :src="course.cover" alt="" />
            </div>
            <div class="about-course">
              <router-link
                :to="`/courses/${course._id}`"
                class="course-name detail"
              >
                {{ course.course_name }}
              </router-link>
              <div class="user detail">JS Server</div>
              <div class="price detail">{{ course.price }} $</div>
              <div class="price-buy" @click="order(course._id)">Add Order</div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-carousel {
  display: flex;
  flex-direction: row;
}
.slide {
  height: 350px;
  width: 80px;
  margin-left: 50px;
  margin-top: 50px;
  margin-right: 5px;
  border-radius: 2px;
}
.about-course {
  margin-right: 15px;
}
.user {
  font-size: 20px;
  font-weight: 300;
}
.course-name {
  font-size: 25px;
  font-weight: 600;
}
.price {
  font-size: 25px;
  font-weight: 500;
}
.detail {
  margin-bottom: 3px;
}
.image {
  width: 100%;
  object-fit: cover;
  height: 8em;
}
.image img {
  max-width: 100%;
}
.price-buy{
  background: rgba(133, 144, 175, 0.904);
  display: inline-block;
  height: 30px;
  width: 100px;
  font-size:20px;
  font-weight: 800;
  color: white;
  border-radius: 8px;
  padding-left:8px;
}
.price-buy:hover {
  background: rgba(86, 99, 141, 0.904);
}
</style>
