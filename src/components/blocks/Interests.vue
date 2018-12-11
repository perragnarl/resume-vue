<template>
    <section>
        <h2>Intressen</h2>
        <List inline>
            <ListItem text="Matlagning" iconName="check" />
            <ListItem text="Styrketräning" iconName="check" />
            <ListItem text="Kurragömma" iconName="check" partial easteregg />
            <ListItem text="E-Sport" iconName="check" partial />
        </List>
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
import List from "./../parts/list/List.vue";
import ListItem from "./../parts/list/ListItem.vue";
export default {
  name: "Interests",
  components: {
    List,
    ListItem
  }
};
</script>
