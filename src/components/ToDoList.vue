<template>
  <div class="todo-list">
    <div class="todo-list-title">{{list.title}}</div>
    <div class="items-container">
      <Item v-for="item in contents" v-bind:key="item" v-bind:item="item" />
    </div>
    <button class="add-button" @click="selectModal">Add a To Do</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

import Item from "@/components/Item.vue";

import { IList, IToDo, isModalActive, selectedModal, isEditable, formProps } from "../services/ToDoList";

@Component({ components: { Item } })
export default class ToDoList extends Vue {
  @Prop() readonly list!: IList;
  protected isModalActive = isModalActive;
  protected formProps = formProps;

  contents: IToDo[] = this.list.contents;

  selectModal() {
      isModalActive.value = true;
      selectedModal.value = this.list.title;
      isEditable.value = false;
      
      formProps.id = -1;
      formProps.todo = '',
      formProps.description = '',
      formProps.title = this.list.title;
  }
}
</script>

<style scoped>
.todo-list {
  width: 40%;
  height: 70%;
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