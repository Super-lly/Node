<template>
  <div class="userInfo">
    <div class="userInfo_body">
      <div class="left_tools">
        <div class="user_info">
          <div class="user_pic">
            <img
              :src="userinfo.user_pic ? userinfo.user_pic : imgUrl"
              alt="user_pic"
            />
          </div>
          <div class="user_name">
            {{ userinfo.username }}
          </div>
        </div>
        <div class="user_tools">
          <p>查看信息</p>
          <p>修改信息</p>
        </div>
      </div>
      <div class="right_info">
        <div class="title">用户信息</div>
        <div class="upuser">
          昵称：
          <input type="text" name="nickname" v-model="nickname" />
          <br />
          邮箱：
          <input type="text" name="email" v-model="email" />
          <br />
          <button @click="postInfo" :disabled="isAction">修改</button>
        </div>
        <div class="uppassword">
          原密码：
          <input type="password" name="oldpwd" v-model="oldpwd" />
          <br />
          新密码：
          <input type="password" name="newpwd" v-model="newpwd" />
          <br />
          <button @click="updatePwd">更新密码</button>
        </div>
        <input type="file" id="file" ref="file" /> 
        <button @click="test">点击</button>
      </div>
    </div>
  </div>
</template>

<script>
import { infoRequest, infoPostRequest, updatePwdRequest, updatePicRequest } from "../net/userinfo";
import imgUrl from "@/assets/images/user.png";

export default {
  name: "userInfo",
  data() {
    return {
      tarr1: "",
      tarr2: "",
      tokenStr: sessionStorage.getItem("token"),
      id: sessionStorage.getItem("id"),
      userinfo: {},
      imgUrl,
      nickname: "",
      email: "",
      nickname_c: "",
      email_c: "",
      oldpwd:'',
      newpwd:'',
      isAction: true,
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
      this.userinfo = res.data;
      this.nickname = res.data.nickname ? res.data.nickname : "null";
      this.email = res.data.email ? res.data.email : "null";
      this.nickname_c = this.nickname;
      this.email_c = this.email;
    });
  },
  /* 
  beforeUpdate(){
    if(this.nickname != this.nickname_c || this.email != this.email_c){
      this.isAction = false
    } else{
      this.isAction = true
    }
  },
  */
  watch: {
    nickname: function () {
      if (this.nickname != this.nickname_c) {
        this.isAction = false;
      } else {
        this.isAction = true;
      }
    },
    email: function () {
      if (this.email != this.email_c) {
        this.isAction = false;
      } else {
        this.isAction = true;
      }
    },
  },
  methods: {
    postInfo() {
      infoPostRequest({
        url: "userinfo",
        method: "post",
        data: {
          nickname: this.nickname,
          email: this.email,
        },
        headers: {
          Authorization: this.tarr1 + " " + this.tarr2,
        },
      }).then((res) => {
        console.log(res);
      });
    },
    updatePwd(){
      updatePwdRequest({
        url:'/updatepwd',
        method:'post',
        data:{
          oldpwd: this.oldpwd,
          newpwd:this.newpwd
        },
        headers:{
          Authorization: this.tarr1 + " " + this.tarr2,
        }
      }).then(res=>{
        if(res.status === 0){
          this.oldpwd =  ''
          this.newpwd = ''
        }
      })
    },
    test(){
      let file = this.$refs.file.files[0]
      const render = new FileReader()
      render.readAsDataURL(file)
      render.onload = () =>{
        updatePicRequest({
          url:'/updatepic',
          method:'post',
          data:{
            user_pic:render.result
          },
          headers:{
            Authorization: this.tarr1 + " " + this.tarr2,
          }
        }).then(res=>{
          console.log(res);
        })
      }
    } 
  },
};
</script>

<style scoped>
.userInfo {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
}
.userInfo_body {
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.left_tools {
  flex: 1;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
}
.user_info {
  flex: 2;
}
.user_tools {
  flex: 4;
}
.right_info {
  flex: 4;
  border: 1px solid #ccc;
}
.user_pic img {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}
</style>