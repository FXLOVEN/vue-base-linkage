<template>
    <el-row class="header-container">
        <el-col :span="18">
            <i class="el-icon-menu" style="padding-left: 10px;"></i>
        </el-col>
        <el-col :span="6" class="text-right">
            <el-dropdown>
                <span class="el-dropdown-link">
                头像<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script>

</script>

<style>
    .text-right {
        text-align: right;
        padding-right: 10px;
    }
    .header-container {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #20A0FF;
        color: aliceblue;
    }
    .el-dropdown-link {
        color: aliceblue;
    }
</style>