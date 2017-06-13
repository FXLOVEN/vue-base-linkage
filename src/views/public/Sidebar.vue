<template>
    <el-row>
        <el-col :span="24">
            <el-menu default-active="2">
                <el-menu-item index="0"><i class="el-icon-menu"></i>首页</el-menu-item>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>学员管理</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="2"><i class="el-icon-menu"></i>面试管理</el-menu-item>
                <el-menu-item index="3"><i class="el-icon-setting"></i>题库管理</el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {}
</script>

<style>

</style>