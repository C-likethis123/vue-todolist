<template>
  <div class="todo-lists-display">
    <ToDoList v-for="(todolist, index) in todolists" v-bind:todolist="todolist" v-bind:key="index"></ToDoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToDo from "@/components/ToDo.vue";
import ToDoList from "@/components/ToDoList.vue";

import { todolists } from "../services/ToDoList";

@Component({ components: { ToDoList } })
export default class ToDoListDisplay extends Vue {
  protected todolists = todolists;
}
</script>

<style lang="css">
.todo-lists-display {
  display: flex;
  justify-content: center;
}
</style>