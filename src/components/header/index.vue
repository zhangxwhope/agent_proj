<template>
    <div class="mod-header">
        <el-menu 
            :default-active="activeTab" 
            class="el-menu-demo" 
            mode="horizontal" 
            router>
            <el-menu-item index="home">首页</el-menu-item>
            <el-menu-item index="about">关于</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'home',
        };
    },
}
</script>

