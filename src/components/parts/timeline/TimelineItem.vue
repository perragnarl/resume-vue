<template>
    <li class="timeline__item">
        <h3 class="timeline__name">{{ name }}</h3>
        <p class="timeline__title">{{ title }}</p>
        <small class="timeline__date">{{ span }}</small>
        <p class="timeline__text">
            <slot></slot>
        </p>
    </li>
</template>

<script>
    export default {
        name: "TimelineItem",
        props: ['name', 'title', 'span']
    }
</script>

<style scoped lang="scss">
    @import '../../../assets/settings.scss';

    .timeline__item {
        position: relative;
    }
    .timeline__item:not(:last-of-type) {
        margin: 0 0 $xl 0;
    }
    @media screen and (min-width: 500px) {
        .timeline__item:not(:last-of-type) {
            margin: 0 0 $xxl 0;
        }
    }
    .timeline__item:after {
        width: 24px;
        height: 24px;
        content: '';
        background: $bg-color;
        border: 4px solid $contrast;
        outline: 10px solid $bg-color;
        position: absolute;
        left: -38px;
        top: 20px;
        border-radius: 50%;
    }
    @media screen and (min-width: 750px) {
        .timeline__item:after {
            left: -62px;
            top: 24px;
        }
    }
    .timeline__name {
        margin: 0 0 $s 0;
    }
    .timeline__title {
        margin: 0;
        line-height: 1;
        margin: 0 0 $s 0;
        font-weight: 300;
    }
    @media screen and (min-width: 750px) {
        .timeline__title {
            margin: 0 0 $m 0;
        }
    }
    .timeline__date {
        display: block;
        color: darken($bg-color, 50%);
        font-weight: 300;
        margin: 0 0 $m 0;
    }
    @media screen and (min-width: 750px) {
        .timeline__date {
            position: absolute;
            width: 146px;
            text-align: right;
            top: 16px;
            left: -240px;
            margin: 0;
        }
    }
    .timeline__text {
        font-size: 0.9rem;
    }
</style>

