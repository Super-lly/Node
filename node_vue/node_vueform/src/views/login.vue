<template>
  <div class="login">
    <div class="user_card">
      <input type="text" name="username" v-model="username" />
      <input type="password" name="password" v-model="password" />
      <button @click="login" class="login_btn">login</button>
      <p class="text">
        没有账号？<span class="toregister" @click="register">去注册</span>
      </p>
    </div>
  </div>
</template>

<script>
import { request } from "../net/request";

export default {
  name: "Login",
  data() {
    return {
      userdata: {},
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.userdata.username = this.username;
      this.userdata.password = this.password;
      let userdata = this.userdata;
      console.log(userdata);
      request({
        url: "/login",
        method: "post",
        data: userdata,
      }).then((res) => {
        console.log(res);
        if (res.status === 0) {
          this.$router.push("/home");
        }
      });
    },
    register() {
      this.$router.push("/register");
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
.login_btn {
  border-radius: 15px;
  border: 1px solid #ccc;
}
.text {
  font-size: 12px;
}
.toregister {
  color: rgba(11, 92, 95, 0.945);
  text-decoration: underline;
}
</style>