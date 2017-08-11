<template>
    <li :class='$style.contain' >
        <span @click="showNode">{{msg.title}}</span>
        <ul v-show="open" v-if="isFolder">
            <tree-node v-for="listItem in msg.children" :msg="listItem"></tree-node>
        </ul>
    </li>
</template>
<script>
    export default {
        props: ['msg'],
        name:'tree-node',
        mounted(){
            console.log(this.msg)
        },
        data() {
            return {
                open:false,
            }
        },
        computed: {
            isFolder: function() {
                return this.msg.children && this.msg.children.length
            }
        },
        methods:{
            showNode(){
                this.open=!this.open;
            }
        }
    }
</script>

<style module>

    .contain{
        list-style-type:none ;
    }           

</style>  