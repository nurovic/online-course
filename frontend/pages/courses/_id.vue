<template>
  <div class="container">
      <div class="left-right-container">
          
                <div class="left-container">
                    <div class="left-container-title">
                          <h1 class="course-name">{{courses.title}}</h1>
                            <br>
                    <div class="by">A course By <b>
                         <a href="#">Alexander Hanneman</a>
                         </b></div>
            </div>

            <div class="left-container info-navbar">
                <ul id="info-navbar">
                    <li><a href="#">Information</a></li>
                    <li><a href="courseContent">Content</a></li>
                    <li><a href="#">Projects</a></li>
                    
                </ul>
            <hr>
            </div>
            

             <information :courses="courses" />
            <courseContent/>
      <!-- <div  v-observe-visibility="handleInfinityScroll"></div> -->
      </div>


      <div  class="right-container">
          <briefCourse/>
          <hr>
          <Instructor/>
          
      </div>
        

      </div>
      
  </div>
</template>


<script>
import information from "@/components/courseId/information.vue"
import briefCourse from "@/components/CourseRightPanel/briefCourse.vue"
import Instructor from "@/components/CourseRightPanel/instructor.vue"
import courseContent from "@/components/courseId/courseContent.vue"

// import VueObserveVisibility from 'vue-observe-visibility'


export default {

    components : {
    information,
    briefCourse,
    Instructor,
    courseContent
    
    
},
    async asyncData({$axios, params}){
        try {
            let response = await $axios.$get(`http://localhost:3000/api/courses/${params.id}`)
            console.log(response)
            return {
                courses : response.courses[0]
            }
        } catch (err) {
            console.log(err);
        }
    },

    data() {
        return {
                isActive: true ,
                inActive: false
        }

},



}   



</script>


<style scoped >
.inActive {
opacity: 0;
}
.isActive {
    opacity: 1;
}

.right-container-navbar {
    top: 0;
    background: red;
}


.left-right-container {
    /* padding: 0; */
    /* background: blueviolet; */
    display: flex;
    flex-direction: row;
    width: 100%;
}
.left-container {
    width:  70%;
    margin:0  40px 20px 0;
    /* background: red; */
}
.left-container .left-container-title .course-name {
    font-size:45px ;
}

.left-container .left-container-title .by {
    font-size: 20px;
}
#info-navbar {
    display: flex;
    flex-direction: row;
    padding: 45px 0 0 0 ;
    margin-bottom: 15px;
}

#info-navbar a {
    font-size: 18px;
    margin-right: 30px 
}

.right-container {
    padding: 25px;
    /* background: blue; */
    width:30%
}

</style>