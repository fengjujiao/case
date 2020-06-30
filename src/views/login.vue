<template>
    <div class="longin">
        我是登录{{$store.state.test}}
        <el-button type="success" @click="login">登录</el-button>
    </div>
</template>
<script>
    export default {
        name:'login',
        data(){
            return{

            }
        },
        methods:{
            login(){
                this.$router.push({
                   path:'/home'
                })
            }
        }
    }
</script>
