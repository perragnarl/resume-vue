<template>
    <section>
        <h2>Utvecklingsmetoder</h2>
        <List inline>
            <ListItem text="Atomic Design" iconName="check" />
            <ListItem text="ITCSS" iconName="check" />
            <ListItem text="BEM" iconName="check" />
            <ListItem text="Test-driven development" iconName="check" />
            <ListItem text="Continuous deployment" iconName="check" />
        </List>
    </section>
</template>

<script>
import List from "./../parts/list/List.vue";
import ListItem from "./../parts/list/ListItem.vue";
export default {
  name: "DevMethods",
  components: {
    List,
    ListItem
  }
};
</script>
