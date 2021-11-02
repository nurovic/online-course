<script>
export default {
     middleware:"auth",
    auth: "guest",
    layout:"none",
    data() {
        return {
            name:"",
            email:"",
            password:"",
            profession: "",
            about:"",
        }
    },

    methods: {
        async  onSignup() {
            try {
                let data = {
                    name: this.name,
                    email:this.email,
                    password:this.password,
                    profession: this.profession,
                    about: this.about
                };
                let response = await this.$axios.$post("http://localhost:3000/api/auth/signup", data)

                console.log(response)

                if(response.success) {
                    this.$auth.loginWith("local" ,{
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    })
                    
                    this.$router.push("/")
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<template>
  <div class="instructor-container">
    <!-- <div class="logo-home">
      <nuxt-link  to="/">
        <img class="logo" src="../../assets/2.png" alt="">
      </nuxt-link>
    </div> -->
    <div class="field course-information">
      <h1 class="information-title field">Create Account</h1>


      <div class=" field projectName">
        <label for="name">Full Name</label>
        <input class="input" type="text" key="name" v-model="name">
      </div>
    
     <div class="field email">
      <label for="email">E mail</label>
      <input class="input" type="email" key="email" v-model="email">
       </div>

       <div class="field password">
      <label for="password">Password</label>
      <input class="input" type="password" key="password" v-model="password">
       </div>
    
    
    
    <!-- <div class="field movie">
       <label for="movie"> Select Lessons </label>
      <input  type="file" key="movie" multiple  @change="movieFile($event)">
    </div>
    -->

       <div class="field profession">
        <label for="profession">Profession</label>
        <input class="input" type="text" key="profession" v-model="profession">
     </div>
    
    
     <br> 
     <div class="description field">
         <textarea class="textarea"  placeholder="Write About Yourself" v-model="about"> </textarea>
      </div>
 

      <div class="field field-button" >
        <button class="button" type="submit"  @click="onSignup">Create Account</button >

      </div>

      <div class="login">
          Already have an account ?
          <nuxt-link class="login-button" to="/login">
            Sign in
          </nuxt-link>
      </div>
        <!-- <div class="alert-container">
            <div class="alert-content">Password must be at least 6 characteres</div>
        </div> -->
  
    </div>
  </div>
</template>



<style scoped>
.login {
    font-size:15px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background: rgba(202, 202, 202, 0.144);
    margin: 5px;
    border-radius: 50px
}
.login:hover {
   background: rgba(78, 140, 255, 0.801);
   transition: .5s ease-in-out;
}
.logo-home {
  display: block;
  height: 200px;
}
.login-button {
    height: 20px;
    align-items: center;
    font-weight: 600;
    padding-top:5px ;
}
.login-button:hover {
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    margin-top:5px ;
    
    border-radius: 15px;
    height: 30px;
    width: 75px;
    transition: .5s ease-in-out;
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

 