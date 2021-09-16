<template>
  <div>
    <slot />
  </div>

  <pre>{{ descendants }}</pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useDeepDescendants } from '@/composables/useDescendants';

export default defineComponent({
  name: 'List',

  setup() {
    const { descendants } = useDeepDescendants();

    return { descendants };
  },
});
</script>
