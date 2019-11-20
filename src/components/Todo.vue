<template>
    <div>
        <TodoList :list="this.list" @childSubmit="childSubmit"></TodoList>
    </div>
</template>

<script>
    // @ is an alias to /src
    import TodoList from '@/components/TodoList.vue';
    import {CHECKTODOLIST, PUSHLIST} from '../store/mutations-type';

    export default {
        name: 'Todo',
        components: {
            TodoList
        },
        data() {
            return {
                list: [],
                todoData: '',
                url: 'https://api.myjson.com/bins/p473u',
            };
        },

        async created() {
            // this.init();
            await this.$store.dispatch(CHECKTODOLIST, {
                url: this.url,
            });
            this.list = this.$store.state.list;
        },

        methods: {
            // async init() {
            //     const {data} = await this.$http.get('https://api.myjson.com/bins/6svrm');
            //     this.list = data.data;
            //  },
            async childSubmit(data) {
                // this.list.push({
                //     label: data,
                //     isFinish: false,
                // });
                await this.$store.dispatch(PUSHLIST, {
                    label: data,
                    isFinish: false,
                });
            }
        }
    };
</script>

<style scoped>

</style>
