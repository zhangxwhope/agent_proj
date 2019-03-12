<template>
  <div id="app">
    <el-container class="container-wrap">
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <router-view class="router-view"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/header/index.vue';
import Aside from '@/components/aside/index.vue';

@Component({
  components: {
    Header,
    Aside,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .container-wrap{
    height: 100%;
  }
}
</style>
