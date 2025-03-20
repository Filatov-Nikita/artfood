<template>
  <section>
    <div class="title-wrap">
      <h2 class="title">Стоимость доставки заказов в&nbsp;зависимости от района города:</h2>
      <AppButton class="map-btn" leftIcon="map-trifold-regular" size="48" design="outline" @click="showedMap = true">
        Карта
      </AppButton>
    </div>
    <DistrictMapModal v-model="showedMap" />
    <div class="scroll-x scroll-x--pb-8">
      <table class="table">
        <thead>
          <tr>
            <th class="table__th">Район</th>
            <th class="table__th">Мин. сумма заказа</th>
            <th class="table__th">Доставка</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table__tr">
            <td class="table__td">Город <span class="table__ost">(ост. Галле, Проспект СЮ, ост. Телецентр)</span></td>
            <td class="table__td">800 ₽</td>
            <td class="table__td">100 ₽</td>
          </tr>
          <tr class="table__tr">
            <td class="table__td">Пригород</td>
            <td class="table__td">1000 ₽</td>
            <td class="table__td">Уточняйте у менеджера</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { DistrictMapModal } from '@/entities/delivery';
  import { ref } from 'vue';

  const showedMap = ref(false);
</script>

<style scoped lang="scss">
  .title-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    row-gap: 16px;
    column-gap: 40px;
    @apply tw-mb-24;

    @include lg {
      @apply tw-mb-32;
    }
  }

  .map-btn {
    width: 100%;

    @include lg {
      width: auto;
      flex-shrink: 0;
    }
  }

  .title {
    @apply tw-text-body-l-bold -tw-tracking-2;

    @include lg {
      max-width: 500px;
      @apply tw-text-heading-3-bold;
    }
  }

  .table {
    width: 100%;
    min-width: 600px;

    &__th, &__td {
      @apply tw-px-10;
    }

    &__th {
      @apply tw-text-body-m-regular tw-text-text01 tw-text-left tw-align-top tw-pb-24;
    }

    &__td {
      @apply tw-text-body-m-medium tw-py-24;

      @include lg {
        @apply tw-text-body-l-medium;
      }
    }

    &__tr {
      @apply tw-border-t tw-border-solid tw-border-border01;
    }

    &__ost {
      @apply tw-text-body-s-regular tw-text-text01;
    }
  }
</style>
