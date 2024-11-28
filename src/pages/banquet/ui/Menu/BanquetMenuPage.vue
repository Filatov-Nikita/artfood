<template>
  <div :class="{ 'menu--pb': !grid.lg }">
    <SectionsTabs
      v-if="activeSection"
      class="sections-tabs"
      :activeSection="activeSection"
      :sections="sections"
      @change:section="activeSection = $event"
    />
    <div class="wrap">
      <SectionItem v-if="activeSection" class="items" :activeSection="activeSection" />
      <MiniBasket class="sum" v-if="grid.lg">
        <template #actions>
          <AppButton class="tw-w-full tw-mt-16" size="48" :disabled="!banquetStore.hasItems" @click="$router.push({ name: 'banquet.check' })">
            Проверить заказ
          </AppButton>
        </template>
      </MiniBasket>
    </div>
    <MiniBasketFixed v-if="!grid.lg" @change:height="miniBasketHeight = $event">
      <template #actions>
        <AppButton class="tw-w-full tw-mt-16" size="48" :disabled="!banquetStore.hasItems" @click="$router.push({ name: 'banquet.check' })">
          Далее
        </AppButton>
      </template>
    </MiniBasketFixed>
  </div>
</template>

<script setup lang="ts">
  import useDataOrFail from '@/shared/lib/useDataOrFail';
  import useRequest from '@/shared/lib/useRequest';
  import { useRepositories } from '@/shared/repositories';
  import type { Section } from '@/shared/repositories/banquet';
  import { ref, inject } from 'vue';
  import { setTitleKey } from '@/layouts/Banquet/model/symbols';
  import { useBanquetStore } from '@/shared/store/banquet';
  import { SectionItem, SectionsTabs, MiniBasketFixed, MiniBasket } from '@/entities/banquet';
  import { useAppGrid } from '@/shared/lib/useScreen';

  const setTitle = inject(setTitleKey);
  setTitle && setTitle('Сборка банкетного меню');

  const grid = useAppGrid();

  const api = useRepositories();

  const banquetStore = useBanquetStore();

  const sectionsRes = await useRequest(api.banquet.sectionsAll);

  const sections = useDataOrFail(sectionsRes);

  const activeSection = ref<Section | null>(sections.value[0] ?? null);

  const miniBasketHeight = ref('0px');
</script>

<style scoped lang="scss">
  .sections-tabs {
    @apply tw-mb-16;

    @include lg {
      @apply tw-mb-40;
    }

    @include xl {
      @apply tw-mb-64;
    }
  }

  .menu--pb {
    padding-bottom: v-bind(miniBasketHeight);
  }

  .wrap {
    @include lg {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      column-gap: 40px;
    }
  }

  .items {
    @include lg {
      width: calc(100% - 296px - 40px);
    }
  }

  .sum {
    @include lg {
      width: 100%;
      max-width: 296px;
    }
  }
</style>
