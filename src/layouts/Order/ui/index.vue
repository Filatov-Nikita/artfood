<template>
  <div>
    <div class="order-layout__header-wrap">
      <div class="wrapper">
        <StepHeader v-model:showedMenu="showedMenu" prevStep="Оформление заказа" />
        <NavMenu
          :showed="showedMenu"
          headerSelector=".order-layout__header-wrap"
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
  import { ref, watch } from 'vue';

  const route = useRoute();
  const showedMenu = ref(false);

  watch(() => route.fullPath, () => {
    showedMenu.value = false;
  });
</script>

<style scoped lang="scss">
  .order-layout {
    &__header-wrap {
      padding: 8px 0;

      @include lg {
        padding-top: 16px;
      }
    }
  }
</style>
