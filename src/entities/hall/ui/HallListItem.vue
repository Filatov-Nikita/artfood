<template>
  <article class="item">
    <div class="cols-wrap">
      <div class="info-col">
        <div class="price-wrap">
          <Badge class="price" design="primary" color="yellow">{{ hall.price }}</Badge>
          <h2 class="name">{{ hall.name }}</h2>
        </div>
        <p class="address">{{ hall.address }}</p>
        <AppButton class="callback" size="48" @click="showCallback">Получить консультацию</AppButton>
      </div>
      <div class="text-col">
        <div class="badges">
          <Badge leftIcon="car-profile-bold" design="primary" color="green">
            {{ hall.parking }}
          </Badge>
          <Badge leftIcon="fork-knife-bold" design="primary" color="green">
            {{ hall.kitchen }}
          </Badge>
          <Badge leftIcon="users-three-bold" design="primary" color="green">
            {{ hall.persons }}
          </Badge>
        </div>
        <p class="text" v-html="hall.text"></p>
      </div>
    </div>
    <PhotoGallery class="slider" :images="hall.img" @changed:photo="changePhoto($event)" />
    <ModalGallery v-model="showedGallery" :images="hall.img" :activeSlide="activePhoto" />
  </article>
</template>

<script setup lang="ts">
  import type { Hall } from '@/shared/repositories/halls';
  import { useCallbackStore } from '@/shared/store/callback';
  import { Badge } from '@/shared/ui';
  import PhotoGallery from './PhotoGallery.vue';
  import ModalGallery from '@/shared/ui/Modal/Gallery.vue';
  import { ref } from 'vue';

  const props = defineProps<{
    hall: Hall,
  }>();

  const callbackStore = useCallbackStore();

  const showedGallery = ref(false);
  const activePhoto = ref(0);

  function showCallback() {
    callbackStore.show({
      title: `Получить консультацию по "${props.hall.name}"`,
    });
  }

  function changePhoto(index: number) {
    activePhoto.value = index;
    showedGallery.value = true;
  }
</script>

<style scoped lang="scss">
  .item {
    @apply tw-py-32;

    @include lg {
      @apply tw-py-48;
    }

    & + & {
      @apply tw-border-t tw-border-solid tw-border-border01;
    }
  }

  .cols-wrap {
    @include lg {
      display: grid;
      grid-template-columns: 478px minmax(0, 1fr);
      column-gap: 20px;
    }

    @include xl {
      grid-template-columns: 635px minmax(0, 1fr);
    }
  }

  .callback {
    @apply tw-w-full;

    @include lg {
      @apply tw-w-auto;
    }
  }

  .name {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-pr-96 tw-mt-4;

    @include lg {
      @apply tw-mt-0 tw-pr-0 -tw-order-1;
    }

    @include xl {
      @apply tw-text-heading-3-bold;
    }
  }

  .address {
    @apply tw-text-body-s-medium tw-text-text01 tw-mb-16;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    @apply tw-mt-16;

    @include lg {
      gap: 12px;
      @apply tw-mt-0;
    }
  }

  .text {
    @apply tw-text-body-s-regular tw-mt-16;

    @include lg {
      @apply tw-mt-24;
    }
  }

  .price {
    width: max-content;
    margin-left: auto;
    transform: rotate(-3deg);
    display: block !important;

    @include lg {
      width: auto;
      margin-left: 0;
    }
  }

  .price-wrap {
    max-width: 360px;
    @apply tw-mb-8;

    @include lg {
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      @apply tw-mb-12;
    }
  }

  .slider {
    width: 100%;
    height: 167px;
    @apply tw-mt-16;

    @include lg {
      height: 221px;
      @apply tw-mt-32;
    }

    @include xl {
      height: 320px;
    }
  }
</style>
