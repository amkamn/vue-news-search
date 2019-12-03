<template>
        <div class="card--outer">
            <div class="card">
                <img :src="list.urlToImage" alt="Card example image">
                <div class="card-body">
                    <h4 class="card-title">{{list.title}}</h4>
                    <h5 class="card-subtitle">{{list.author}}</h5>
                    <p class="card-text">{{list.description}}</p>
                    <button>
                        <a :href="list.url" target="_blank">Let me go here!</a>
                    </button>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name:'List',
        props:['list'],
    }
</script>

<style lang="scss" scoped>

</style>