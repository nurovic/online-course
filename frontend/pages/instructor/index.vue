<script>
import uploadMovie from '~/components/uploadMovie'
export default {
  layout:"none",
      
components: {
  uploadMovie
},
data() {
  return {
    projectName:"",
    title:"",
    level:"",
    description:"",
    movie:null,
    // trailer:null


  }
},
methods: {

  movieFile(event) {
    this.movie = event.target.files[0]
    console.log(this.movie)
  },
  // trailerFile(event) {
  //   this.trailer = event.target.files[0]
  //   console.log(this.trailer)
  // },
  async onAddCourse() {
    let data = new FormData()
    data.append("projectName", this.projectName)
    data.append("title", this.title)
    data.append("level", this.level)
    data.append("description", this.description)
    data.append("movie", this.movie)
    // data.append("trailer", this.trailer)

    let result = await this.$axios.$post('http://localhost:3000/api/courses',data)
    console.log(result)
    this.$router.push('/profile/name')
  }
}
}
</script>

<template>
  <div class="instructor-container">
    <h1>Project Name</h1>

    <label for="projectName">Project Name</label>
    <input type="text" key="projectName" v-model="projectName">
    <label for="title">Title</label>
    <input type="text" key="title" v-model="title">
    
  
   git 

    <select v-model="level" name="level" id="level">
      <option value="Beginner" > Beginner  </option>
      <option value="Intermediate" selected>Intermediate</option>
      <option value="Pre-Advanced">Pre-Advanced</option>
      <option value="Master">Master</option>
    </select>

    <label for="movie"> Select Lessons </label>
    <input type="file" key="movie" multiple  @change="movieFile($event)">

    <!-- <label for="trailer">Choose movie:</label>
    <input type="file" key="trailer"  multiple @change="trailerFile($event)"> -->
    <!-- <input type="file" v-model="movie"
       id="movie" name="movie"
       accept="mpeg, mp4"
        > -->

    <span>Category</span>
    
    <!-- <p>{{courses.title}}</p> -->
    <br> 
   <textarea class="textarea"  placeholder="Project About Comment" v-model="description"> </textarea>
  <uploadMovie/>
  <button type="submit"  @click="onAddCourse">Add Lesson</button >

  <!-- <p>adasd{{courses}}</p> -->
  </div>
</template>



<style >
.instructor-container {
  display: flex;
  flex-direction: column;
}
textarea {
  display: block;
  resize:none;
   width: 20%;
  height: 50%;

}
</style>

 