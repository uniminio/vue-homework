<template>
  <div style="margin-left: 30%">
    <el-col :span="12">
    <div>
      <h3>1. v-text</h3>
      <p>{{message}}</p>
      <p v-text="msg"></p>
    </div>
    <div>
      <h3>2. v-bind href 假的百度</h3>
      <a :href="url" target="_blank">百度一下</a>
    </div>
    <div>
      <h3>3. v-model 假的搜索栏</h3>
      <el-input type="text" v-model="inputStr" placeholder="回车搜索" @keyup.enter.native="onSubmit"></el-input>
      <h4>{{inputStr}}</h4>
    </div>
    <div>
      <h3>4. 假的计时器</h3>
      <p>{{time}}</p>
      <el-button @click="start">start</el-button>
      <el-button @click="stop">stop</el-button>
      <el-button @click="reset">reset</el-button>
    </div>
    <div>
      <h3>5.真的计数器</h3>
      <p>{{counter}}</p>
      <el-button @click="increment">+</el-button>
      <el-button @click="decrement">-</el-button>
    </div>
    <div>
      <h3>6. v-if v-show</h3>
      <img v-show="counter%4===0"
           src="http://hbimg.b0.upaiyun.com/e475ba27b6520f7f50e86db5e68054d71bff6335ec5b-xMceQK_fw658" alt=""/>
      <img v-show="counter%4===1" src="http://ku.90sjimg.com/element_origin_min_pic/16/12/27/cbf8925ad32553414048f151963f4c4c.jpg" alt=""/>
      <img v-show="counter%4===2" src="http://img.juimg.com/tuku/yulantu/140305/330857-14030511551073.jpg" alt=""/>
      <img v-show="counter%4===3" src="http://pic.51yuansu.com/pic3/cover/01/48/71/593a95ad063fc_610.jpg"   alt=""/>
    </div>
    <div>
      <h3>7. v-html</h3>
      <p v-html="vhtml"></p>
    </div>
    </el-col>
  </div>
</template>

<script>

export default {
  name: 'LearnVue1',
  props: {
    message: String,
  },
  data() {
    return {
      msg: 'Hello world!',
      counter: 0,
      url: '//www.bilibili.com',
      inputStr: '',
      time: 0,
      timeInterval: 0,
      vhtml: '<del>html</del>'
    };
  },

  methods: {
    increment() {
      this.counter += 1;
    },

    decrement() {
      this.counter -= 1;
    },
    timer() {
      const time = this.time;
      this.time = (time * time + 21) % 2394979347;
    },
    start() {
      this.timeInterval = setInterval(this.timer, 50);
    },
    stop() {
      clearInterval(this.timeInterval);
    },
    reset() {
      this.time = 0;
    },
    onSubmit() {
      window.location.href = 'https://search.bilibili.com/all?keyword=' + this.inputStr + '&from_source=nav_search';
    }
  },


};

</script>

<style scoped>

</style>
