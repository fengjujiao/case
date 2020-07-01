<template>
<div>
我是系统配置
    <el-button @click="clickFn">修改</el-button>
</div>
</template>

<script>
    export default {
        name: "two",
        data(){
          return{

          }
        },
        mounted() {
            // console.log(this.$route.meta,99)
        },
        methods:{
            clickFn(){
                this.$router.push({
                    name:'new_form'
                })
            }
        }
    }
</script>

<style scoped>

</style>
