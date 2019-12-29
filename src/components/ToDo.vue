<template>
      <div class="item">
        {{task.task}}
      </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {IToDo} from "../services/ToDoList";

@Component
export default class ToDo extends Vue {
    @Prop(IToDo) readonly task!: IToDo;
}
</script>

<style lang="css">
.item {
    border-radius: 2px;
    height: fit-content;
    display: flex;
    padding: 2%;
    margin-bottom: 1em;

    font-family: 'Open Sans';
    background-color: white;

    word-break: break-all;
    overflow-wrap: break-word;
}

.item::before {
    content: '';
    max-height: 10px;
    min-width: 10px;
    position: static;
    box-shadow: 0 0 1px grey;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
}

.item:hover:before {
    background-size: 10px;
    background-repeat: no-repeat;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Check_mark_9x9.svg/768px-Check_mark_9x9.svg.png);
}
</style>