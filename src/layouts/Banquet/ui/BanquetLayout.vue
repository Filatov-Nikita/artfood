<template>
  <div>
    <div class="banquet-layout__header-wrap">
      <div class="wrapper">
        <StepHeader v-model:showedMenu="showedMenu" :prevStep="title" />
        <NavMenu
          :showed="showedMenu"
          headerSelector=".banquet-layout__header-wrap"
        />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { NavMenu } from '@/widgets/NavMenu';
  import { StepHeader } from '@/widgets/Header';
  import { useRoute } from 'vue-router';
  import { ref, watch, provide } from 'vue';
  import { setTitleKey } from '../model/symbols';

  const route = useRoute();
  const showedMenu = ref(false);

  const title = ref('Сборка банкетного меню');

  provide(setTitleKey, (newTitle: string) => title.value = newTitle);

  watch(() => route.fullPath, () => {
    showedMenu.value = false;
  });
</script>

<style scoped lang="scss">
  .banquet-layout {
    &__header-wrap {
      padding: 8px 0;

      @include lg {
        padding-top: 16px;
      }
    }
  }
</style>
