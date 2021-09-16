import type { Ref } from 'vue';

type Descendant = {
  id?: string;
  element?: HTMLElement;
};

type DescendantsContext = {
  descendants: Ref<Descendant[]>;
  register({ element: HTMLElement }): void;
};
