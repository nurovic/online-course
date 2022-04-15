<script>
import { mapActions } from "vuex";
export default {
  name: "Comment",
  data() {
    return {
      course: [],
      isLoading: true,
    };
  },
    methods: {
    ...mapActions("courses", ["fetchCoursesId",'removeComment']),

    async updateComment() {
      this.course = await this.fetchCoursesId(this.$route.params.id);
    },
    async deleteSelect({id, commentId}){
      await this.removeComment({id, commentId})
      this.updateComment()
    },
    },
    async mounted() {
      await this.updateComment()
      this.isLoading = false
    },


};
</script>

<template>
  <div class="comment-container">
    <div v-if="isLoading">Please Wait...</div>
    <div
    v-else
      class="comment-field"
      v-for="comment in course.comments"
      :key="comment.id"
    >
      <div class="image">
        <img class="image-field" :src="comment.user_id.profile_image" alt="" />
      </div>
      <div class="info-comment">
        <router-link 
        :to="`/user/${comment.user_id._id}`"
        >
          <div class="user-name">{{ comment.user_id.full_name }}</div>
        </router-link>
        <hr />
        <div class="comment">{{ comment.comment }}</div>
      </div>
            <span @click="deleteSelect({id:course._id, commentId: comment._id})" class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="icon-size"
          class="h-3 w-2"
          fill="none"
          viewBox="0 0 30 30"
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
.comment-field {
  display: flex;
  background-color: rgba(223, 223, 223, 0.267);
  height: 90px;
  width: 90%;
  border: 1px solid rgba(0, 0, 0, 0.212);
  border-radius: 15px;
  margin-top: 20px;
}
.image {
  width: 6em;
}
.image-field {
  margin: 10px 0 0 10px;
  border-radius: 50%;
  height: 50px;
}
.info-comment {
  margin-top: 10px;
  margin-left: 20px;
  height: 80%;
  width: 90%;
}

.user-name {
  font-size: 20px;
  padding-bottom: 5px;
}
.comment {
  font-size: 20px;
  margin-bottom: 5px;
}
</style>