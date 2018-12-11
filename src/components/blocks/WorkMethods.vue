<template>
    <section>
        <h2>Arbetsmetoder</h2>
        <List inline>
            <ListItem text="Scrum" iconName="check" />
            <ListItem text="Kanban" iconName="check" />
        </List>
    </section>
</template>

<script>
import List from "./../parts/list/List.vue";
import ListItem from "./../parts/list/ListItem.vue";
export default {
  name: "WorkMethods",
  components: {
    List,
    ListItem
  }
};
</script>
