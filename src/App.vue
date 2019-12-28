<template>
  <div id="app">
    <NavBar></NavBar>
    <SearchDisplay></SearchDisplay>
    <ToDoListDisplay></ToDoListDisplay>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import ToDoListDisplay from "@/components/ToDoListDisplay.vue";
import SearchDisplay from "@/components/SearchDisplay.vue";

@Component({ components: { NavBar, ToDoListDisplay, SearchDisplay } })
export default class App extends Vue {}
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

* {
  font-family: "Open Sans";
}

/* Search Bar */
.search-bar {
  width: 200px;
  height: 1em;
  margin: 0 auto;
  margin-top: 2em;
  display: block;
  border: 1px solid rgb(143, 138, 138);

  padding: 1%;
  padding-left: 40px;
  background-position: center left 16px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23878190' fill-rule='evenodd' d='M15.7 14.3l-4.8-4.8c.7-1 1.1-2.2 1.1-3.5 0-3.3-2.7-6-6-6S0 2.7 0 6s2.7 6 6 6c1.3 0 2.5-.4 3.5-1.1l4.8 4.8c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4zM6 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z'/%3E%3C/svg%3E");
}
</style>
