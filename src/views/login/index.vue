<template>
  <div>
    <h1>login vue3</h1>
    <div>
      用户名: <input class="name-input" type="text" v-model="userInfo.username" />
      密码： <input class="pwd-input" type="password" v-model="userInfo.password" />
    </div>
    <div style="margin-top: 20px;">
      <button class="login-btn" style="margin-right: 20px;" @click="login">登录</button>
      <button class="back-btn" @click="back">返回</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup () {
    const router = useRouter();
    const store = useStore();
    const userInfo = reactive({
      username: "",
      password: ""
    });
    // 登录
    const login = async () => {
      if (userInfo.username && userInfo.password) {
        await store.dispatch("userLogin", userInfo);
        back();
      } else {
        alert("请输入用户信息")
      }
    }
    const back = () => {
      router.go(-1)
    }
    return {
      userInfo,
      login,
      back
    }
  }
}
</script>

<style>

</style>