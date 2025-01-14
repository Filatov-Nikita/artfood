<template>
  <Form class="form" @submit="$emit('submit')">
    <AppInput class="tw-mb-16" name="name" label="Имя" :rules="schema.name" v-model="form.name" />
    <PhoneInput class="tw-mb-16" name="phone" label="Телефон" :rules="schema.phone" v-model="form.phone" />
    
    <div class="tw-mt-auto">
      <AppButton v-if='link && linkTitle' :href="link" target="_blank" class="tw-w-full tw-mb-12"  size="48" lg-size="56" design='secondary-neutral' :disabled="loading" >
        {{linkTitle}}
      </AppButton>
      <AppButton class="tw-w-full" type="submit" size="48" lg-size="56" :disabled="loading">
        {{btnTitle}}
      </AppButton>
      <p class="sogl">
        Отправляя форму вы соглашаетесь на
        <a class="app-link" :href="percHref" target="_blank">обработку персональных данных</a> и&nbsp;с&nbsp;условиями
        <a class="app-link" :href="polzSoglHref" target="_blank">пользовательского соглашения</a>.
      </p>
    </div>
  </Form>
</template>

<script setup lang="ts">
  import { useAppConfig } from '@/shared/config/app';
  import useCallbackForm from '../model/useCallbackFormOther';

  defineProps<{
    form: ReturnType<typeof useCallbackForm>['form'],
    schema: ReturnType<typeof useCallbackForm>['schema'],
    loading: boolean,
    btnTitle:string,
    link?: string,
    linkTitle?: string
  }>();

  defineEmits<{
    (event: 'submit'): void,
  }>();

  const { polzSoglHref, percHref } = useAppConfig();
</script>

<style scoped lang="scss">
  .form {
    display: flex;
    flex-direction: column;
  }

  .sogl {
    @apply tw-mt-12 tw-text-text01 tw-text-body-xs-medium;

    @include lg {
      @apply tw-text-body-s-medium;
    }
  }
</style>
