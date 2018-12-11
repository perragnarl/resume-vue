<template>
    <section>
        <h2>Språk</h2>
        <List inline>
            <ListItem text="Svenska" iconName="check" />
            <ListItem text="Engelska" iconName="check" />
            <ListItem text="Tyska" iconName="check" partial />
        </List>
    </section>
</template>

<script>
import List from "./../parts/list/List.vue";
import ListItem from "./../parts/list/ListItem.vue";
export default {
  name: "Languages",
  components: {
    List,
    ListItem
  }
};
</script>
