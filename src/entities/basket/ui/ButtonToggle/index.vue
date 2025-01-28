<template>
  <AppButton class="tw-w-full" :size="grid.lg ? '56' : '48'" :design=" count > 0 ? 'primary' : design?design:`secondary-neutral`" @click="toggle">
    <template #right>
      <span class="icon">
        <AppIcon name="plus" fit />
      </span>
    </template>
    {{ $amount(price) }}
  </AppButton>
</template>

<script setup lang="ts">
  import { useAppGrid } from '@/shared/lib/useScreen';
  import { useBasketStore } from '@/shared/store/basket';

  type Design = 'primary' | 'secondary' | 'secondary-neutral' | 'outline' | 'outline-neutral' | 'ghost' | 'ghost-neutral';

  const grid = useAppGrid();

  const props =withDefaults(defineProps<{
    productId: string,
    price: string,
    count: number,
    design?: Design
  }>(),{design:''});

  const basketStore = useBasketStore();

  function toggle() {
    if(props.count > 0) {
      basketStore.reduce(props.productId);
    } else {
      basketStore.append(props.productId);
    }
  }
</script>

<style scoped lang="scss">
  .icon {
    width: 24px;
    height: 24px;
  }
</style>
