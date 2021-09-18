# useDeepDescendants

[![npm version](https://badge.fury.io/js/use-deep-descendants.svg)](https://badge.fury.io/js/use-deep-descendants)

> Vue 3 composition utilities to programmatically keep track of descendant components

## Motivation

To achieve better flexibility in terms of composition for creating compound components like `DropDown`, `Listbox`, `Tab` and so forth, there is a common scenario: defining descendants in a non-predictable way as follows:

```vue
<List>
  <ListItem /> // index 0
  <ListItem /> // index 1
  <div class="inner">
    <div class="inner">
      <ListItem /> // index 2
    </div>
    <ListItem /> // index 3
  </div>
</List>
```

Defining compound components unlock the power of composition. This means that the descendant could be shown in any depth of the component tree. So we need a deterministic way to track the descendants properly.

## Installation

> `yarn add use-deep-descendants`

## Usage

The `use-deep-descendants` exposes two 2 different composition utilities. `useDeepDescendants` and `useRegisterDescendant`. For a complete working example, check out the playground.

### useRegisterDescendant

the `useRegisterDescendant` must be used in descendant component as follow:

```vue
<template>
  <div :id="id" ref="ref" role="option">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import { useRegisterDescendant } from 'use-deep-descendants';

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
```

This utility itself returns a ref and the index. The "index" covers the most certain cases. But additionally, for better accessibility support in some scenarios, you could pass any data to the utility, this data could be accessed in the parent component.

### useDeepDescendants

the `useDeepDescendants` must be used in the parent component as follow:

```vue
<template>
  <div>
    <slot />
  </div>

  <pre>{{ descendants }}</pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useDeepDescendants } from 'use-deep-descendants';

export default defineComponent({
  name: 'List',

  setup() {
    const { descendants } = useDeepDescendants();

    return { descendants };
  },
});
</script>
```

This utility itself returns the registered descendants.
