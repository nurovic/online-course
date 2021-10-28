<template>
<div >
    <div class="container">
   

    <div class="container-left">
        <h1 class="instructor">Instructor</h1>
        <b class="name ">Alexander Hanneman</b>
        <br>
        <h2 class="job ">Web Developer</h2>
        <br>
        <br>

        <b class="about-title">About</b>
        <div class="about-text">
        <p class="about font">
           
         I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.

My first foray into programming was when I was just 12 years old, wanting to build my own Space Invader game. Since then, I've made hundred of websites, apps and games. But most importantly, I realised that my greatest passion is teaching.

I spend most of my time researching how to make learning to code fun and make hard concepts easy to understand. I apply everything I discover into my bootcamp courses. In my courses, you'll find lots of geeky humour but also lots of explanations and animations to make sure everything is easy to understand.

I'll be there for you every step of the way. 
         </p>

        </div>

        
    </div>
     <div class="container-right">

    <div class="profile-photo-container">
        <div class="profile-photo-img">
            <img class="profile-photo" src="@/assets/profile-photo.jpeg" alt="">
            
        </div>
        
    </div>

    <!-- Contant  -->
    <div class="contant">
        <div class="contant-button">
        
            <a href="#" class="button"> Message</a>
            <a class="button" href="www.twitter.com">Web Site</a>
            
            
                <a class="button" href="www.twitter.com">Mail</a>
            
            
                <a span class="button" href="www.twitter.com">Youtube</a>
            
            
            
        </div>

    </div>
    </div>

</div>
    <LessonsVideo    />
    
    <img src="" alt="">
</div>
</template>

<script>
import LessonsVideo from '../../components/lessons-video.vue'
export default {
components: {
    LessonsVideo
}
}
</script>

<style>
.container {
    margin: 10px 200px;
}
.profile-photo-container .profile-photo-img .profile-photo {
    /* border-radius: 50% 50% 56% 44% / 13% 90% 10% 87% ; */
    border-radius: 68% 32% 45% 55% / 42% 84% 16% 58% ;
    height: 200px;
    width: 250px;
    object-fit:cover;
    box-shadow: rgba(0, 0, 0, 0.20) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    
}

.container-right .contant .contant-button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 180px;
    width: 250px;
    margin-top: 20px;
    align-items: center;

}

.container-right .contant .contant-button .button {
    display: flex; 
    align-items: center;
    justify-content: center;
    width: 250px; 
    height: 600px;
    /* background: rgba(228, 228, 228, 0.603); */
    margin: 3px;
    border: 2px solid rgba(100, 99, 99, 0.096);
    box-shadow: rgba(0, 0, 0, 0.05  ) 0px 7px 7px, rgba(0, 0, 0, 0.022) 0px 5px 5px;

}

.container-right .contant .contant-button .button:hover {
    background: rgba(200, 210, 238, 0.39)
}
a {
    color: black;
}

.container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 30px 40px;
}




.container .container-left .name{
font-size: 40px;
}
.container .container-left .about-title{
    font-size: 30px;
 }
.container .container-left .job{ 
    margin-top: 10px;
    font-size: 20px;
}
.container .container-left .instructor{
    font-size: 18px;
    margin-bottom:15px ;
    font-weight: 500;
}
.container .container-left .font{
    margin: 20px 0;
    font-size: 20px;    
}
.container .container-left .about-text {
    width: 70%;
}
</style>