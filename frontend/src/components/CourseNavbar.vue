<script>
export default {
  name:'Navbar',
  data() {
    return {
      search: "",
    };
  },
};
</script>


<template>
  <div class="navbar-container">
    <div class="navbar">
      <!-- logo -->
      <div class="logo-container">
        <router-link to="/">
          <img class="logo" src="../assets/2.png" alt="" />
        </router-link>
      </div>
      <div class="account">
        <div class="account-container">
          <router-link 
          to="/projects" 
          class="projects">Course Name</router-link>      
          <template>
            <div class="container">
              <ul class="container-list">
                <li>
                  <router-link to="/profile" class="account-img-name">
                    <img
                      class="account-img"
                      src="../assets/profile.jpg"
                      alt=""
                    />
                    <span class="account-name">user name</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

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
  width: 72%;
}

.navbar-middle {
  display: flex;
  align-items: center;
}
.navbar-middle .search {
  height: 40px;
  width: 100%;
  border-radius: 15px;
  background: rgba(146, 153, 174, 0.235);
}

.navbar-middle .search::placeholder {
  margin-left: 20px;
}
input {
  text-indent:20px;
}

.navbar-middle .middle {
  margin: 15px;
}
.navbar .account {
  width: 300px;
  height: 25px;
}

.navbar .account .account-container {
  display: flex;
  margin-left: 0px;
  flex-direction: row;
  justify-content: space-between;
}
.navbar .account .account-container .account-img-name {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.navbar .account .account-container .account-img-name .account-img {
  height: 40px;
  border-radius: 50%;
  margin: -10px 10px;
}
.navbar-middle-title {
  margin: 0 20px;
}
.container-list {
   margin:0;
  display: flex;
  flex-direction: column;
}

</style>

