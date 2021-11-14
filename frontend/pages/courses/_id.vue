
<script>
import information from "@/components/courseId/information.vue"
import briefCourse from "@/components/CourseRightPanel/briefCourse.vue"
import Instructor from "@/components/CourseRightPanel/instructor.vue"
import courseContent from "@/components/courseId/courseContent.vue"
// import {mapActions} from "vuex"

export default {
  async asyncData({$axios, params}){
        try {
            let response = await $axios.$get(`http://localhost:3000/api/courses/${params.id}`)
                console.log(response)
            return {
                courses: response.courses
            }
        } catch (err) {
            console.log(err);
        }
    },
  
  components : {
    information,
    briefCourse,
    Instructor,
    courseContent
    
    
},
    data() {
        return {
          // courses: [],
          isActive: true ,
          inActive: false,
          seen: false,

        }

},

  async mounted() {
    // this.courses = await this.fetchCourses(this.$route.params.id);
    // console.log(courses);
    
  },

methods: {
    // ...mapActions(['fetchCourses']),
     
     handleScroll() {
        const currentScroll = window.scrollY

         if (currentScroll > 200) {
             this.seen = true
         }else {
            this.seen = false
         }
         
      
    },
},
created() {
    if (typeof window !== "undefined")addEventListener("scroll",this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },


}   
</script>

<template>  
  <div class="container">
      <transition  name="fade" mode="in-out">
        <div v-show="seen" class="navbar-scroll">
            <div class="navbar-movie">
                <video class="video" poster width="11%" height="25%" controls >
            <source :src="courses.movie" type="video/mp4">
          </video>
          <div class="navbar-course-detail">
            <span>{{courses.description}}</span>
          </div>
            </div>
        </div>
      </transition>
      
      <div class="left-right-container">
          
                <div class="left-container">
                    <div class="left-container-title">
                          <h1 class="course-name">{{courses.title}}</h1>
                            <br>
                    <div class="by">A course By <b>
                         <a href="#">{{this.$auth.user.name}}</a>
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
            

            <information :courses="courses"  />
            <courseContent :courses="courses" />
      </div>


      <div  class="right-container">
          <div v-if="!seen">
            <briefCourse :courses="courses" />
             <hr>
          <Instructor/>
          </div>

          <div v-if="seen" class="course-detail-container">
            <briefCourse :courses="courses" />
             <hr>
          <Instructor/>
          </div>
          
      </div>

      </div>
      
  </div>
</template>



<style >
.container {
    margin: 10px 200px;
}

.right-container-navbar {
    top: 0;
    background: red;
}


.left-right-container {
    /* padding: 0; */
    
    display: flex;
    flex-direction: row;
    width: 100%;
}
.left-container {
    width:  70%;
    margin:0  40px 20px 0;

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
    width:30%;

}
.course-detail-container{
    position: fixed;
    z-index:10 ;
    margin: -60px 0;
    border-radius: 7px;    
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.20) 0px 14px 10px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    
}
.navbar-scroll {

    position:fixed ;
    background: rgba(82, 82, 82, 1);
    height: 120px;
    width: 100%;
    top: 0;
    margin: 0 0 0 -240px ;
    padding: 10px 240px;
    z-index: 1;
}
.navbar-scroll .navbar-movie {
    display:flex;
    flex-direction: row;
}

.navbar-scroll .navbar-course-detail {
margin: 0 50% 0 20px;
color: rgb(211, 209, 209);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

</style>