<template>
  <div class="home">
    <Messages/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Messages from '@/components/Messages.vue'; // @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

@Component({
  components: {
    Messages,
  },
})
export default class Home extends Vue {}
</script>
