<template>
<div class="navbar-container">
    <div class="navbar">
      <!-- logo -->
      <div class="logo-container">
        <nuxt-link to="/">
        <img class="logo" src="../assets/2.png" alt="">

        </nuxt-link>
      </div>
      
      <div class="navbar-middle-container">
        <div class="navbar-middle">        
          <span class="navbar-middle-title">Masters</span>        
          <nuxt-link to="/courses" class="navbar-middle-title">Courses</nuxt-link>        
          <span></span>        
          <span></span>        
        <input class="middle search" type="text" placeholder="Search Course...">
        <label for=""></label>
       </div>

      </div>
      
      <div class="account">
        <div class="account-container">
          <nuxt-link to="/instructor" class="educator">Instructor</nuxt-link>
          <span class="favorite">Favorite</span>
          <!-- <span class="order">Order</span> -->
        
          <template v-if="$auth.loggedIn"> 
            <div class="dropdown-container">
            
            <ul class="dropdown-container-list">
              <li>
                <nuxt-link to="/profile" class="account-img-name">
                 <img class="account-img" src="../assets/profile.jpg" alt="">
                <span class="account-name">{{$auth.user.name}}</span>
               </nuxt-link>
               <ul>
                <li class="logout list">
                 <a href="#" @click="onLogout">Logout</a>
              </li>
              <li class="edit-profile list ">
                <nuxt-link to="/editProfile">
                  Edit Profile
                </nuxt-link>
              </li>
               </ul>
              </li>
            </ul>
            </div>
          </template>

          <template v-else>
            <nuxt-link to="/signup" class="account-img-name">
             <img class="account-img" src="../assets/profile.jpg" alt="">
            <span class="account-name">Hello, Sign in</span>
           </nuxt-link>
          </template> 
          
        </div>
      </div>


  </div>
</div>
</template>

<script>
export default {
methods: {
          async onLogout() {
            try {
                await this.$auth.logout()
            } catch (err) {
                
            }
        }
}
}
</script>

<style >
.navbar {
  margin: 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

}
.navbar .logo {
  
  height: 50px;
  align-items: center;
}

.navbar-middle-container {
width: 70%;
}

.navbar-middle {
  display: flex;
  align-items: center;
} 

.navbar-middle .button {}

.navbar-middle .search {
  height: 40px;
  width: 100%;
  border-radius: 15px;
 background: rgba(146, 153, 174, 0.235);
}

.navbar-middle .search::placeholder {
  margin-left: 20px;
}

input[type="text"]::placeholder {
  padding-left: 15px;
}


.navbar-middle .middle {
    margin: 15px;
  
}
.navbar .account{

  width: 300px;
  height: 25px;

}

 .navbar .account .account-container {
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
 }
 .navbar .account .account-container .account-img-name{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  
 }
 .navbar .account .account-container .account-img-name .account-img{
   height: 40px;
   border-radius: 50%;
   margin:-10px  10px;
   
 }
 .navbar-middle-title {
   margin: 0 20px
 }

 body {
   background: rgba(168, 175, 194, 0.235);
 }
</style>

<style scoped>

.dropdown-container-list {
display: flex;
flex-direction: column;
}
.list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 29px;
  margin: 0 0 15px ;
  padding: 3px;
  border-radius: 9px;
}

ul li ul li:hover {
  cursor: pointer;
  background: rgba(78, 140, 255, 0.301);
}
ul li ul  {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  display: none;
}
ul li:hover > ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}
ul li ul li {
  clear: both;
  width: 100%;
}
</style>