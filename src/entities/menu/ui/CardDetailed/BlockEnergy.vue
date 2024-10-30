<template>
  <div class="energy">
    <div class="item">
      <p class="value">{{ energy.belki }}</p>
      <p class="label">Белки</p>
    </div>
    <div class="item">
      <p class="value">{{ energy.giri }}</p>
      <p class="label">Жиры</p>
    </div>
    <div class="item">
      <p class="value">{{ energy.uglevodi }}</p>
      <p class="label">Углеводы</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  export interface Energy {
    belki: string,
    giri: string,
    uglevodi: string,
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
  }

  .label {
    @apply tw-text-body-s-medium tw-text-text01;
  }

  .value {
    @apply tw-text-body-m-medium;
  }
</style>
