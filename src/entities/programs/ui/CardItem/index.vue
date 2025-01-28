<template>
  <article :class="$attrs?.class">
    <div v-bind="$attrs">
      <div class="img-wrap" >
        <AppImg class="img" :src="item.img" />
      </div>
      <p class="name">{{ item.name }}</p>
      <p class="text" v-html="item.text"></p>
    </div>
    <div class="price-wrap">
      <p class="price">{{ item.price }}</p>
      <p class="days"><AppPlural :cases="cases" :total="+item.days" /></p>
    </div>
  </article>
</template>
<script lang="ts">
// use normal <script> to declare options
export default {
  inheritAttrs: false
}
</script>
<script setup lang="ts">
  import type { ProgramsElement } from '@/shared/repositories/programs';
  import { useAttrs } from 'vue'

  const attrs = useAttrs()
  defineProps<{
    item: ProgramsElement,
  }>();

  const cases: [ string, string, string ] = [ 'день', 'дня', 'дней' ];
</script>

<style scoped lang="scss">
  .img-wrap {
    width: 100%;
    height: 343px;
    overflow: hidden;
    cursor: pointer;
    @apply tw-rounded-1.5xl tw-mb-12;

    @include lg {
      height: 320px;
    }
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    @apply tw-text-body-m-medium tw-mb-4;
  }

  .text {
    @apply tw-text-body-s-regular tw-text-text01 tw-mb-12;
  }

  .price {
    @apply tw-text-body-l-bold -tw-tracking-2 tw-mb-4;
  }

  .days {
    @apply tw-text-body-xs-medium tw-text-text01;
  }
</style>
