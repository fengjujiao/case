<template>
<div>
我是用户管理
<!--    <div id="nav">-->
<!--        <el-tabs :tab-position="tabPosition" style="height: 200px;" @tab-click="handleClick" v-model="activeName">-->
<!--            <el-tab-pane :label="item.name" :name="item.path" v-for="(item,index) in datas" :key="index"></el-tab-pane>-->
<!--        </el-tabs>-->
<!--    </div>-->
<!--   <div>-->
<!--       <router-view/>-->
<!--   </div>-->
</div>
</template>

<script>
    export default {
        name: "one_first",
        data(){
            return{
                activeName:'/home/one/one_first/new_first',
                datas:[
                    {
                        name:'四级路由一',
                        path:'/home/one/one_first/new_first'
                    },
                    {
                        name:'四级路由二',
                        path:'/home/one/one_first/new_two'
                    },
                ],
                tabPosition:'left'
            }
        },
        methods:{
            handleClick() {
                // let name=this.menudata[val-1].path

                this.$router.push({
                    path:this.activeName
                })
            }
        }
    }
</script>

<style scoped>

</style>
