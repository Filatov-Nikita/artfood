<template>
  <AppModal
    :style="{ 'zIndex': 9900 }"
    v-model="callbackStore.showedCallback"
    :skipScroll="callbackStore.meta.isInner"
    x-pos="right"
    y-pos="top"
    animation="slide-right"
  >
    <div class="card">
      <SuccessRes v-if="showedSuccess" @ok="callbackStore.showedCallback = false" />
      <div class="content" v-else>
        <ButtonClose class="card-close-xl" size="40px" padding="0.2em" @click="callbackStore.showedCallback = false" />
        <p class="title">{{ callbackStore.meta.title }}</p>
        <CallbackForm class="tw-grow" :form="form" :schema="schema" :loading="loading" @submit="send" />
      </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
  import CallbackForm from './CallbackForm.vue';
  import SuccessRes from './SuccessRes.vue';
  import useCallbackForm from '../model/useCallbackForm';
  import usePostRequest from '@/shared/lib/usePostRequest';
  import useHttp from '@/shared/api/useHttp';
  import { jsonFormData } from '@/shared/lib';
  import { ref, watch } from 'vue';
  import { useCallbackStore } from '@/shared/store/callback';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const callbackStore = useCallbackStore();

  const showedSuccess = ref(false);

  const { form, schema, reset } = useCallbackForm();

  const { http } = useHttp();

  const { loading, send } = usePostRequest(
    () => http.post('feedback.php', jsonFormData(form)),
    () => {},
    () => {
      showedSuccess.value = true;
    }
  );

  watch(() => callbackStore.showedCallback, (v) => {
    if(!v) {
      showedSuccess.value = false;
      reset();
    }
  });

  watch(() => route.fullPath, () => {
    callbackStore.showedCallback = false;
  });
</script>

<style scoped lang="scss">
  .card {
    position: relative;
    @apply tw-bg-white tw-rounded-1.5xl tw-w-full tw-h-full tw-p-24;

    @include lg {
      max-width: 464px;
    }
  }

  .card-close-xl {
    position: absolute;
    right: 24px;
    top: 24px;
    z-index: 900;
  }

  .title {
    @apply tw-text-body-m-bold -tw-tracking-2 tw-pr-64 tw-mb-24 tw-min-h-40;

    @include lg {
      @apply tw-text-body-l-bold;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
</style>
