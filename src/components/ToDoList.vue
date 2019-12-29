<template>
  <div class="todo-list">
    <ToDoTitle v-bind:title="todolist.title" />
    <div class="items-container">
      <ToDo v-for="(task, index) in todos" v-bind:key="index" v-bind:task="task"></ToDo>
    </div>

    <button class="add-button" @click="displayAddTask">Add a To Do</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import ToDo from "@/components/ToDo.vue";
import ToDoTitle from "@/components/ToDoTitle.vue";

import { searchService, getSearchResults } from "../services/SearchService";
import { IToDoList, IToDo, listChosen } from "../services/ToDoList";

@Component({ components: { ToDo, ToDoTitle } })
export default class ToDoList extends Vue {
  @Prop() readonly todolist!: IToDoList;
  @Prop(Boolean) readonly isCompleted!: boolean;

  todos: IToDo[] = this.todolist.contents;

  protected searchService = searchService;
  @Watch("searchService", { deep: true }) onSearchChange(
    searchKeywords: string
  ) {
    this.todos = getSearchResults(this.todolist.contents);
  }

  displayAddTask() {
    const addTask = document.body.querySelector(".ui.modal");
    addTask.classList.add("active");
    listChosen.listChosen = this.todolist.title;
    console.log("add task: ", this.todolist.title);
  }
}
</script>

<style lang="css">
.todo-list {
  width: 40%;
  min-height: 70%;
  padding: 3%;
}

.todo-list-title {
  background-color: #7dd386;
  font-weight: bold;
  text-align: center;
  padding: 2%;
}
.items-container {
  background-color: #f4f4f4;
  height: 90%;
  padding: 1em;
}

.add-button {
  width: 100%;
  background-color: #df6466;
  text-align: center;
  padding: 2%;
}
</style>