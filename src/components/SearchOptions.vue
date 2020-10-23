<template>
<div class="search-options">
  <SearchBar/>
</div>

</template>

<script lang="ts">
import  {Component, Vue} from "vue-property-decorator";

import SearchBar from '@/components/SearchBar.vue';

@Component({components: {SearchBar}})
export default class SearchOptions extends Vue {

}
</script>

<style scoped>
.search-options {
    display: flex;
    justify-content: center;
    
}

</style>