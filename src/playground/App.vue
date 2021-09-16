<template>
  <List>
    <ListItem>item 1</ListItem>
    <div class="spacer">
      <ListItem>item 2</ListItem>
    </div>
    <ListItem>item 3</ListItem>
  </List>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import List from '@/playground/List.vue';
import ListItem from '@/playground/ListItem.vue';

export default defineComponent({
  name: 'App',

  components: {
    List,
    ListItem,
  },
});
</script>

<style>
.spacer {
  margin: 0 1rem;
}
</style>
