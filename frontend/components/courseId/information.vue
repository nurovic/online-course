<script>
export default {
name:"information",
props:["courses"],

}
</script>


<template>
<div class="information-container">
    <div class="video-container">
        <video class="video" width="100%" height="20%" controls >
            <source :src="courses.movie" type="video/mp4">
          </video>
    </div>

    <div class="text">
        <div class="info-text-container">
            <div class="info-text">
                <b>{{courses.title}}</b>
                <br>
                 
                <div class="text-area">
                  {{courses.description}}
                </div>
                
            </div>
        </div>
    </div>
</div>
</template>


<style scoped> 
.video-container  {
    width: 100%;
    
}

.info-text-container  {
    /* background:red; */
    padding:30px 0;
}
.text-area {
margin-top :15px
}

</style>