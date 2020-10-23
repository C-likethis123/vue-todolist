<template>
  <div id="app">
    <NavBar/>
    <SearchOptions/>
    <ListDisplay />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import SearchOptions from "@/components/SearchOptions.vue";
import ListDisplay from "@/components/ListDisplay.vue";

@Component({ components: { NavBar, SearchOptions, ListDisplay} })
export default class App extends Vue {
}
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
#app {
  height: 100%;
}

* {
  font-family: "Open Sans";
}
</style>
