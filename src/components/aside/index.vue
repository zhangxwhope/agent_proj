<template>
    <div class="mod-aside">
        <el-menu 
            :default-active="activeNav" 
            class="aside-menu" 
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeNav: 'user',
        };
    },
}
</script>

<style lang="scss">
@import './index.scss';
</style>


