<template>
  <form action>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">{{action + ' a To Do'}}</p>
      </header>
      <section class="modal-card-body">
        <b-field label="To Do">
          <b-input type="text" v-model="todo" placeholder="To Do" required></b-input>
        </b-field>

        <b-field label="Description">
          <b-input type="text" v-model="description" placeholder="Description of To Do"></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="isModalActive.value = false">Close</button>
        <button class="button is-primary" type="button" @click="performAction">{{action + ' To Do'}}</button>
      </footer>
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

import {isModalActive, isEditable, formProps, addItem, editItem, selectedModal} from "../services/ToDoList";
@Component
export default class AddForm extends Vue {
    protected isModalActive = isModalActive;
    protected formProps = formProps;
    protected addItem = addItem;
    protected editItem = editItem;
    protected isEditable = isEditable;
    
    title = this.formProps.title;
    todo = this.formProps.todo;
    description = this.formProps.description;
    action = isEditable.value ? 'Edit' : 'Add';

    performAction() {
        isModalActive.value = false;

        if (isEditable.value) {
            this.editItem(this.title, {
                id: this.formProps.id,
                task: this.todo,
                isCompleted: false,
                isDailies: this.title === 'Dailies',
            });
        } else {
            this.addItem(this.title, {
            id: undefined,
            task: this.todo,
            isCompleted: false,
            isDailies: this.title === 'Dailies',
            });
        }
    }
}
</script>
