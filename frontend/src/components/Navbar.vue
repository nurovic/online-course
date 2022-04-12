<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      search: "",
      filtered: [],
    };
  },
  methods: {
    ...mapActions("courses", ["fetchCourses"]),
    ...mapActions("user", ["logOut"]),
    
    signout() {
      this.logOut()
    }
  },
  async mounted() {
    this.filtered = await this.fetchCourses();
  },
  computed: {
    ...mapState("user", ["user"]),
    filteredPosts() {
      if (!this.search) {
        return [];
      }
      return this.filtered.filter(
        (post) =>
          post.course_name.toLowerCase().includes(this.search.toLowerCase()) > 0
      );
    },
  },
};
</script>

<template>
  <div class="navbar-container">
    <div class="navbar">
      <!-- logo -->
      <div class="logo-container">
        <router-link to="/">
          <img class="logo" src="../assets/2.png" alt="" />
        </router-link>
      </div>

      <div class="navbar-middle-container">
        <div class="navbar-middle">
          <router-link to="/courses" class="navbar-middle-title"
            >Courses</router-link
          >

          <input
            class="middle search"
            type="text"
            placeholder="Search Course..."
            v-model="search"
          />
          <div class="filter-container">
            <ul
              class="list-filter"
              v-for="course in filteredPosts"
              :key="course._id"
            >
              <div class="list-detail">
                <span class="course-name">
                  <a :href="`/courses/${course._id}`">
                    {{ course.course_name }}</a
                  >
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div class="account">
        <div class="account-container">
          <router-link to="/instructor" class="educator"
            >Instructor</router-link
          >
          <router-link to="/projects" class="projects">Projects</router-link>
          <router-link to="/order-list" class="order">Order</router-link>
          <template>
            <router-link
              v-if="user.full_name"
              to="/profile"
              class="account-img-name"
            >
              <ul>
                <li>
                  <img
                    v-if="user.profile_image"
                    class="account-img"
                    :src="this.user.profile_image"
                    alt=""
                  />
                  <img
                    v-else
                    class="account-img"
                    src="../assets/profile.jpg"
                    alt=""
                  />
                  <span class="account-name">{{ user.full_name }}</span>
                  <ul>
                    <li class="ul_li" @click="signout">Log Out</li>
                    <li>
                      <router-link to="/edit-profile">Edit Profile</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </router-link>
            <router-link v-else to="/signup" class="account-img-name">
              <img class="account-img" src="../assets/profile.jpg" alt="" />
              <span class="account-name">Hello, Sign in</span>
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.navbar {
  margin: 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.navbar .logo {
  height: 50px;
  align-items: center;
}

.navbar-middle-container {
  margin-right:65px ;
  width: 72%;
}

.navbar-middle {
  display: flex;
  align-items: center;
}
.navbar-middle .search {
  height: 40px;
  width: 100%;
  border-radius: 15px;
  background: rgba(146, 153, 174, 0.235);
}

.navbar-middle .search::placeholder {
  margin-left: 20px;
}
input {
  text-indent: 20px;
}

.navbar-middle .middle {
  margin: 15px;
}
.navbar .account {
  width: 300px;
  height: 25px;
}

.navbar .account .account-container {
  display: flex;
  margin-left: -70px;
  flex-direction: row;
  justify-content: space-between;
}
.navbar .account .account-container .account-img-name {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.navbar .account .account-container .account-img-name .account-img {
  height: 40px;
  border-radius: 50%;
  margin: -10px 10px;
}
.navbar-middle-title {
  margin: 0 20px;
}

body {
  background: rgba(168, 175, 194, 0.235);
}
</style>

<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
}
.filter-container {
  position: absolute;
  left: 320px;
  top: 80px;
  width: 800px;
}
.list-filter {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.096);
  height: 30px;
  display: flex;
  flex-direction: row;
  border: 2px solid rgba(0, 0, 0, 0.144);
  border-radius: 5px;
  margin-left: 30px;
  margin-bottom: 10px;
}
.list-detail {
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 800;
}
.dropdown-container-list {
  margin: 0 -10px;
  display: flex;
}
.list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 29px;
  margin: 0 0 15px;
  padding: 3px;
  border-radius: 9px;
}

ul li ul li:hover {
  cursor: pointer;
  background: rgba(78, 140, 255, 0.301);
}
ul li ul {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  display: none;
}

ul li:hover > ul,
ul li ul:hover {
  display: flex;
  margin-right:20px;
  visibility: visible;
  opacity: 1;
  width: 8em;
  display: block;
}
ul li ul li {
  clear: both;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
