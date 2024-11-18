<template>
  <div>order</div>
</template>

<script setup lang="ts">
  import { inject } from 'vue';
  import { setTitleKey } from '@/layouts/Banquet/model/symbols';

  const setTitle = inject(setTitleKey);
  setTitle && setTitle('Формирование заявки');
</script>
