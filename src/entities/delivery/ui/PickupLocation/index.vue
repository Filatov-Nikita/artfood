<template>
  <div class="location">
    <div class="icon-wrap">
      <AppIcon name="radio-button-fill" fit />
    </div>
    <div>
      <p class="name">Уфа, Бессонова, 28А</p>
      <p class="time">
        <span class="tw-text-primary">Открыто</span>, пн-вс 10:00 — 20:00
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .location {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .icon-wrap {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    @apply tw-text-primary;
  }

  .name {
    @apply tw-text-body-m-bold -tw-tracking-2 tw-mb-4;
  }

  .time {

  }
</style>
