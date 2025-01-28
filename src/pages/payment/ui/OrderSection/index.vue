<template>
  <section class="payment-section">
    <div class="wrap">
      <div class="time-wrap">
        <p class="title">Прием заказов:</p>
        <div class="time-range">
          <p class="time-range__days">Понедельник — Воскресенье</p>
          <p class="time-range__time">10:00 — 20:00</p>
        </div>
        <div class="present-block">
          <span class="present-block__icon">
            <AppIcon name="confetti-fill" colorClass="tw-fill-primary" fit />
          </span>
          <p>В праздничные дни время работы может меняться</p>
        </div>
      </div>
      <div class="payment-wrap">
        <p class="title">Оплата заказа:</p>
        <div class="payment-methods">
          <div class="payment-item">
            <span class="payment-item__icon">
              <AppIcon name="wallet-fill" colorClass="tw-fill-primary" fit />
            </span>
            <p class="payment-item__text">
              банковской картой через терминал у курьера при доставке заказа.
            </p>
          </div>
          <div class="payment-item">
            <span class="payment-item__icon">
              <AppIcon name="credit-card-fill" colorClass="tw-fill-primary" fit />
            </span>
            <p class="payment-item__text">
              наличными курьеру при доставке заказа;
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .title {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-20;

    @include lg {
      @apply tw-text-heading-3-bold tw-mb-24;
    }
  }

  .wrap {
    @include lg {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }
  }

  .time-wrap {
    @apply tw-mb-32;

    @include lg {
      margin: 10px;
      width: calc(50% - 20px);
      display: flex;
      flex-direction: column;
    }
  }

  .payment-wrap {
    @include lg {
      margin: 10px;
      width: calc(50% - 20px);
    }
  }

  .time-range {
    @apply tw-border-l-2 tw-border-solid tw-border-primary tw-pl-24 tw-mb-16;

    @include lg {
      @apply tw-mb-20;
    }

    &__days {
      @apply tw-text-body-m-regular tw-mb-8;
    }

    &__time {
      @apply tw-text-heading-3-bold -tw-tracking-2;
    }
  }

  .present-block {
    display: flex;
    align-items: center;
    gap: 16px;
    @apply tw-bg-neutral tw-p-16 tw-rounded-xl tw-w-fit;

    @include lg {
      @apply tw-mt-auto ;
    }

    &__icon {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
    }
  }


  .payment-methods {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @include lg {
      flex-wrap: nowrap;
    }
  }

  .payment-item {
    @apply tw-bg-neutral tw-p-24 tw-rounded-1.5xl tw-w-full;

    @include lg {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__icon {
      display: block;
      width: 32px;
      height: 32px;
      @apply tw-mb-16;
    }

    &__text {
      @apply tw-text-body-m-medium;
    }
  }
</style>
