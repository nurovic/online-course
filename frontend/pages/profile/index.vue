
<script>
import LessonsVideo from '../../components/lessonsVideo.vue'
import {mapActions} from "vuex"
export default {
        async asyncData({$axios, params}){
        try {
            let response = await $axios.$get("http://localhost:3000/api/auth/user")
                console.log(response)
            return {
                user: response.user
            }
        } catch (err) {
            console.log(err);
        }
    },
components: {
    LessonsVideo
},
  data() {
    return {
    //   user: [],
    };
  },
  async mounted() {
    // this.user = await this.fetchUsers();
    
  },

methods: {
    // ...mapActions(['fetchUsers'])
}
}
</script>


<template>
<div >
    <div class="container">
        
    <div class="container-left">
        <!-- <h1 class="instructor">{{user.name}}</h1> -->
        <b class="name ">{{user.name}}</b>
        <br>
        <h2 class="master">{{user.profession}}</h2>
        <br>
        <br>

        <b class="about-title">About</b>
        <div class="about-text">
        <p class="about font">
           
         {{user.about}}
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
<!-- <p>{{user.courses[0].price}}</p> -->
    <LessonsVideo :courses ="user.courses" />
    
    
    <img src="" alt="">
</div>
</template>

<style  >
.container {
    margin: 10px 200px;
}
.profile-photo-container .profile-photo-img .profile-photo {

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
.container .container-left .master{ 
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