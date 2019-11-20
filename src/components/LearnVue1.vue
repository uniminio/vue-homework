<template>
    <div class="div-learn-vue-1">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>1. v-text</span>
            </div>
            <div>
                <p>{{message}}</p>
                <p v-text="msg"></p>
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>2. v-bind href 假的百度</span>
            </div>
            <div>
                <a :href="url" target="_blank">百度一下</a>
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>3. v-model 假的搜索栏</span>
            </div>
            <div>
                <el-input type="text" v-model="inputStr" placeholder="回车搜索" @keyup.enter.native="onSubmit"></el-input>
                <h4>{{inputStr}}</h4>
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>4. 假的计时器</span>
            </div>
            <div>
                <p>{{time}}</p>
                <el-button @click="start">start</el-button>
                <el-button @click="stop">stop</el-button>
                <el-button @click="reset">reset</el-button>
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>5.真的计数器</span>
            </div>
            <div>
                <p>{{counter}}</p>
                <el-button @click="increment">+</el-button>
                <el-button @click="decrement">-</el-button>
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>6. v-if v-show</span>
            </div>
            <div>
                <img v-show="counter%3===0"
                     src="http://hbimg.b0.upaiyun.com/e475ba27b6520f7f50e86db5e68054d71bff6335ec5b-xMceQK_fw658" alt=""/>
                <img v-show="counter%3===1"
                     src="http://ku.90sjimg.com/element_origin_min_pic/16/12/27/cbf8925ad32553414048f151963f4c4c.jpg" alt=""/>
                <img v-show="counter%3===2" src="http://pic.51yuansu.com/pic3/cover/01/48/71/593a95ad063fc_610.jpg" alt=""/>
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>7. v-html</span>
            </div>
            <div>
                <p v-html="vhtml"></p>
            </div>
        </el-card>
        <template>
            <el-backtop target=".div-learn-vue-1" style="margin-right: 20%"></el-backtop>
        </template>
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
                // url: '//image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B2%CC%D0%EC%C0%A4&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111',
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
                // window.location.href = 'https://music.163.com/#/song?id=561493928&market=baiduqk';
            }
        },


    };

</script>

<style scoped>
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 800px;
        margin: 20px auto;
        text-align: center;
    }
    .div-learn-vue-1 {
        height:100vh;
        overflow-x: hidden;
        /*overflow-y: hidden;*/
    }

</style>
