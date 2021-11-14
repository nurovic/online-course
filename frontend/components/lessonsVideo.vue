
<script>
export default {
  name:"lessonsVideo",
  props:["courses"]
}
</script>

<template>
  <div id="lessons-info" class=" container">
    <div id="title-courses">Courses</div>
    <div class="container-media" >
      <!-- multi -->
      <div class="lesson-container"  v-for="courses in courses" :key="courses">
      <div class="lesson-container-info">
        <div class="container-poster-video">
          <div class="poster-video">
          <div class="poster">
            <img class=" poster-img" src="@/assets/unreal.jpg" alt="">
          </div>
          <!--you will auto play when hover -->
            <video class="video" width="300" height="200" controls autoplay>
            <source :src="'courses.movie'" type="video/mp4">
          </video> 
          
        </div>  
        </div>
        <div class="container-info-text">
          <div class="info-text">
          <!-- <span class="name">James Nixon</span> -->
          <nuxt-link :to="`/courses/${courses._id}`" class="course-name">
           <span class="name">{{courses.projectName}}</span>
          </nuxt-link>
          <span class="rating"></span>
          <span class="price">$ {{courses.price}}</span>
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
  /* font-size: 25px; */

}
#title-courses {
  margin: 0 0 50px 0 ;
  font-size: 40px;
  color: rgb(141, 141, 141) ;
}

.container-media {
  width: 960px;
  height: 1020px;
  
  display: flex;
  flex-wrap: wrap;
}
.lesson-container:hover{
  transition: 0.25s;
  transform: scale(1.2);

}
.lesson-container {
  width: 300px;
  height: 330px;
  box-shadow: rgba(0, 0, 0, 0.10) 0px 14px 28px, rgba(0, 0, 0, 0.15) 0px 10px 10px;
  background: rgba(214, 214, 214, 0.109);
  margin:0 20px 40px 0;
}
.lesson-container-info {
  display: flex;
  flex-direction: column;

}



.lesson-container-info .info-text { 
  display: flex;
  flex-direction: column;
    margin: 10px 0 10px 10px ;
}
.lesson-container-info .info-text .name {
  font-size: 30px;
  font-weight: 500;
}
.lesson-container-info .info-text .course-name {
    font-size: 15px;
    margin:  10px 0;
}
.lesson-container-info .info-text .price {
  font-size: 20px;
  color: rgb(71, 71, 71);
}
.container-poster-video {
  position: relative;
  display: flex;
  flex-direction: row;
  margin-right: 20px

}
.poster-video {
position: relative;
}
.poster-video .poster {
  display: block;
  width: 300px;
  height: 200px;
}
.poster-video .video {
  top: 0px;
  object-fit:cover;
  
  position: absolute;
  display: flex;

  opacity: 0;
  transition: opacity 0.25s;
}
.poster-video .video > * {
    transform: translateY(20px);
    transition: transform 0.25s;
}
.video:hover {
  
  opacity: 1;
}
.poster-img {

  width: 300px;
  height: 200px;
  object-fit: cover;
  /* border-radius: 5px red solid; */
  
}
</style>