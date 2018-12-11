<template>
    <section>
        <h2>Plattform</h2>
        <List inline>
            <ListItem text="Linux" iconName="linux" boxedIcon />
            <ListItem text="Windows" iconName="windows" boxedIcon />
        </List>
    </section>
</template>

<script>
import List from "./../parts/list/List.vue";
import ListItem from "./../parts/list/ListItem.vue";
export default {
  name: "Platform",
  components: {
    List,
    ListItem
  }
};
</script>
