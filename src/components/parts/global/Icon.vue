<template>
    <div class="icon" :class="{ 'icon--boxed' : boxed, 'icon--opaque' : opaque, 'icon--large' : large }">
        <svg class="icon__symbol">
            <use :xlink:href="'../../../assets/img/sprite.svg#' + name"></use>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "Icon",
        props: {
            name: String,
            boxed: Boolean,
            opaque: Boolean,
            large: Boolean
        }
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/settings.scss';

    .icon {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        fill: $contrast;
    }
    .icon--boxed {
        background: $contrast;
        fill: white;
        border-radius: 4px;
    }
    .icon--opaque .icon__symbol {
        opacity: 0.5;
    }
    .icon__symbol {
        height: 18px;
        width: 18px;
    }
    .icon--large .icon__symbol {
        height: 24px;
        width: 24px;
    }
</style>