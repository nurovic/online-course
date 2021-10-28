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
                <b>Learn to make drawings inspired</b>
                <br>
                 
                <div class="text-area">
                    by nature in a realistic and creative way using graphite pencils
A pencil can be as simple or as complex of a drawing tool as you want, it all depends
z on what you aim to convey with each line. Visual artist and botanical illustrator Iván Salamanca teaches you how to illustrate nature in a realistic and creative way using this versatile tool.

                </div>
                <br>
In this course, learn techniques for creating naturalist drawings using graphite pencils, from the search for reference materials to digitizing your final art to share with the world. Discover how to capture the textures of plants and animals and add depth to your work using light and shadows.
In this course, learn techniques for creating naturalist drawings using graphite pencils, from the search for reference materials to digitizing your final art to share with the world. Discover how to capture the textures of plants and animals and add depth to your work using light and shadows.
In this course, learn techniques for creating naturalist drawings using graphite pencils, from the search for reference materials to digitizing your final art to share with the world. Discover how to capture the textures of plants and animals and add depth to your work using light and shadows.
In this course, learn techniques for creating naturalist drawings using graphite pencils, from the search for reference materials to digitizing your final art to share with the world. Discover how to capture the textures of plants and animals and add depth to your work using light and shadows.
In this course, learn techniques for creating naturalist drawings using graphite pencils, from the search for reference materials to digitizing your final art to share with the world. Discover how to capture the textures of plants and animals and add depth to your work using light and shadows.
In this course, learn techniques for creating naturalist drawings using graphite pencils, from the search for reference materials to digitizing your final art to share with the world. Discover how to capture the textures of plants and animals and add depth to your work using light and shadows.
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:"information",
props:["courses"]

}
</script>

<style>
.video-container  {
    width: 100%;
    
}

.info-text-container  {
    /* background:red; */
    padding:30px 0;
}

</style>