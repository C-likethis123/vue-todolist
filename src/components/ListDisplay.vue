<template>
<div class="list-display">
    <ToDoList v-for="list in filteredList" v-bind:key="list" v-bind:list="list"/>
    <b-modal
      :active.sync="isModalActive.value"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <AddForm v-bind:title="selectedModal.value"></AddForm>
    </b-modal>
</div>

</template>

<script lang="ts">
import  {Component, Vue, Watch} from "vue-property-decorator";

import ToDoList from "@/components/ToDoList.vue";
import AddForm from "@/components/AddForm.vue";
import {searchService, getSearchResults} from "../services/SearchService";
import { isModalActive, selectedModal, lists } from "../services/ToDoList";

@Component({components: {ToDoList, AddForm}})
export default class ListDisplay extends Vue {
    protected searchService = searchService;
    protected getSearchResults = getSearchResults;
    protected isModalActive = isModalActive;
    protected selectedModal = selectedModal;
    protected lists = lists;

    filteredList = this.lists;

    @Watch('searchService.searchKeywords') onSearchChange(newValue: string) {
        this.filteredList = getSearchResults(this.lists);
    }
}
</script>

<style scoped>
.list-display {
    display: flex;
    justify-content: center;
}
</style>