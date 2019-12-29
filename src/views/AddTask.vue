<template>
<div class="ui modal">
  <div class="header">Header</div>
  <div class="content">
    <p></p>
  </div>
  <div class="actions">
    <div class="ui approve button">Approve</div>
    <div class="ui button">Neutral</div>
    <div class="ui cancel button">Cancel</div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import Messages from '@/components/Messages.vue'; // @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

@Component({
  components: {
    NavBar
  },
})
export default class AddTask extends Vue {

}
</script>
