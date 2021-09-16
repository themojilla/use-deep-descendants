<template>
  <div :id="id" ref="ref" role="option">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useRegisterDescendant } from '@/composables/useDescendant';

export default defineComponent({
  name: 'ListItem',

  setup(props) {
    const id = computed(() => {
      return Math.random().toString(36).slice(2);
    });

    const { ref, index } = useRegisterDescendant({ id });

    return { ref, index, id };
  },
});
</script>
