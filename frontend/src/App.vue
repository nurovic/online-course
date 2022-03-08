<script>
// import axios from "axios"
export default {
  created() {
    // this.$store.dispatch('user/initAuth');
  },
};
</script>

<template>
  <div id="app">
    <router-view name="navbar"></router-view>
    <router-view name="course-navbar"></router-view>
    <router-view></router-view>
  </div>
</template>

<style>
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: blue;
}
body {
  font-size: 18px;
  font-weight: 300;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
