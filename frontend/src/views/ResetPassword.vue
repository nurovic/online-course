<script>
export default {
  name:"ResetPassword",
}
</script>

<template>
  <div class="instructor-container">
    <div class="field course-information">
      <h1 class="information-title field">Reset Password</h1>
      
     <div class="field email">
      <label for="email">E mail</label>
      <input class="input" type="email" key="email" v-model="email"  >
      <!-- <input class="input" type="email" key="email" v-model="email"  :placeholder="$auth.$state.user.email"> -->
       </div>


      <div class="field field-button" >
        <button class="button" type="submit"  @click="onUpdateProfile">Reset Password</button >
      </div>
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

 