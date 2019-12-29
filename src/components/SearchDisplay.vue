<template>
  <div class="search-display">
    <div class="ui action input">
      <input type="text" v-model="search" placeholder="Search..." />
      <button class="ui icon button">
        <i class="search icon"></i>
      </button>
    </div>

    <div class="ui multiple dropdown" @click="displayTagList($event)" >
      <i class="filter icon"></i>
      <span class="text">Filter Posts</span>
      <div class="menu">
        <div class="ui icon search input">
          <i class="search icon"></i>
          <input type="text" placeholder="Search tags..." />
        </div>
        <div class="divider"></div>
        <div class="divider">
          <div class="header">
            <i class="tags icon"></i>
            Tag Label
          </div>
        </div>
        <div class="divider"></div>

        <div class="scrolling menu">
          <div class="item" data-value="important">
            <div class="ui red empty circular label"></div>Important
          </div>
          <div class="item" data-value="announcement">
            <div class="ui blue empty circular label"></div>Announcement
          </div>
          <div class="item" data-value="cannotfix">
            <div class="ui black empty circular label"></div>Cannot Fix
          </div>
          <div class="item" data-value="news">
            <div class="ui purple empty circular label"></div>News
          </div>
          <div class="item" data-value="enhancement">
            <div class="ui orange empty circular label"></div>Enhancement
          </div>
          <div class="item" data-value="off-topic">
            <div class="ui yellow empty circular label"></div>Off Topic
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { searchService } from "../services/SearchService";

@Component
export default class SearchDisplay extends Vue {
  protected searchService = searchService;
  search = "";

  @Watch("search") onSearchChange(newVal: string) {
    searchService.searchKeywords = newVal;
  }

  displayTagList(event: Event) {
    event.stopPropagation();
    const menu = document.body.querySelector(".menu");
    menu.style.display = "initial";
    menu.childNodes.forEach((element) => element.style.display = "initial");
  }
}
</script>

<style lang="css">
</style>