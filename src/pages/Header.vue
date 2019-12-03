<template>
    <header>
        <article class="article">
            <p class="article-title">{{title}}</p>
        </article>
        <Search />
    </header>
</template>

<script>
import {mapState} from 'vuex';
import Search from '../components/Search';

    export default {
        name:'Header',
        computed: mapState({
            title: state => state.title
        }),
        components: {
            Search,
        },

    }
</script>

<style lang="scss" scoped>

</style>