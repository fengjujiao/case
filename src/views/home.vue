<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                        :default-active="active"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        :router="true"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu :index="item.name" v-for="(item,index) in menuData" :key="index">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.name}}</span>
                        </template>
                            <el-menu-item :index="newmenu.path" v-for="(newmenu,newindex) in item.child" :key="newindex">
                                <template>
                                    <i class="el-icon-location"></i>
                                    <span>{{newmenu.name}}</span>
                                </template>
                            </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
<!--                <span @click="addFn()">点击</span>-->
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                menuData:[
                    {
                        name:'导航栏一',
                        child:[
                            {
                                name:'选项1',
                                path:'/home/one'
                            }
                        ]
                    },
                    {
                        name:'导航栏二',
                        child:[
                            {
                                name:'选项2',
                                path:'/home/two'
                            }
                        ]
                    },
                    {
                        name:'导航栏三',
                        child:[
                            {
                                name:'选项3',
                                path:'/home/three'
                            }
                        ]
                    }
                ],
                // active:this.$route.path
            }
        },
        computed: {
            //todo 处理访问子路由，父级菜单高亮生效
            active() {
                let pathLength = this.$route.path.split("/").reverse();
                console.log(pathLength);
                if (pathLength.length < 4) {
                    return this.$route.path;
                }else if(pathLength.length < 5){
                    let path1 =
                        "/" +
                        this.$route.path.split("/").reverse()[2] +
                        "/" +
                        this.$route.path.split("/").reverse()[1]
                    return path1;
                }
                else {
                    let path1 =
                        "/" +
                        this.$route.path.split("/").reverse()[3] +
                        "/" +
                        this.$route.path.split("/").reverse()[2]
                    console.log(path1,8877);
                    return path1;
                }
                // if (this.$route.path === '/home/one/one_first' || this.$route.path === '/home/one/two_first') {
                //     return '/home/one'
                // } else {
                //     return this.$route.path
                // }
            }
        },
        // watch: {
        //     '$route.path' (path) {
        //         this.active = path
        //     }
        // },
        mounted() {
            console.log(this.active,889);
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            // addFn(){
            //     this.$router.push({
            //         path:'/one'
            //     })
            // }
        }
    }
</script>

<style scoped>
@import "../assets/css/elemen.css";
</style>
