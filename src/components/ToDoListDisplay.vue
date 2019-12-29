<template>
  <div class="todo-lists-display">
    <ToDoList v-for="(todolist, index) in todolists" v-bind:todolist="todolist" v-bind:key="index"></ToDoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToDo from "@/components/ToDo.vue";
import ToDoList from "@/components/ToDoList.vue";

export interface IToDoList {
  title: string;
  contents: IToDo[];
}

export interface IToDo {
  task: string;
  isCompleted: boolean;
  tags?: string[]; // to be changed to ITag
}

@Component({ components: { ToDoList } })
export default class ToDoListDisplay extends Vue {
  //   private userName: string = "Chow Jia Ying";

  todosContentsDailies: IToDo[] = [
    {
      task: "Do something",
      isCompleted: false
    },
    {
      task: "Do something else",
      isCompleted: false
    },
    {
      task: "Very long task to test if rendering will stay the same",
      isCompleted: false
    }
  ];

  todosContentsOneOff = [
    {
      task: "Do some homework",
      isCompleted: false
    },
    {
      task: "Do something",
      isCompleted: false
    },
    {
      task: "Buy something",
      isCompleted: false
    }
  ];
  todolists: IToDoList[] = [
    { title: "Dailies", contents: this.todosContentsDailies },
    { title: "One off tasks", contents: this.todosContentsOneOff }
  ];
}
</script>

<style lang="css">
.todo-lists-display {
  display: flex;
  justify-content: center;
}
</style>