<template>
    <li class="list__item" :class="{ 'has-icon' : iconName }">
        <Icon :boxed="boxedIcon" :opaque="partial" :name="iconName" />
        <p class="list__text">{{ text }} <span v-if="partial">*</span></p>
    </li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    text: String,
    iconName: String,
    boxedIcon: Boolean,
    iconFade: Boolean,
    partial: Boolean
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/settings.scss";

.list__item {
  display: flex;
  align-items: center;
  margin: 0 0 $m 0;
}
@media screen and (min-width: 500px) {
  .list__item {
    width: 33.3%;
    margin: 0 0 $l 0;
  }
}
.list__item.has-icon:before {
  display: none;
}
.list__item.has-icon .list__text {
  margin: 0 0 0 $m;
}
.list__text {
  margin: 0;
  display: inline;
}
</style>
