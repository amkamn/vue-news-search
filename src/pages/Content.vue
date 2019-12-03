<template>
  <div class="content">
       
        <div class="loader" v-if="loading"></div>
        <div v-if="loading == false" class=list-Item>
            <div class="w100"><h4>List</h4></div>
            <List :list="item" v-for="(item,index) in list"  :key="index"/>
        </div>
        <ErrorMessage :errorMessage="errorMessage" v-if="list.length == 0 || list.length == null"/>
    </div>
</template>

<script>
const List = () => import("../components/List");
const ErrorMessage = () => import("../components/ErrorMessage");
 
import { mapActions,mapState } from 'vuex'
    export default {
        name:'Content',
        created () {
            this.init();
        },
        computed: mapState({
           list: state => state.list,
           errorMessage: state => state.errorMessage,
           loading: state => state.loading
        }),
        methods: {
                ...mapActions([
                    'init', 
                ]),
        },
        components: {
            List,
            ErrorMessage
        },
    }
</script>

<style lang="scss" scoped>

</style>