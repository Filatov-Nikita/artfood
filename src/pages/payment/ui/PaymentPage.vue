<template>
  <main class="page--py">
    <div class="wrapper">
      <InnerSection />
      <OrderSection class="section--mb" />
      <PriceTable />
    </div>
  </main>
</template>

<script setup lang="ts">
  import InnerSection from './InnerSection/index.vue';
  import OrderSection from './OrderSection/index.vue';
  import PriceTable from './PriceTable/index.vue';
</script>
