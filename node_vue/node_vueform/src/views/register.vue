<template>
  <div class="register">
    <div class="user_card">
      <!-- <form action="http:127.0.0.1/api/register" method="post"> -->
        <input type="text" name="username" v-model="username" />
        <input type="password" name="password" v-model="password" />
        <button @click="register" class="register_btn">register</button>
      <!-- </form> -->
      <p class="text">
        已有账号？<span class="tologin" @click="login">去登录</span>
      </p>
    </div>
  </div>
</template>

<script>
import {request} from "../net/request";

export default {
  name: "Register",
  data(){
    return{
      username:'',
      password:'',
      userdata:{}
    }
  },
  methods: {
    register() {
      // this.$router.push("/home");
      this.userdata.username = this.username
      this.userdata.password = this.password
      // let userdata = JSON.stringify(this.userdata)
      let userdata = this.userdata
      console.log(userdata);
      request({
        url:'/register',
        method:'post',
        data:userdata
      }).then(res=>{
        console.log(res);
      })
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.user_card {
  padding-top: 15px;
  width: 200px;
  height: 120px;
  background-color: rgb(240, 231, 231);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.user_card input {
  width: 162px;
  height: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 15px;
}
.register_btn {
  border-radius: 15px;
  border: 1px solid #ccc;
}
.text {
  font-size: 12px;
}
.tologin {
  color: rgba(11, 92, 95, 0.945);
  text-decoration: underline;
}
</style>