<template>
    <section>
        <h2>Plattform</h2>
        <ul class="list list--inline">
            <li class="list__item has-icon">
                <div class="icon">
                    <svg class="icon__symbol">
                        <use xlink:href="img/sprite.svg#linux"></use>
                    </svg>
                </div>
                <p class="list__text">Linux</p>
            </li>
            <li class="list__item has-icon">
                <div class="icon">
                    <svg class="icon__symbol">
                        <use xlink:href="img/sprite.svg#windows"></use>
                    </svg>
                </div>
                <p class="list__text">Windows</p>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "Platform"
    }
</script>