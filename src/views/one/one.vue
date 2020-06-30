<template>
   <div>
       <el-tabs v-model="activeName" @tab-click="handleClick">
           <el-tab-pane :label="item.name" :name="item.path" v-for="(item,index) in menudata" :key="index">
           </el-tab-pane>
       </el-tabs>
       <div>
           <router-view/>
       </div>
   </div>
</template>

<script>
    export default {
        name: "one",
        data(){
            return{
                activeName:'/home/one/one_first',
                menudata:[
                    {
                        name:'用户管理',
                        path:'/home/one/one_first'
                    },
                    {
                        name:'系统配置',
                        path:'/home/one/two_first'
                    }
                ]
            }
        },
        watch: {
            // '$route': {
            //     handler (val) {
            //         console.log(val,88);
            //         this.$router.push({path: val.path})
            //         this.activeName = val.path
            //     }
            // }
        },
        mounted(){
            console.log(this.$route,998);
            // this.handleClick()
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
