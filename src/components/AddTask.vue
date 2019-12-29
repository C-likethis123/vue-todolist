<template>
  <div class="ui modal center">
    <div class="header">Add a New To Do</div>
    <div class="content">
      <div class="ui form">
        <div class="field">
          <label>To Do</label>
          <input id="addtask" type="text" />
        </div>
      </div>
    </div>
    <div class="actions">
      <div class="ui button" @click="addNewTask">Add Task</div>
      <div class="ui button" @click="closeModal">Cancel</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { addTask, listChosen } from "../services/ToDoList";

@Component
export default class AddTask extends Vue {
  closeModal() {
    const modal = document.body.querySelector(".ui.modal.center");
    const input = document.body.querySelector("#addtask");
    input.value = '';
    modal.classList.remove("active");
  }

  addNewTask() {
    const inputValue = document.body.querySelector("#addtask").value;
    addTask(listChosen.listChosen, inputValue);

    this.closeModal();
  }
}
</script>