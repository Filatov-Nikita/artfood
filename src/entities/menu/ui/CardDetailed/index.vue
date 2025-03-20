<template>
  <AppModal v-model="value" x-pos="right" y-pos="top" animation="slide-right">
    <div class="card-wrap">
      <ButtonClose v-if="grid.lg" class="card-close-xl" size="40px" padding="0.2em" @click="value = false" />
      <div class="card" ref="cardRef" v-if="product">
        <div class="photos">
          <PhotoGallery class="gallery" :images="product.additional_imgs" :tag="product.tag" />
        </div>
        <div class="card-text">
          <p class="title" v-html="product.name"></p>
          <p class="weight">{{ product.ves }} г</p>
          <ContentSlider
            class="card-content"
            :description="product.text"
            :energy="{
              belki: product.belki,
              giri: product.giri,
              uglevodi: product.uglevodi,
              cal: product.cal
            }"
          />
        </div>
        <RecommendList
          class="card-recommend"
          title="Попробуйте другие блюда"
          :products="product.reccomendations"
          @change:product="changeProduct"
        />
      </div>
      <div class="cart-btn-lg" v-if="product && grid.lg">
        <ButtonToggle
          :price="product.price"
          :count="count"
          :productId="product.id"
          design="primary"
        />

      </div>
      <div class="card-actions" v-if="product && !grid.lg">
        <ButtonToggle
          :price="product.price"
          :count="count"
          :productId="product.id"
        />
        <ButtonClose class="tw-shrink-0" size="48px" padding="0.25em" @click="value = false" />
      </div>
      <div v-if="loading" class="loader">
        <AppSpinner />
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import ContentSlider from './ContentSlider.vue';
  import { PhotoGallery } from '@/shared/ui';
  import RecommendList from '../RecommendList/index.vue';
  import { useRepositories } from '@/shared/repositories';
  import useRequest from '@/shared/lib/useRequest';
  import useDataOrAlert from '@/shared/lib/useDataOrAlert';
  import { computed, watch, toRef, ref } from 'vue';
  import { useAppGrid } from '@/shared/lib/useScreen';
  import { ButtonToggle, useBasketItem } from '@/entities/basket';

  const props = defineProps<{
    productId: string,
  }>();

  const value = defineModel({
    default: false,
  });

  const emit = defineEmits<{
    (event: 'change:product', id: string): void,
  }>();

  const grid = useAppGrid();

  const api = useRepositories();

  const res = await useRequest(() => api.menu.show(props.productId), {
    immediate: false,
    watch: [ () => props.productId ],
  });

  const { data, loading } = useDataOrAlert(res);

  const product = computed(() => {
    return data.value?.[0] ?? null;
  });

  const { count } = useBasketItem(toRef(props, 'productId'));

  const cardRef = ref<HTMLElement | null>(null);

  function changeProduct(id: string) {
    emit('change:product', id);
    cardRef.value?.scrollTo({ behavior: 'smooth', top: 0 });
  }

  watch(value, (v) => {
    if(v) {
      res.send();
    }
  }, { immediate: true });
</script>

<style scoped lang="scss">
  .card-wrap {
    position: relative;
    @apply tw-w-full tw-h-full tw-rounded-1.5xl tw-bg-white;

    @include lg {
      max-width: 860px;
    }

    @include xl {
      max-width: 1180px;
    }
  }

  .card {
    overflow: auto;
    @apply tw-rounded-1.5xl tw-p-16 tw-w-full tw-h-full;
    padding-bottom: 88px;

    @include lg {
      padding: 24px;
      display: grid;
      row-gap: 32px;
      column-gap: 20px;
      grid-template-rows: min-content min-content;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      grid-template-areas:
            "a b"
            "c b";
    }
  }

  .cart-btn-lg {
    position: absolute;
    z-index: 900;
    padding-left: 10px;
    padding-right: 24px;
    right: 0;
    bottom: 24px;
    width: 50%;
  }

  .card-close-xl {
    position: absolute;
    right: 24px;
    top: 24px;
    z-index: 900;
  }

  .card-text {
    @include lg {
      grid-area: b;
    }
  }

  .title {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-4;

    @include lg {
      padding-right: 64px;
    }

    @include xl {
      @apply tw-text-heading-3-bold;
    }
  }

  .weight {
    @apply tw-text-text02 tw-text-body-s-regular tw-mb-16;

    @include lg {
      @apply tw-mb-24;
    }

    @include xl {
      @apply tw-mb-32;
    }
  }

  .photos {
    @apply tw-mb-16;

    @include lg {
      grid-area: a;
      @apply tw-mb-0;
    }
  }

  .card-recommend {
    @include lg {
      grid-area: c;
    }
  }

  .card-content {
    @apply tw-mb-24;
  }

  .card-actions {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 24px 16px 16px;
    z-index: 9000;
    display: flex;
    gap: 8px;
    @apply tw-bg-white;
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

  .gallery {
    height: 220px;

    @include lg {
      height: 395px;
    }

    @include xl {
      height: 555px;
    }
  }
</style>
