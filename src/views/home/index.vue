<template>
  <div>
    <h1>home vue3</h1>
    <hello-world data-test="helloWorld" v-model:title="helloTitle" v-if="!isLogin"></hello-world>
    <template v-else>
      <div class="userinfo">
        你好，{{userInfo.username}}
      </div>
      <div class="list">
        <li v-for="(item, index) in goodsList" :key="index">{{ item }}</li>
      </div>
      <div class="logout-btn"><button @click="logout">退出登录</button></div>
    </template>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import { getGoodsList } from "@/api/home";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    HelloWorld,
  },
  setup() {
    // 拿登录状态
    const store = useStore();
    let isLogin = computed(() => Boolean(store.getters.getUserInfo));
    let userInfo = computed(() => store.getters.getUserInfo);
    const helloTitle = ref("hello, world");
    const logout = () => {
      store.dispatch("userLogout");
    }
    // 获取商品列表
    let goodsList = ref([]);
    const getList = async () => {
      try {
        goodsList.value = await getGoodsList([
          { name: "苹果", id: 1 },
          { name: "栗子", id: 2 },
        ]);
      } catch (err) {}
    };
    onMounted(() => {
      if (isLogin.value) {
        getList();
      }
    });
    return {
      goodsList,
      isLogin,
      logout,
      userInfo,
      helloTitle
    };
  },
};
</script>

<style></style>
