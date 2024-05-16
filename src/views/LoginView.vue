<template>
  <div>
    <div v-if="!(Object.values(database_temp).includes(token))" class="login_container">
      <label for="">Email</label>
      <input v-model="email" type="text">
      <label for="">Password</label>
      <input v-model="password" type="password">
      <button @click="post">Log In</button><br>
      <div>
        <p id="error_message">
          {{ error }}
        </p>
      </div>
    </div>
    <div v-if="(Object.values(database_temp).includes(token))"  class="button_container">
      <button @click="gotogame">Resume Game</button>
      <button @click="token = ''">Log in again</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';

export default {
  name: "LoginView",
  data() {
    return {
      email: '',
      password: '',
      error: '',
      token: '',
      database_temp: {
        user1: "QpwL5tke4Pnpja7X4"
      }
    }
  },
  methods: {
    gotogame: function() {
      this.$router.push(`/game`)
    },
    post: function () {
      axios.request({
        method: 'post',
        url: 'https://reqres.in/api/login',
        data: {
          email: this.email,
          password: this.password
        }
      }).then((request) => {
        this.token = request.data.token;
        Cookies.set('LoginToken', this.token)
        if(Object.values(this.database_temp).includes(this.token)){
          this.$router.push(`/game`)
        }
      }).catch((error) => { console.log(error); this.error = error.response.data.error })
    }
  },
  mounted() {
    this.token = Cookies.get('LoginToken');
    // let checkToken = Cookies.get('LoginToken');
    // console.log(checkToken)
    // if(checkToken == "QpwL5tke4Pnpja7X4"){
    //   this.$router.push(`/game`)
    // }
  },
};
</script>

<style scoped>
#error_message {
  color: red;
}
</style>
