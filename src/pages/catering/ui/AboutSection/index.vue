<template>
  <section class="about">
    <div class="content">
      <p class="text">Соберите банкетное и фуршетное меню самостоятельно или обратитесь за помощью к нашему специалисту</p>
      <div class="actions">
        <AppButton class="action" size="48" leftIcon="bow-flood-regular"  @click="banquetStore.showedModal = true">Банкетное меню</AppButton>
        <AppButton class="action hall-btn" size="48" href="https://docs.google.com/spreadsheets/d/1o29CDlOjgajxbPowKe5M-cpAYkfqirgYH2qQrmKJFiE/edit#gid=1108339809" target="_blank">
          Фуршетное меню
        </AppButton>
        <AppButton class="tw-w-full" size="48" design="secondary-neutral" @click="callbackStore.show({ title: 'Получить консультацию' })">
          Получить консультацию
        </AppButton>
        <AppButton v-if="!grid.lg" class="action video-btn" size="48" leftIcon="play-circle-fill" @click="showedVideo = true">
          Видео
        </AppButton>
      </div>
    </div>
    <div class="about__img">
      <img width="941" height="498" src="./image.png" loading="lazy">
    </div>
    <button class="play-btn" v-if="grid.lg" @click="showedVideo = true">
      <AppIcon name="play-circle-fill" colorClass="tw-fill-white" fit />
    </button>
    <ModalVideo v-model="showedVideo" />
  </section>
</template>

<script setup lang="ts">
  import ModalVideo from './ModalVideo.vue';
  import { useAppGrid } from '@/shared/lib/useScreen';
  import { useBanquetStore } from '@/shared/store/banquet';
  import { useCallbackStore } from '@/shared/store/callback';
  import { ref } from 'vue';

  const callbackStore = useCallbackStore();

  const banquetStore = useBanquetStore();

  const grid = useAppGrid();

  const showedVideo = ref(false);
</script>

<style scoped lang="scss">
  .about {
    @apply tw-bg-neutral tw-p-24 tw-pb-16 tw-rounded-1.5xl tw-relative;

    @include lg {
      display: grid;

      grid-template-columns: 1fr 400px;
      column-gap: 32px;
      // align-items: center;
      @apply tw-p-32;
    }
    @include xl {
      grid-template-columns: 500px 1fr;
    }
    &__img {
      @include lg {
        position: relative;
      }
      img {
       @include lg {
          position: absolute;
          top: 0;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  .text {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-32;

    @include lg {
      @apply tw-text-heading-3-bold;
    }
  }

  .content {
    @apply tw-rounded-1.5xl tw-bg-border01 tw-p-24 tw-mb-16 lg:tw-mb-0;
  }

  .video-btn {
    background-color: theme('colors.red') !important;

    &:hover {
      opacity: 0.8;
    }
  }

  .hall-btn {
    background-color: theme('colors.orange') !important;

    &:hover {
      opacity: 0.8;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .action {
    width: 100%;

    @include lg {
      width: calc(50% - 6px);
    }
  }

  .play-btn {
    position: absolute;
    top: 32px;
    right: 32px;
    z-index: 100;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    @apply tw-bg-red tw-p-12;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
