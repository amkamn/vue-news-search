<template>
    <div class="wrapper">
        <Header/>
        <Content />
    </div>
</template>

<script>
import Header from './Header';
import Content from './Content';
    export default {
        name:'Home',
        components:{
            Header,
            Content
        }
    }
</script>

<style lang="scss" scoped>

</style>