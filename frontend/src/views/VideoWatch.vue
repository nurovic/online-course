<template>
  <div class="course-container">
      <div class="course-about">
          <span class="movie-name" >Movie Name</span>
      </div>
    <div class="video-container">
      <div class="video-player">
        <video class="video" controls>
          <source src="" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoWatch",
};
</script>

<style scoped>
video {
  width: 50%;
}
.course-about{
    display: flex;
    justify-content: center;
    font-size:2em;
    font-weight: 600;
    margin:60px 0 ;

}
.video-player{
    display: flex;
    justify-content: center;
}
</style>