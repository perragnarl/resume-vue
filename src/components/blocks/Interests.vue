<template>
    <section>
        <h2>Intressen</h2>
        <ul class="list list--inline">
            <li class="list__item has-icon">
                <svg class="icon__symbol icon__symbol--contrast">
                    <use xlink:href="img/sprite.svg#check"></use>
                </svg>
                <p class="list__text">
                    Matlagning
                </p>
            </li>
            <li class="list__item has-icon">
                <svg class="icon__symbol icon__symbol--contrast">
                    <use xlink:href="img/sprite.svg#check"></use>
                </svg>
                <p class="list__text">
                    Styrketräning
                </p>
            </li>
            <li class="list__item has-icon">
                <svg class="icon__symbol icon__symbol--contrast">
                    <use xlink:href="img/sprite.svg#check"></use>
                </svg>
                <p class="list__text hide-and-seek">
                    Kurragömma
                    <span class="hide-and-seek__cover"></span>
                    <span class="hide-and-seek__found-me"><img src="img/linnea.png" alt=""></span>
                </p>
            </li>
            <li class="list__item has-icon">
                <svg class="icon__symbol icon__symbol--contrast">
                    <use xlink:href="img/sprite.svg#check"></use>
                </svg>
                <p class="list__text">
                    E-Sport
                </p>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "Interests"
    }
</script>