<template>
  <div class="hello">
    <h1 data-test="title" @click="changeTitle">{{ title }}</h1>
    <div data-test="loginBtn" @click="toLogin">去登录</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    title: String
  },
  name: 'HelloWorld',
  setup (props, {emit}) {
    const router = useRouter();
    const changeTitle = () => {
      emit("update:title", "改变标题")
    }
    const toLogin = () => {
      router.push("/login")
    }
    return {
      changeTitle,
      toLogin
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
