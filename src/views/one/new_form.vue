<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: item.path }" v-for="(item,index) in breadcrumb" :key="index">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "new_form",
        data(){
            return{
                breadcrumb:this.$route.meta
            }
        }
    }
</script>

<style scoped>

</style>
