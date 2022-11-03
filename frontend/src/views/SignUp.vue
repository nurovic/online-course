<script>
import { mapActions } from "vuex";
import { notification } from 'ant-design-vue';

export default {
  data() {
    return {
      userinfo: {
        full_name: "",
        email: "",
        password: "",
        profession: "",
        about: "",
      },
    };
  },
  methods: {
    ...mapActions("user", ["singUp"]),
    formValidate() {
      if (!this.userinfo.full_name) {
        notification.error({ message: 'You Must Enter Name' })
        return false
      }
      if (!this.userinfo.email) {
        notification.error({ message: 'You Must Enter Email' })
        return false
      }
      if (this.userinfo.password.length < 8) {
        notification.error({ message: 'Password Must be More Than 8 Characters' })
        return false
      }
      if (!this.userinfo.profession) {
        notification.error({ message: 'You Must Enter Profession' })
        return false
      }
      if (!this.userinfo.about) {
        notification.error({ message: 'You Must Enter About' })
        return false
      }
      return true
    },
    async submitSingnUp() {
      console.log(this.formValidate())
      if (this.formValidate()) {
        try {
          await this.singUp(this.userinfo)
          this.$router.push("/login")
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<template>
  <div class="instructor-container">
    <div class="field course-information">
      <h1 class="information-title field">Create Account</h1>
      <div class="field projectName">
        <label for="name">Full Name</label>
        <input class="input" type="text" key="name" v-model="userinfo.full_name" />
      </div>

      <div class="field email">
        <label for="email">E mail</label>
        <input class="input" type="email" key="email" v-model="userinfo.email" />
      </div>

      <div class="field password">
        <label for="password">Password</label>
        <input class="input" type="password" key="password" v-model="userinfo.password" />
      </div>

      <div class="field profession">
        <label for="profession">Profession</label>
        <input class="input" type="text" key="profession" v-model="userinfo.profession" />
      </div>

      <br />
      <div class="description field">
        <textarea class="textarea" placeholder="Write About Yourself" v-model="userinfo.about">
        </textarea>
      </div>
      <div class="field field-button">
        <button class="button" type="submit" @click="submitSingnUp">
          Create Account
        </button>

        <div class="login">
          Already have an account ?
          <router-link class="login-button" to="/login"> Sign in </router-link>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped>
.login {
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: rgba(202, 202, 202, 0.144);
  margin: 5px;
  border-radius: 50px;
}

.login:hover {
  background: rgba(78, 140, 255, 0.801);
  transition: 0.5s ease-in-out;
}

.logo-home {
  display: block;
  height: 200px;
}

.login-button {
  height: 20px;
  align-items: center;
  font-weight: 600;
  padding-top: 5px;
}

.login-button:hover {
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-top: 5px;

  border-radius: 15px;
  height: 30px;
  width: 75px;
  transition: 0.5s ease-in-out;
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
  transition: 0.5s ease-in-out;
}

.input {
  margin-top: 13px;
  padding-left: 10px;
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
  resize: none;
  width: 20%;
  height: 50%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
