<script>
export default {
name:"MovieList",
props:["courses"]
}
</script>

<template>
  <div class="content-container">fsds
    <!-- <div class="content-container-panel" v-for="lesson in courses" :key="lesson"> -->
    <div class="content-container-panel">
      <div class="content-container-panel-left-right">
         <div class="content-left-container">
            <!-- <div class="content-lesson-title">{{courses.title}}</div> -->
            <div class="content-lesson-title">course title2</div>
          </div>
          
        <div class="content-right-container" >
         <ul class="right-container-list" >
           <li class="right-container-list-item" > 
             <span class="icon-camera"><svg xmlns="http://www.w3.org/2000/svg" class="icon h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </span>
              <div class="lesson-title-introduction">
                <!-- {{lesson.movie}} -->
                lesson movie
              </div>
           </li>
         </ul>
         
        
       </div>
      </div>
      <hr>
    </div>

      
  </div>
</template>



<style scoped>
.icon  {
  height: 25px;
}
.icon-camera {
  margin-right: 9px;
}
.content-container-panel-left-right {
  display: flex;
  flex-direction: row; 
  }

.content-container-panel { 
margin-bottom: 15px;
}
.content-container-panel-left-right .content-right-container {
  
  margin-left:50% ;
}

.content-container-panel-left-right .content-right-container .right-container-list .right-container-list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

</style>