<template>
    <ul class="list" :class="{ 'list--inline' : inline, 'list--limit' : limit }">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "List",
        props: {
            inline: Boolean,
            limit: Boolean
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/settings.scss';

    .list--limit {
        max-height: 500px;
        overflow: hidden;
        position: relative;
    }
    @media screen and (min-width: 500px) {
        .list--limit {
            max-height: 255px;
        }
    }
    .list.expanded {
        max-height: 2000px;
        transition: max-height 0.5s ease;
        background-image: none;
    }
    @media screen and (min-width: 500px) {
        .list--inline {
            display: flex;
            flex-wrap: wrap;
        }
    }
    .js-expand-target:after {
        content: '';
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        background-image : linear-gradient(to bottom,
                        rgba($bg-color, 0),
                        rgba($bg-color, 1) 90%);
    }
</style>