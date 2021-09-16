import type { Ref } from 'vue';

export type Descendant = {
  id?: string;
  element?: HTMLElement;
};

export type DescendantsContext = {
  descendants: Ref<Descendant[]>;
  register({ element: HTMLElement }): void;
};
