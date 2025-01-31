<template>
  <div class="nav-item">
    <router-link v-if="to" class="nav-item__link" :to="to">
      {{ label }}
    </router-link>
    <button v-else-if="action" class="nav-item__link" type="button" @click.prevent="action">
      {{ label }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import { RouteLocationRaw } from 'vue-router';

  defineProps<{
    label: string,
    to?: RouteLocationRaw,
    action?: () => void,
  }>();
</script>

<style scoped lang="scss">
  .nav-item {
    &__link {
      @apply tw-text-body-m-bold tw-text-white;

      @include lg {
        &:hover {
          @apply tw-text-primary-hover;
        }
      }
    }
  }
</style>
