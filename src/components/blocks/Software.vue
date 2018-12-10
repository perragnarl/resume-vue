<template>
    <section>
        <h2>Mjukvara</h2>
        <List inline>
            <ListItem text="HTML" iconName="html" boxedIcon />
            <ListItem text="CSS" iconName="css" boxedIcon />
            <ListItem text="JavaScript" iconName="js" boxedIcon />
            <ListItem text="Git" iconName="git" boxedIcon />
            <ListItem text="PHP" iconName="php" boxedIcon />
            <ListItem text="Drupal 7 & 8" iconName="drupal" boxedIcon />
            <ListItem text="Oracle DB" iconName="db" boxedIcon />
            <ListItem text="MySQL" iconName="db" boxedIcon />
            <ListItem text="Figma" iconName="figma" boxedIcon />
            <ListItem text="Docker" iconName="check" partial />
            <ListItem text="Grunt" iconName="check" />
            <ListItem text="Sass" iconName="check" />
            <ListItem text="Wordpress" iconName="check" />
            <ListItem text=".NET" iconName="check" partial />
            <ListItem text="Vue" iconName="check" />
            <ListItem text="Jenkins" iconName="check" partial />
            <ListItem text="SPSS" iconName="check" />
            <ListItem text="Kibana" iconName="check" partial />
            <ListItem text="PLSQL" iconName="check" />
            <ListItem text="AngualarJS" iconName="check" />
            <ListItem text="Java" iconName="check" partial />
            <ListItem text="IBM Websphere Portal" iconName="check" />
            <ListItem text="Photoshop" iconName="check" />
        </List>
        <button class="button button--center button--ghost">Visa allt</button>
        <small>* Underhåll snarare än utveckling.</small>
    </section>
</template>

<script>
    import List from './../parts/list/List.vue'
    import ListItem from './../parts/list/ListItem.vue'
    export default {
        name: "Software",
        components: {
            List,
            ListItem
        }
    }
</script>

<style scoped lang="scss">
</style>