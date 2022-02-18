<template>
  <div class="home">
    <div class="header">
      <span style="padding-left: 40px">首页</span>
      <div class="userinfo">
        <span class="user_pic" style="padding-right: 20px" @click="getInfo">
          <img
            :src="userinfo.user_pic ? userinfo.user_pic : imgUrl"
            alt="user_pic"
          />
          <!-- <img :src="imgUrl" alt="user_pic"> -->
        </span>
        <span style="padding-right: 40px">{{ userinfo.username }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { infoRequest } from "../net/userinfo";
import imgUrl from "@/assets/images/user.png";

export default {
  name: "home",
  data() {
    return {
      tarr1: "",
      tarr2: "",
      tokenStr: sessionStorage.getItem("token"),
      id: sessionStorage.getItem("id"),
      userinfo: {},
      imgUrl: imgUrl,
    };
  },
  created() {
    this.tarr1 = this.tokenStr.split("").slice(0, 6).join("");
    this.tarr2 = this.tokenStr.split("").slice(6, this.tokenStr.length).join("");
    infoRequest({
      url: "/userinfo",
      method: "get",
      params: {
        id: this.id,
      },
      headers: {
        Authorization: this.tarr1 + " " + this.tarr2,
      },
    }).then((res) => {
      // console.log(res);
      this.userinfo = res.data;
      // console.log(Boolean(this.userinfo.user_pic));
    });
  },
  methods: {
    getInfo() {
      this.$router.push("/userInfo");
    },
  },
};
</script>

<style scoped>
.home {
  min-width: 1000px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.userinfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user_pic img {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}
</style>