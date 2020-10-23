<template>
  <b-field>
    <b-input placeholder="Search..." type="search" icon-pack="fas" icon="search" v-model="input"></b-input>
  </b-field>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import {searchService} from "../services/SearchService";
@Component
export default class SearchBar extends Vue {
  input = '';

  @Watch('input') onInputChange(newValue: string) {
    searchService.searchKeywords = newValue;
  }
}
</script>

<style scoped>
</style>