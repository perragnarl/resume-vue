<template>
    <ul class="timeline">
        <slot></slot>
    </ul>
</template>

<script>
export default {
  name: "Timeline"
};
</script>

<style scoped lang="scss">
@import "../../../assets/settings.scss";

.timeline {
  padding: $l 0 $m $l;
  border-left: 4px solid $contrast;
}
@media screen and (min-width: 750px) {
  .timeline {
    margin: 0 0 0 ($xxl * 2);
    padding: $l 0 $m $xl;
  }
}
</style>
