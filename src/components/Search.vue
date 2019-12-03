<template>
        <div class="search">
            <input class="input-block" type="text" v-model.trim="q" placeholder="Search Word Here... " @keyup.enter="search"> 
            <button class="btn-success" @click='search' >Search</button>
        </div>
</template>

<script>
    export default {
        name:'Search',
        data() {
            return {
                q: ''
            }
        },
        methods: {
                search(){
                    if(this.q.length > 0){
                        this.$store.dispatch('search', this.q)
                    }
                }
        },
    }
</script>

<style lang="scss" scoped>

</style>