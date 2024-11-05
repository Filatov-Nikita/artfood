<template>
  <AppModal v-model="value" x-pos="right" y-pos="top" animation="slide-right">
    <div class="card-wrap">
      <div class="card">
        <ButtonClose v-if="grid.lg" class="card-close-xl" size="40px" padding="0.2em" @click="value = false" />
        <div v-if="program">
          <div class="name-wrap">
            <p class="name">{{ program.name }}</p>
            <p class="cal"><AppPlural :cases="calCases" :total="+program.calories" /></p>
          </div>
          <ContentSlider :item="program" />
        </div>
        <div class="card-actions" v-if="program && grid.lg">
          <div>
            <p class="price tw-mb-4">{{ program.price }}</p>
            <p class="days"><AppPlural :cases="daysCases" :total="+program.days" /></p>
          </div>
          <AppButton class="tw-w-full" size="56">Получить консультацию</AppButton>
        </div>
        <div class="card-actions" v-if="program && !grid.lg">
          <div class="price-wrap">
            <p class="price">{{ program.price }}</p>
            <p class="days"><AppPlural :cases="daysCases" :total="+program.days" /></p>
          </div>
          <div class="actions">
            <AppButton class="tw-w-full" size="48">Получить консультацию</AppButton>
            <ButtonClose class="tw-shrink-0" size="48px" padding="0.25em" @click="value = false" />
          </div>
        </div>
      </div>
      <div v-if="loading" class="loader">
        <AppSpinner />
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import { useRepositories } from '@/shared/repositories';
  import useRequest from '@/shared/lib/useRequest';
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import { computed, watch } from 'vue';
  import { useAppGrid } from '@/shared/lib/useScreen';
  import ContentSlider from './ContentSlider.vue';

  const props = defineProps<{
    programId: string,
  }>();

  const value = defineModel({
    default: false,
  });

  const grid = useAppGrid();

  const api = useRepositories();

  const res = await useRequest(() => api.programs.show(props.programId), {
    immediate: false,
  });

  const { data, loading } = useDataOrAlert(res);

  const program = computed(() => {
    return data.value?.[0] ?? null;
  });

  watch(value, (v) => {
    if(v) {
      res.send();
    }
  }, { immediate: true });

  const calCases: [ string, string, string ] = [ 'калория', 'калории', 'калорий' ];
  const daysCases: [ string, string, string ] = [ 'день', 'дня', 'дней' ];
</script>

<style scoped lang="scss">
  .card-wrap {
    position: relative;
    @apply tw-w-full tw-h-full tw-rounded-1.5xl tw-bg-white;

    @include lg {
      max-width: 464px;
    }

    @include xl {
      max-width: 600px;
    }
  }

  .card {
    overflow: auto;
    @apply tw-rounded-1.5xl tw-p-16 tw-w-full tw-h-full;
    padding-bottom: 142px;

    @include lg {
      @apply tw-p-24;
      padding-bottom: 112px;
    }
  }

  .name-wrap {
    @include lg {
      padding-right: 64px;
    }
  }

  .name {
    @apply tw-text-body-l-bold tw-mb-4;

    @include lg {
      @apply tw-text-heading-3-bold;
    }
  }

  .cal {
    @apply tw-text-body-s-regular tw-text-text01 tw-mb-16;

    @include lg {
      @apply tw-mb-32;
    }
  }

  .text {
    @apply tw-text-body-s-regular tw-mb-24;
  }

  .card-actions {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 24px 16px 16px;
    z-index: 8900;
    @apply tw-bg-white;

    @include lg {
      display: flex;
      align-items: flex-start;
      gap: 24px;
    }
  }

  .actions {
    display: flex;
    gap: 8px;
  }

  .price-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    @apply tw-mb-12;
  }

  .price {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-text-nowrap;
  }

  .days {
    @apply tw-text-body-s-medium tw-text-text01 tw-text-nowrap;
  }

  .card-close-xl {
    position: absolute;
    right: 24px;
    top: 24px;
    z-index: 9100;
  }

  .loader {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9000;
    background: rgba(255, 255, 255, 0.7);
  }
</style>
