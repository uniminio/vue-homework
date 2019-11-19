<template>
    <div style="margin-left: 30%">
        <el-col :span="12">
        <div class="block">
            <span class="demonstration">头条</span>
            <el-carousel height="600px">
                <el-carousel-item v-for="item in img" :key="item">
                    <img :src="item" alt="" width="664">
                </el-carousel-item>
            </el-carousel>
        </div>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: 'RandomThings',
        data() {
            return {
                img: [
                   'https://s2.ax1x.com/2019/11/19/MgsjVs.jpg',
                   'https://s2.ax1x.com/2019/11/19/MgsLrQ.jpg',
                   'https://s2.ax1x.com/2019/11/19/MgsqKg.jpg',
                   'https://s2.ax1x.com/2019/11/19/MgsObj.jpg',
                   // 'https://imgchr.com/i/MgsHxS',
                   // 'https://imgchr.com/i/Mgsvan',
                   // 'https://imgchr.com/i/Mgsx5q',
                   // 'https://imgchr.com/i/MgySP0',
                   // 'https://imgchr.com/i/MgypGV',
                   // 'https://imgchr.com/i/Mgy92T',
                   // 'https://imgchr.com/i/MgyCxU',
                   // 'https://imgchr.com/i/MgyiMF',
                   // 'https://imgchr.com/i/MgyFr4',
                ],
            };
        },
    };
</script>

<style scoped>

</style>
