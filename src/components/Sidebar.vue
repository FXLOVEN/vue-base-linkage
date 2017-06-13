<template>
    <div class="sidebar">
        <el-menu>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-message"></i>主页
                </template>
                <el-menu-item index="1-1">
                    选项1
                </el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-4">选项4</el-menu-item>
            </el-submenu>
        </el-menu>

        <el-menu>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-message"></i>主页
                </template>
                <el-menu-item index="1-1">
                    选项1
                </el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-4">选项4</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .sidebar {

    }
</style>