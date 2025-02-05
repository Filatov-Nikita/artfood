<template>
  <div
    class="nav-item"
    :class="{
      'nav-item--primary': type === 'primary',
      'nav-item--secondary': type === 'secondary',
    }"
  >
    <router-link v-if="to" class="nav-item__link" active-class="nav-item__link--active" :to="to">
      {{ label }}
    </router-link>
    <router-link v-else="action" class="nav-item__link" to="#" @click.prevent="action">
      {{ label }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
  type ItemType = 'primary' | 'secondary';
  import { RouteLocationRaw } from 'vue-router';

  defineProps<{
    type: ItemType,
    label: string,
    to?: RouteLocationRaw,
    action?: () => void,
  }>();
</script>

<style scoped lang="scss">
  .nav-item {
    &--primary {
      padding: 12px 0px;
      @apply tw-text-white tw-text-body-l-bold;

      @include lg {
        @apply tw-text-heading-2-bold;
      }
    }

    &--secondary {
      padding: 8px 0px;
      @apply tw-text-white tw-text-body-s-bold;

      @include lg {
        @apply tw-text-body-m-bold;
      }
    }

    &__link {
      @include lg {
        &:hover {
          @apply tw-text-primary-hover;
        }
      }

      &--active {
        @apply tw-text-primary-hover;
      }
    }
  }
</style>
