<template>
  <div class="energy">
    <div class="item">
      <p class="value">{{ energy.belki }}</p>
      <p class="label">Белки</p>
    </div>
    <div class="item">
      <p class="value">{{ energy.giri }} г</p>
      <p class="label">Жиры</p>
    </div>
    <div class="item">
      <p class="value">{{ energy.uglevodi }} г</p>
      <p class="label">Углеводы</p>
    </div>
    <div class="item">
      <p class="value">{{ energy.cal }} г</p>
      <p class="label">Калории</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  export interface Energy {
    belki: string,
    giri: string,
    uglevodi: string,
    cal: string
  }

  defineProps<{
    energy: Energy
  }>();
</script>

<style scoped lang="scss">
  .energy {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @apply tw-border tw-border-solid tw-border-border01 tw-rounded-xl tw-p-16;
  }

  .label {
    @apply tw-text-body-s-medium tw-text-text01;
  }

  .value {
    @apply tw-text-body-m-medium;
  }
</style>
