<template>
  <div class="primary-layout">
    <div class="primary-layout__header-wrap">
      <div class="wrapper">
        <Header v-model:showedMenu="showedMenu" @showBasket="showedBasket = true" />
        <ModalDetailed v-model="showedBasket" />
        <NavMenu
          :showed="showedMenu"
          headerSelector=".primary-layout__header-wrap"
        />
      </div>
    </div>
    <slot></slot>
    <div class="primary-layout__footer-wrap">
      <div class="wrapper">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Header } from '@/widgets/Header';
  import { Footer } from '@/widgets/Footer';
  import { NavMenu } from '@/widgets/NavMenu';
  import { ref, watch } from 'vue';
  import { ModalDetailed } from '@/entities/basket';
  import { useRoute } from 'vue-router';

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
      padding: 8px 0;

       @include lg {
        padding-top: 16px  ;
       }
    }

    &__footer-wrap {
      padding: 16px 0;

      @include lg {
        padding-bottom: 24px;
      }

      @include xl {
        padding-bottom: 40px;
      }
    }
  }
</style>
