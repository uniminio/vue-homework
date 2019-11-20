<template>
    <div class="div-space">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="假的作业" name="first">
                <LearnVue></LearnVue>
            </el-tab-pane>
            <el-tab-pane label="随意发挥" name="second">
                <RandomThings></RandomThings>
            </el-tab-pane>
            <el-tab-pane label="TodoList" name="third">
                <Todo></Todo>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import Todo from '@/components/Todo.vue';
    import LearnVue from '@/components/LearnVue1View.vue';
    import RandomThings from '@/components/RandomThings.vue';

    export default {
        name: 'Space',
        components: {
            Todo,
            LearnVue,
            RandomThings,
        },
        created() {
            if (!this.$store.state.loginState) {
                this.$message({
                    message: '你还未登陆，请先登陆',
                    type: 'error',
                });
                this.$router.push('/');
            }
        }
    };
</script>

<style scoped>
.div-space {
    margin-left: 20%;
    margin-right: 20%;
}
</style>
