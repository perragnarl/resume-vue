<template>
    <footer class="footer">
        <h2>Kontakt</h2>
        <section>
            <ul class="footer__list">
                <li class="footer__contact pull-left">
                    <svg class="icon__symbol icon__symbol--large">
                        <use xlink:href="img/sprite.svg#mail"></use>
                    </svg>
                    <a href="mailto:hej@perragnarlindfors.se">hej@perragnarlindfors.se</a>
                </li>
                <li class="footer__contact">
                    <svg class="icon__symbol icon__symbol--large">
                        <use xlink:href="img/sprite.svg#linkedin"></use>
                    </svg>
                    <a href="https://www.linkedin.com/in/perragnarj/">LinkedIn</a>
                </li>
                <li class="footer__contact">
                    <svg class="icon__symbol icon__symbol--large">
                        <use xlink:href="img/sprite.svg#github"></use>
                    </svg>
                    <a href="https://github.com/perragnarl">Github</a>
                </li>
            </ul>
            <small class="footer__hosting pull-right">
                <svg class="icon__symbol icon__symbol--large">
                    <use xlink:href="img/sprite.svg#pi"></use>
                </svg>
                Hostad på en Raspberry Pi
            </small>
        </section>
    </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../assets/settings.scss';

    .footer {
    max-width: $page-width;
    margin: 0 auto;
    padding: 0 $l;
    }
    .footer section {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 0 $l 0;
    }
    .footer__list {
        width: 100%;
    }
    @media screen and (min-width: 600px) {
        .footer__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
    }
    .footer__contact {
        margin: 0 $l 0 0;
        display: flex;
        align-items: center;
    }
    .footer .icon__symbol {
        fill: $font-color;
    }
    .footer__contact a {
        margin: 0 0 0 $s;
    }
    .footer__hosting {
        font-size: 0.5rem;
        margin: $xl 0 0;
        display: block;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    @media screen and (min-width: 600px) {
        .footer__hosting {
            margin: $xxl 0 0;
        }
    }
    .footer__hosting .icon__symbol {
        margin: 0 0 $s $m;
        width: 100%;
    }
</style>
