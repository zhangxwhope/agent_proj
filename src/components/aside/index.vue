<template>
    <div class="mod-aside">
        <el-menu 
            :default-active="activeNav" 
            :collapse="isCollapse"
            class="el-menu-demo" 
            mode="vertical" 
            height="100%"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#3293ff"
            router>
            <el-menu-item index="user">
                <template slot="title">
                    <i class="el-icon-info"></i>
                    <span slot="title">用户管理</span>
                </template>
            </el-menu-item>
        </el-menu>
        <i class="nav-arrow el-icon-d-arrow-left" @click="collapseNav"></i>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeNav: 'user',
            isCollapse: false,
        };
    },
    methods: {
        collapseNav() {
            this.isCollapse = !this.isCollapse;
        },
    },
}
</script>

<style lang="scss">
@import './index.scss';
</style>


