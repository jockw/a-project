<template>
    <div :class='$style.contain' >
        <Tree v-for="listItem in list" :msg="listItem"></Tree>
        <input type="range" id="myRange" min="1" max="100" v-model="value">
        <div>{{value}}</div>
    </div>
</template>

<script>
    import Tree from './tree.vue';
    export default {
        data() {
            return {
                value:'',
                list:[{
                    title:'one1',
                    children:[{
                        title:'two1',
                        children:[{
                            title:'three1',

                        },{
                            title:'three2',

                        },{
                            title:'three3',

                        }]
                    },{
                        title:'two2',
                        children:[{
                            title:'three4',

                        },{
                            title:'three5',

                        },{
                            title:'three6',

                        }]
                    }]
                },{
                    title:'one2',
                    children:[{
                        title:'two21',
                        children:[{
                            title:'three21',

                        },{
                            title:'three22',

                        },{
                            title:'three23',

                        }]
                    },{
                        title:'two22',
                        children:[{
                            title:'three24',

                        },{
                            title:'three25',

                        },{
                            title:'three26',

                        }]
                    }]
                }]
            }
        },
        components:{
            Tree
        }


    }
</script>

<style module>



</style>