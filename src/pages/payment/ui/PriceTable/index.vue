<template>
  <section>
    <h2 class="title">Стоимость доставки заказов в&nbsp;зависимости от района города:</h2>
    <div class="scroll-x scroll-x--pb-8">
      <table class="table">
        <thead>
          <tr>
            <th class="table__th">Район</th>
            <th class="table__th">Мин. сумма заказа</th>
            <th class="table__th">Доставка</th>
            <th class="table__th">Бесплатная доставка</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table__tr">
            <td class="table__td">Город <span class="table__ost">(ост. Галле, Проспект СЮ, ост. Телецентр)</span></td>
            <td class="table__td">1000 ₽</td>
            <td class="table__td">200 ₽</td>
            <td class="table__td">от 2000 ₽</td>
          </tr>
          <tr class="table__tr">
            <td class="table__td">Пригород</td>
            <td class="table__td">2000 ₽</td>
            <td class="table__td">Уточняется у оператора</td>
            <td class="table__td">от 10 000 ₽</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .title {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-24;

    @include lg {
      max-width: 500px;
      @apply tw-text-heading-3-bold tw-mb-32;
    }
  }

  .table {
    width: 100%;
    min-width: 600px;

    &__th, &__td {
      @apply tw-px-10;
    }

    &__tr &__td:first-child, &__th:first-child {
      @apply tw-pl-0;
    }

    &__tr &__td:last-child, &__th:last-child {
      @apply tw-text-primary;
    }

    &__th {
      @apply tw-text-body-m-regular tw-text-text01 tw-text-left tw-align-top tw-pb-24;
    }

    &__td {
      @apply tw-text-body-m-medium tw-py-12;

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
