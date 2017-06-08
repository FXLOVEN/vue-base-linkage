<template>
    <div>
        <select name="province_id" v-model="pid" v-on:change="getCitys(pid)">
            <option value="0">--请选择省份--</option>
            <option v-for="item in provinces" v-bind:value="item.id">{{item.name}}
            </option>
        </select>

        <select name="city_id" v-model="cid" v-on:change="getAreas(cid)">
            <option value="0">--请选择市区--</option>
            <option v-for="item in myCitys" v-bind:value="item.id">{{item.name}}</option>
        </select>

        <select name="area_id" v-model="aid">
            <option value="0">--请选择区县--</option>
            <option v-for="item in myAreas" v-bind:value="item.id">{{item.name}}</option>
        </select>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: 'baron',
        data: function () {
            return {
                pid:0,
                cid:0,
                aid:0,
            }
        },
        computed: {
            ...mapState(['provinces', 'citys', 'areas', 'myCitys', 'myAreas']),
        },
        methods: {
            ...mapActions(['getCitys', 'getAreas']),
        },
        watch: {
            pid:function(newVal, oldVal){
                this.cid = 0;
                this.aid = 0;
            },
            cid:function(newVal, oldVal){
                this.aid = 0;
            },
            aid:function(newVal, oldVal){

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
