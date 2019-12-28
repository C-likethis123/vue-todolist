<template>
<div class="todo-list">
    <div class="todo-list-title">
        {{todolist.title}}
    </div>
    <div class="items-container">
        <ToDo v-for="(task, index) in todos" v-bind:key="index" v-bind:task="task"></ToDo>
    </div>

    <button class="add-button">
        Add a To Do
    </button>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import ToDo from '@/components/ToDo.vue';
import IToDoList from '@/components/ToDoListDisplay.vue';

import {searchService, getSearchResults} from '../services/SearchService';

@Component({components: {ToDo}})
export default class ToDoList extends Vue {
    @Prop(IToDoList) readonly todolist! : IToDoList;

    todos: string[] = this.todolist.contents;

    protected searchService = searchService;
    @Watch('searchService', {deep: true}) onSearchChange(searchKeywords: string) {
        this.todos = getSearchResults(this.todolist.contents);
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
    background-color: #7DD386;
    font-weight: bold;
    text-align: center;
    padding: 2%;

}
.items-container {
    background-color: #F4F4F4;
    height: 90%;
    padding: 1em;
}

.add-button {
    width: 100%;
    background-color:	#DF6466;
    text-align: center;
    padding: 2%;
}

</style>