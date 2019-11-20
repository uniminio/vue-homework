<template>
    <div class="div-todo-list">
        <el-input @keyup.enter.native="onSubmit" placeholder="Todo" v-model="todoData"></el-input>
        <el-collapse v-model="activeNames">
            <el-collapse-item title="正在进行" name="1">
                <div v-for="(item, index) in reverseList" :key="index">
                    <el-checkbox v-model="item.isFinish" v-if="!item.isFinish">{{item.label}}</el-checkbox>
                </div>
            </el-collapse-item>
            <el-collapse-item title="已完成" name="2">
                <div v-for="(item, index) in reverseList" :key="index">
                    <el-checkbox v-model="item.isFinish" v-if="item.isFinish"><del>{{item.label}}</del></el-checkbox>
                </div>
            </el-collapse-item>
        </el-collapse>
        <!--        <ul>-->
        <!--            <li v-for="(item, index) in this.list" :key="index" class="todo-item">-->
        <!--                <span v-if="item.isFinish" @click="changeFinish(item)">{{item.todo}}</span>-->
        <!--                <del v-else class="no-finish" @click="changeFinish(item)">{{item.todo}}</del>-->
        <!--            </li>-->
        <!--        </ul>-->
        <!--        <div v-for="(item, index) in this.list" :key="index">-->
        <!--        <div  class="el-tree-node__content" style="padding-left: 0px;" @click="changeFinish(item)" v-show="!item.isFinish"><span-->
        <!--                class="is-leaf el-tree-node__expand-icon el-icon-caret-right"></span><label-->
        <!--                class="el-checkbox"><span class="el-checkbox__input"><span-->
        <!--                class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false"-->
        <!--                                                         class="el-checkbox__original" value="" tabindex="-1"></span>-->
        <!--        </label><span class="el-tree-node__label">{{item.label}}</span></div>-->
        <!--        <div  class="el-tree-node__content" style="padding-left: 0px;" @click="changeFinish(item)" v-show="item.isFinish"><span-->
        <!--                class="is-leaf el-tree-node__expand-icon el-icon-caret-right"></span><label-->
        <!--                class="el-checkbox"><span class="el-checkbox__input is-checked"><span-->
        <!--                class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false"-->
        <!--                                                         class="el-checkbox__original" value="" tabindex="-1"></span>-->
        <!--        </label><span class="el-tree-node__label"><del>{{item.label}}</del></span></div>-->
        <!--        </div>-->
        <!--        <el-tree :data="list" :props="defaultProps" show-checkbox></el-tree>-->
    </div>
</template>

<script>
    export default {
        props: {
            list: Array,
        },
        data() {
            return {
                todoData: '',
                activeNames: [
                    '1',
                    '2',
                ]
            };
        },
        async created() {
            // this.init();
        },
        computed: {
            reverseList() {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                return this.list.reverse();
            }
        },
        methods: {
            changeFinish(item) {
                item.isFinish = !item.isFinish;
            },
            onSubmit() {
                this.$emit('childSubmit', this.todoData);
                this.todoData = '';
            },
        }
    };
</script>

<style scoped lang=less>
.div-todo-list {
    text-align: left;
}
</style>
