<template>
    <div class="app-container">
        <div class="sidebar-wrapper">
            <app-sidebar/>
        </div>

        <div class="main-wrapper">
            <app-header/>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import Header from '../public/Header';
    import Sidebar from '../public/Sidebar';
    import Main from '../public/Main'

    export default {
        components: {
            'app-header': Header,
            'app-sidebar': Sidebar,
            'app-main': Main,
        }
    }
</script>

<style>
    .app-container {
        position: relative;
        height: 100%;
        width: 100%;
    }

    .sidebar-wrapper {
        position: fixed;
        height: 100%;
        width: 20%;
        background: aliceblue;
    }

    .main-wrapper {
        position: fixed;
        right: 0;
        height: 100%;
        width: 80%;
        background: beige;
    }
</style>