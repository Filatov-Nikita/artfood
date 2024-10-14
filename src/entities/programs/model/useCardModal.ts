import { ref, watch } from 'vue';
import { useDetailed } from '@/entities/product';
import type { Program } from './useList';

export default function() {
  const activeProgram = ref<Program | null>(null);

  const showedDetailed = ref(false);

  function changeProgram(pr: Program) {
    activeProgram.value = pr;
    showedDetailed.value = true;
  }

  const {
    data: programDetailed,
    load,
  } = useDetailed();

  watch(activeProgram, (pr) => {
    if(pr) load(pr.id);
  });

  return {
    activeProgram,
    showedDetailed,
    programDetailed,
    changeProgram,
  }
}
