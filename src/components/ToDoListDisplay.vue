<template>
<div class="todo-lists-display">
    <ToDoList v-for="(todolist, index) in todolists" v-bind:todolist="todolist" v-bind:key="index"></ToDoList>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToDo from '@/components/ToDo.vue';
import ToDoList from '@/components/ToDoList.vue';

export interface IToDoList {
    title: string, 
    contents: string[],
}

@Component({components: {ToDoList}})
export default class ToDoListDisplay extends Vue {
//   private userName: string = "Chow Jia Ying";
    todolists: IToDoList[] = 
    [{title: 'Dailies', 
    contents: ['Do something', 'Do something else', 'Very long task dkajfajkjkdfjadjawfilkj'] 
    }, {title: 'One off tasks',contents: ['Do some homework', 'Do something', 'Buy something']
    }];
}

</script>

<style lang="css">
.todo-lists-display {
    display: flex;
    justify-content: center;
}
</style>