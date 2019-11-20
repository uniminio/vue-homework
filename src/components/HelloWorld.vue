<template>
    <div class="hello" style="margin-left: 30%;">
        <el-col :span="12">
        <el-form ref="form" :model="form">
            <el-form-item label="用户名">
                <el-input v-model="form.username" ></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登陆</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        </el-col>
    </div>
</template>

<script>
    import {LOGIN} from '../store/mutations-type';

    export default {
        name: 'HelloWorld',
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                },
            };
        },

        methods: {
            async onSubmit() {
                if (this.form.username === '' || this.form.password === '') {
                    this.$message('用户名或密码不能为空');
                } else {
                    await this.$store.dispatch(LOGIN, {
                        loginState: true,
                    });
                    this.$message({
                        message: '欢迎您 ' + this.form.username,
                        type: 'success',
                    });
                    await this.$router.push('/Space');
                }
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .hello {
        text-align: center;
    }

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
