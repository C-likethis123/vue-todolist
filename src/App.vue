<template>
  <div id="app" @click="removeTagList($event)">
    <NavBar></NavBar>
    <AddTask></AddTask>
    <SearchDisplay></SearchDisplay>
    <ToDoListDisplay></ToDoListDisplay>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import ToDoListDisplay from "@/components/ToDoListDisplay.vue";
import SearchDisplay from "@/components/SearchDisplay.vue";
import AddTask from "@/components/AddTask.vue";

@Component({ components: { NavBar, ToDoListDisplay, SearchDisplay, AddTask } })
export default class App extends Vue {
  removeTagList(event: Event) {
    const menu = document.body.querySelector(".menu");
    menu.style.display = "none";
    menu.childNodes.forEach((element) => element.style.display = "none");
  }
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
