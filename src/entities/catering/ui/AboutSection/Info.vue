<template>
  <section class="info">
    <div class="body">
      <div class="title-wrap">
        <Badge class="price" color="yellow" design="primary">от 2 000 ₽ / персона</Badge>
        <h2>Кейтеринг</h2>
      </div>
      <p class="subtitle">Выездной ресторан на вашем грандиозном мероприятии</p>
      <div class="badges">
        <Badge left-icon="fish-simple-bold" color="yellow" design="primary">изысканное меню</Badge>
        <Badge left-icon="fork-knife-bold" color="yellow" design="primary">безупречная сервировка</Badge>
        <Badge left-icon="call-bell-bold" color="yellow" design="primary">обслуживание</Badge>
      </div>
      <p class="text">Соберите меню для будущего банкета самостоятельно или обратитесь за помощью к нашему специалисту</p>
      <div class="img-wrap" v-if="!grid.lg">
        <img width="896" height="683" src="./image.png" loading="lazy" />
      </div>
      <div class="actions">
        <AppButton class="action" size="48" design="primary" left-icon="bow-flood-regular" @click="banquetStore.showedModal = true">
          Собрать меню
        </AppButton>
        <AppButton class="action" size="48" design="secondary" to="#">Банкетные залы</AppButton>
      </div>
      <div class="extra-actions2" v-if="grid.lg">
        <AppButton class="info-btn1" size="48" design="secondary" left-icon="info-regular" @click="banquetStore.showedModal = true"></AppButton>
        <AppButton class="video-btn2" size="48" design="primary" left-icon="play-circle-fill" @click="showedVideo = true"></AppButton>
      </div>
      <div class="extra-actions" v-if="!grid.lg">
        <AppButton class="video-btn1" size="48" design="primary" left-icon="play-circle-fill" @click="showedVideo = true">
          Видео
        </AppButton>
        <AppButton class="info-btn1" size="48" design="secondary" left-icon="info-regular" @click="banquetStore.showedModal = true"></AppButton>
      </div>
    </div>
    <div class="img-wrap" v-if="grid.lg">
      <img width="896" height="683" src="./image.png" loading="lazy" />
    </div>
    <AppModal v-model="showedVideo">
      <template #after>
        <ButtonClose class="modal-btn-close" size="40px" padding="0.2em" @click="showedVideo = false" />
      </template>
      <div class="card-video">
        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/cUrvIeJMKXI?si=cGyCqBEckGeP9121" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </AppModal>
  </section>
</template>

<script setup lang="ts">
  import { Badge } from '@/shared/ui';
  import { ref } from 'vue';
  import { useBanquetStore } from '@/shared/store/banquet';
  import { useAppGrid } from '@/shared/lib/useScreen';

  const banquetStore = useBanquetStore();
  const showedVideo = ref(false);

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .info {
    @apply tw-p-24 tw-bg-neutral tw-rounded-1.5xl tw-text-body-m-medium tw-relative;

    @include lg {
      display: grid;
      grid-template-columns: 400px 1fr;
      grid-template-areas:
        'body img'
        'body img'
      ;
      column-gap: 50px;
      padding: 32px;
    }

    @include xl {
      grid-template-columns: 400px 500px;
    }
  }

  .title-wrap {
    position: relative;
    @apply tw-mb-12;
  }

  .subtitle {
    @apply tw-mb-16;

    @include lg {
      max-width: 280px;
      @apply tw-mb-24;
    }

    @include xl {
      @apply tw-mb-32;
    }
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    @apply tw-mb-16;

    @include lg {
      @apply tw-mb-24;
    }

    @include xl {
      max-width: 220px;
      @apply tw-mb-32;
    }
  }

  .text {
    @apply tw-mb-16;

    @include lg {
      max-width: 350px;
      @apply tw-mb-32;
    }

    @include xl {
      @apply tw-mb-0;
    }
  }

  .img-wrap {
    @apply tw-mb-16;

    @include lg {
      padding-top: 70px;
      grid-area: img;
    }

    @include xl {
      padding-top: 0px;
    }
  }

  .body {
    @include lg {
      grid-area: body;
    }
  }

  .action {
    width: 100%;

    & + & {
      @apply tw-mt-12;
    }
  }

  .actions {
    @include lg {
      width: 100%;
      max-width: 192px;
    }

    @include xl {
      position: absolute;
      right: 32px;
      bottom: 48px;
    }
  }

  .extra-actions {
    margin-top: 12px;
    display: flex;
    gap: 12px;
  }

  .extra-actions2 {
    position: absolute;
    top: 32px;
    right: 32px;
    display: flex;
    gap: 12px;
  }

  .video-btn2.size-48 {
    padding-left: 12px;
    padding-right: 12px;
  }

  .video-btn1, .video-btn2 {
    background-color: theme('colors.red');

    &:hover {
      background-color: theme('colors.red');
      opacity: 0.8;
    }
  }

  .video-btn1 {
    width: 100%;
  }

  .info-btn1.size-48 {
    padding-left: 12px;
    padding-right: 12px;
  }

  .card-video {
    padding: 16px;
    max-width: 800px;
    @apply tw-bg-white tw-w-full tw-rounded-xl;
  }

  .price {
    position: absolute;
    top: 0;
    left: 132px;
    transform: rotate(-2deg);

    @include lg {
      left: 175px;
    }
  }
</style>
