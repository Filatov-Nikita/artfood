<template>
  <div class="primary-layout">
    <div class="primary-layout__header-wrap">
      <div class="wrapper">
        <Header
          v-model:showedMenu="showedMenu"
          @showBasket="showedBasket = true; showedMenu = false"
          @showBanquet="banquetStore.showedModal = true"
        />
        <ModalAlertBanquet v-model="banquetStore.showedModal" />
        <ModalDetailed v-model="showedBasket" />
        <NavMenu
          :showed="showedMenu"
          headerSelector=".primary-layout__header-wrap"
          @showBanquet="banquetStore.showedModal = true; showedMenu = false"
        />
      </div>
    </div>
    <slot></slot>
    <div class="primary-layout__footer-wrap">
      <Footer @showBanquet="banquetStore.showedModal = true" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Header } from '@/widgets/Header';
  import { Footer } from '@/widgets/Footer';
  import { NavMenu } from '@/widgets/NavMenu';
  import { ModalAlert as ModalAlertBanquet } from '@/entities/banquet';
  import { ref, watch } from 'vue';
  import { ModalDetailed } from '@/entities/basket';
  import { useRoute } from 'vue-router';
  import { useBanquetStore } from '@/shared/store/banquet';

  const banquetStore = useBanquetStore();
  const route = useRoute();

  const showedMenu = ref(false);
  const showedBasket = ref(false);

  watch(showedMenu, (val) => {
    if(val) {
      window.scrollTo(0, 0);
    }
  });

  watch(() => route.fullPath, () => {
    showedMenu.value = false;
  });
</script>

<style scoped lang="scss">
  .primary-layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    min-height: 100vh;

    &__header-wrap {
      position: sticky;
      top: 0;
      padding: 8px 0;
      z-index: 1000;
       @include lg {
        padding-top: 16px  ;
       }
    }

    &__footer-wrap {
      padding: 16px;

      @include lg {
        padding: 24px;
        padding-top: 40px;
      }

      @include xl {
        padding: 40px;
        padding-top: 64px;
      }
    }
  }
</style>
