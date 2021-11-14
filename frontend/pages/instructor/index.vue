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
    price:Number,
  
  }
},
methods: {

  movieFile(event) {
    this.movie = event.target.files[0]
    console.log(this.movie)
  },

  async onAddCourse() {
    let data = new FormData()
    data.append("projectName", this.projectName)
    data.append("title", this.title)
    data.append("level", this.level)
    data.append("description", this.description)
    data.append("movie", this.movie)
    data.append("price", this.price)
    let result = await this.$axios.$post('http://localhost:3000/api/courses',data)
    console.log(result)
    this.$router.push('/profile')
  }
}
}
</script>

<template>
  <div class="instructor-container">
    <div class="field course-information">
      <h1 class="information-title field">Create Course</h1>


      <div class=" field projectName">
        <label for="projectName">Project Name</label>
        <input class="input" type="text" key="projectName" v-model="projectName">
      </div>
    
    <div class="field title">
      <label for="title">Title</label>
      <input class="input" type="text" key="title" v-model="title">
    </div>

    
    <div class="field movie">
       <label for="movie"> Select Lessons </label>
      <input  type="file" key="movie" multiple  @change="movieFile($event)">
    </div>
   

     <div class="field level" >
      <span>Level</span>
      <select class="input"  name="level" id="level" v-model="level" >
        <option  value="Beginner"> Beginner  </option>
        <option value="Intermediate" >Intermediate</option>
        <option value="Pre-Advanced">Pre-Advanced</option>
        <option value="Master">Master</option>
     </select>
    </div>

    <!-- <span>Category</span> -->
    
    
    <br> 
   <div class="description field">
     <textarea class="textarea"  placeholder="Project About Comment" v-model="description"> </textarea>
    </div>
    
    <div class="price field">
      <input class="input" type="number" key="price"  v-model="price" placeholder="Price"> 
    </div>
  <uploadMovie/>

    <div class="field field-button" >
      <button class="button" type="submit"  @click="onAddCourse">Add Lesson</button >

    </div>

  
    </div>
  </div>
</template>



<style >
.logo-home {
  display: block;
  height: 200px;
}
.field-button {
  align-items: center;
}
.button {
  width: 300px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-radius: 15px;
  justify-content: center;
  background: rgba(78, 140, 255, 0.301);
}
.button:hover {
  background: rgba(78, 140, 255, 0.801);
   transition: .5s ease-in-out;
}
.input {
  margin-top:13px ;
  padding-left:10px ;
  border-radius: 15px;
  height: 30px;
}
.input::placeholder {
  text-align: center;
}
.course-information {
    display: flex;
  flex-direction: column;
  padding: 5% 0 0 30%;
}
.textarea {
  height: 200px;
  width: 400px;
}
.field {
display: flex;
flex-direction: column;
width: 80vh;
margin: 15px;
}
textarea {
  display: block;
  resize:none;
   width: 20%;
  height: 50%;

}
 input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
  
        input[type=number] {
            -moz-appearance: textfield;
        }
</style>

 