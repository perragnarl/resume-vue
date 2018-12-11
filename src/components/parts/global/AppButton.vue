<template>
    <button class="button" :class="['button--' + type, 'button--' + align]">
        <slot />
    </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: String,
    align: String
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/settings.scss";

.button {
  background: transparent;
  border: none;
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 700;
  padding: $m $l;
  cursor: pointer;
  color: $contrast;
  font-size: 0.7rem;
}
.button:hover,
.button:active,
.button:focus {
  outline: none;
}
.button--ghost {
  border: 3px solid $contrast;
  transition: all 0.1s ease-in-out;
}
.button--ghost:hover {
  background: $contrast;
  color: white;
  transition: all 0.1s ease-in-out;
}
.button--center {
  display: block;
  margin: $l auto;
}
</style>
