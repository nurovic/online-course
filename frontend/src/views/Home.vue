<template>
  <div class="home">
    <div class="img-container">
      <router-link to="/courses">
        <h1> Learn Without Limits</h1>
      </router-link>
      <img alt="Vue logo" src="../assets/undraw_percentages_re_a1ao.svg">
    </div>
  </div>
</template>

<script>


export default {
  components: {
  }
}
</script>


<style scoped>
.img-container h1 {
  display: flex;
  position: absolute;
  justify-content: center;
  font-size: 80px;
}

.img-container {
  display: flex;
  justify-content: center;
}

.img-container img {
  padding-top: 80px;
}
</style>