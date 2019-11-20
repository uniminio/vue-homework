<template>
    <div class="div-random-things">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in img" :key="item">
                <img :src="item" alt="" width="452">
            </el-carousel-item>
        </el-carousel>
<!--        <div class="block">-->
<!--            <span class="demonstration">头条</span>-->
<!--            <el-carousel height="400px">-->
<!--                <el-carousel-item v-for="item in img" :key="item">-->
<!--                    <img :src="item" alt="" width="452">-->
<!--                </el-carousel-item>-->
<!--            </el-carousel>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: 'RandomThings',
        data() {
            return {
                img: [
                   'https://s2.ax1x.com/2019/11/19/MgsqKg.jpg',
                   'https://s2.ax1x.com/2019/11/19/MgsObj.jpg',
                   'https://s2.ax1x.com/2019/11/19/MgsHxS.jpg',
                   // 'https://s2.ax1x.com/2019/11/19/Mgsvan.jpg', // BB机修理
                   'https://s2.ax1x.com/2019/11/19/MgySP0.jpg',
                   'https://s2.ax1x.com/2019/11/19/MgyCxU.jpg',
                   // 'https://s2.ax1x.com/2019/11/19/MgyiMF.jpg', // 大哥大使用
                   'https://s2.ax1x.com/2019/11/19/MgyFr4.jpg',
                ],
            };
        },
    };
</script>

<style scoped>
    .div-random-things {
        margin-right: 10%;
        margin-left: 10%;
    }

</style>
