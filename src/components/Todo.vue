<template>
    <div>
        <TodoList :list="this.list" @childSubmit="childSubmit"></TodoList>
    </div>
</template>

<script>
    // @ is an alias to /src
    import TodoList from '@/components/TodoList.vue';

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
            await this.$store.dispatch('CHECKTODOLIST', {
                url: this.url,
            });
            const {data} = this.$store.state.list;
            this.list = data;
        },

        methods: {
            // async init() {
            //     const {data} = await this.$http.get('https://api.myjson.com/bins/6svrm');
            //     this.list = data.data;
            //  },
            childSubmit(data) {
                this.list.push({
                    label: data,
                    isFinish: false,
                });
                this.$store.commit('pushList', {
                    label: data,
                    isFinish: false,
                });
            }
        }
    };
</script>

<style scoped>

</style>
