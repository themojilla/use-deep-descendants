import { inject, provide, ref } from 'vue';
import type { InjectionKey } from 'vue';
import type { Descendant, DescendantsContext } from '../types';

const DescendantsContextKey: InjectionKey<DescendantsContext> =
  Symbol('Descendants');

export function useDescendantContext(): DescendantsContext {
  const context = inject(DescendantsContextKey);

  if (!context) {
    throw new Error(
      'useRegisterDescendant must be used within a parent with the usage of useDeepDescendants'
    );
  }

  return context;
}

export function useDeepDescendants() {
  const descendants = ref<Descendant[]>([]);

  function register(descendant: Descendant): void {
    descendants.value.push(descendant);
  }

  provide(DescendantsContextKey, { descendants, register });

  return { descendants };
}
