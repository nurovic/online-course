<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    ...mapActions("courses", ["makeComment"]),
    async sendComment() {
      await this.makeComment({
        id: this.$route.params.id,
        comment: this.comment,
      });
    },
  },
  computed: {
    ...mapState("user", ["user"]),
  },
};
</script>

<template>
  <div class="make-comment-container">
    <div class="profil">
      <img
        v-if="user.profile_image"
        class="image-field"
        :src="user.profile_image"
        alt=""
        aria-placeholder="Wtire"
      />
      <img v-else class="image-field" src="../../assets/profile.jpg" alt="" />
    </div>
    <div class="comment-field">
      <textarea name="comment" id="comment" v-model="comment"></textarea>
      <button @click="sendComment">Send</button>
    </div>
  </div>
</template>

<style scoped>
.make-comment-container {
  display: flex;
  height: 80px;
  margin-top: 80px;
}

.image-field {
  margin: 10px 0 0 10px;
  border-radius: 50%;
  height: 50px;
}
.comment-field {
  display: flex;
  align-items: center;
}
textarea {
  resize: none;
  margin-left: 20px;
  width: 80vh;
  height: 50px;
  outline: none;
  border: none;
}
button {
  height: 50px;
  margin-left: 15px;
  border: none;
  border-radius: 2px;
  background: rgba(226, 226, 226, 0.828);
}
button:hover {
  background: rgb(177, 177, 177);
  color: #fff;
}
</style>
