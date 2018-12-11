<template>
    <div id="app">
        <AppHeader />
        <main>
            <About />
            <Software />
            <Platform />
            <DevMethods />
            <WorkMethods />
            <Experiences />
            <Languages />
            <Interests />
        </main>
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from "./components/blocks/AppHeader.vue";
import About from "./components/blocks/About.vue";
import Software from "./components/blocks/Software.vue";
import Platform from "./components/blocks/Platform.vue";
import DevMethods from "./components/blocks/DevMethods.vue";
import WorkMethods from "./components/blocks/WorkMethods.vue";
import Experiences from "./components/blocks/Experiences.vue";
import Languages from "./components/blocks/Languages.vue";
import Interests from "./components/blocks/Interests.vue";
import AppFooter from "./components/blocks/AppFooter.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    About,
    Software,
    Platform,
    DevMethods,
    WorkMethods,
    Experiences,
    Languages,
    Interests,
    AppFooter
  }
};
</script>

<style lang="scss">
/* Basics */
$bg-color: #fafafa;
$contrast: #ef3b24;
$font-color: #323232;
$page-width: 1048px;

/* Spacing */
$space: 6px;
$xs: ($space / 2);
$s: $space;
$m: ($s * 2);
$l: ($m * 2);
$xl: ($l * 2);
$xxl: ($xl * 2);

/* Base */
html {
  box-sizing: border-box;
  font-size: 18px;
}
@media screen and (min-width: 500px) {
  html {
    font-size: 20px;
  }
}
@media screen and (min-width: 750px) {
  html {
    font-size: 24px;
  }
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  font-family: "Barlow", sans-serif;
  padding: $xl 0 0 0;
  margin: 0;
  background: $bg-color;
  color: $font-color;
  line-height: 2;
}
@media screen and (min-width: 500px) {
  body {
    padding: $xxl 0 0 0;
    border: $l solid lighten($bg-color, 14%);
  }
}
main {
  width: 100%;
  max-width: $page-width;
  margin: 0 auto;
  padding: 0 $l;
}
section {
  margin: 0 0 $xl 0;
}
@media screen and (min-width: 500px) {
  section {
    margin: 0 0 $xxl 0;
  }
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 0;
  margin: 0;
}
h1 {
  font-weight: 700;
  line-height: 1;
  margin: 0 0 $l 0;
  font-size: 2.1rem;
}
h2 {
  font-weight: 700;
  line-height: 1;
  margin: 0 0 $l 0;
  font-size: 1.6rem;
}
h3 {
  font-weight: 700;
  line-height: 1;
  margin: 0 0 $l 0;
  font-size: 1.4rem;
}
@media screen and (min-width: 500px) {
  h1,
  h2,
  h3 {
    margin: 0 0 $xl 0;
  }
}
small {
  font-size: 0.8rem;
}
p {
  margin: 0 0 $l 0;
}
a {
  color: $contrast;
  text-decoration: none;
}
a:hover,
a:focus,
a:active {
  text-decoration: underline;
}
.pull-left {
  margin-right: auto !important;
}
.pull-right {
  margin-left: auto !important;
}
.hide-and-seek {
  position: relative;
  cursor: pointer;
}
.hide-and-seek__cover {
  height: 40px;
  width: 70px;
  position: absolute;
  top: 5px;
  right: 0;
  background-image: linear-gradient(
    to right,
    rgba($bg-color, 0),
    rgba($bg-color, 1) 50%
  );
}
.hide-and-seek:hover .hide-and-seek__cover {
  display: none;
}
.hide-and-seek__found-me {
  display: none;
  position: absolute;
  top: -80px;
  right: -20px;
}
.hide-and-seek:hover .hide-and-seek__found-me {
  display: block;
}
</style>
