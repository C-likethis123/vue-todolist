<template>
  <div class="todo-list-title">
    <div class="title">{{title}}</div>
    <div class="ui secondary pointing menu" >
      <a class="item" @click="toggleActive">Done</a>
      <a class="item active" @click="toggleActive">Not done</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import ToDo from "@/components/ToDo.vue";
import IToDoList from "@/components/ToDoListDisplay.vue";

@Component({})
export default class ToDoTitle extends Vue {
  @Prop(String) readonly title!: String;

  toggleActive(event: Event, isCompleted: boolean) {
    const elementClicked = event.target;
    const elementParent = elementClicked.parentNode;

    for (const childNode of elementParent.children) {
      if (childNode === elementClicked) {
        childNode.classList.add("active");
      } else {
        childNode.classList.remove("active");
      }
    }
  }
}
</script>

<style lang="css">
.todo-list-title {
  background-color: #7dd386;
  font-weight: bold;
  /* box-sizing: border-box; */
  font-size: 2em;
  display: flex;
  justify-content: space-between;
  /* padding: 2%; */
}
</style>