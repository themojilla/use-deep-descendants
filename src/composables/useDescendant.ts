import { ref, watchEffect, unref } from 'vue';
import { useDescendantContext } from './useDescendants';
import type { Descendant } from '../types';

export function useRegisterDescendant(args: any) {
  const descendantRef = ref();
  const index = ref(-1);

  const { descendants, register } = useDescendantContext();

  watchEffect(
    () => {
      register({ element: unref(descendantRef), ...args });
    },
    {
      flush: 'post',
    }
  );

  watchEffect(() => {
    index.value = unref(descendants).findIndex((item: Descendant) => {
      return item.element === descendantRef.value;
    });
  });

  return { index, ref: descendantRef };
}
