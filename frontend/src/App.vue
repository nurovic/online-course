<script>
export default {
  created() {
    this.$store.dispatch('user/getToken');
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
*, ::after, ::before {
  box-sizing: none border-box;
}

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
  font-weight: 300;
  font-family: 'Anek Tamil', sans-serif;
}
</style>
