<template>
    <header class="header">
        <div class="header__avatar">
            <img src="../../assets/img/me.png" alt="Bild på Per-Ragnar Lindfors" class="header__portrait">
        </div>
        <div class="header__contact">
            <p class="header__contact-block">hej@perragnarlindfors.se</p>
            <p class="header__contact-block">070 710 8070</p>
        </div>
    </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../assets/settings.scss';

    .header {
        margin: 0 auto $xl auto;
        max-width: $page-width;
        padding: 0 $l;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media screen and (min-width: 500px) {
        .header {
            justify-content: space-between;
            margin: 0 auto $xxl auto;
        }
    }
    .header__contact {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: $m 0 0;
    }
    @media screen and (min-width: 500px) {
        .header__contact {
            width: auto;
            align-items: flex-end;
            margin: 0;
        }
    }
    .header__contact-block {
        background: $contrast;
        margin: 0 0 $m 0;
        padding: $m;
        color: white;
        line-height: 1;
        font-size: 0.8rem;
    }
</style>
