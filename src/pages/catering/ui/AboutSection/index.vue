<template>
  <section class="about">
    <div class="content">
      <p class="text">Соберите банкетное и фуршетное меню самостоятельно или обратитесь за помощью к нашему специалисту</p>
      <div class="actions">
        <AppButton class="action" size="48" leftIcon="bow-flood-regular" :to="{ name: 'menu.section.index', params: { section: 'sety' } }">Банкетное меню</AppButton>
        <AppButton class="action hall-btn" size="48" @click="showCallback">Фуршетное меню</AppButton>
        <!-- <AppButton class="callback" size="48" @click="showCallback">Получить консультацию</AppButton> -->
        <AppButton v-if="!grid.lg" class="action video-btn" size="48" leftIcon="play-circle-fill" @click="showedVideo = true">
          Видео
        </AppButton>
      </div>
    </div>
    <div>
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
  import { ref } from 'vue';
  import { useCallbackStore } from '@/shared/store/callback';
  const grid = useAppGrid();

const showedVideo = ref(false);
const callbackStore = useCallbackStore();
function showCallback() {
  
  
  callbackStore.showOther({
    link: 'http://artfood.yes-idea.ru/furshet.pdf',
    link_title:"Скачать фуршетное меню",
    title: `Получить консультацию`,
    titleBtn: "Получить консультацию"
    });
  }
</script>

<style scoped lang="scss">
  .about {
    @apply tw-bg-neutral tw-p-24 tw-pb-16 tw-rounded-1.5xl tw-relative;

    @include lg {
      display: grid;
      grid-template-columns: 500px 1fr;
      column-gap: 32px;
      align-items: center;
      @apply tw-p-32;
    }
  }

  .text {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-32;

    @include lg {
      @apply tw-text-heading-3-bold;
    }
  }

  .content {
    @apply tw-rounded-1.5xl tw-bg-border01 tw-p-24 tw-mb-16;
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

    @include lg {
     flex-wrap: nowrap;
    }
  }

  .action {
    width: 100%;
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
