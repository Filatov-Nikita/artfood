<template>
    <nav class="menu-nav">
      <div class="scroll-x">
        <ul class="list">
          <li
            class="item"
            v-for="section in sections"
            :key="section.id"
          >
            <AppButton
              :design="curSectionCode === section.code ? 'primary' : 'secondary-neutral'"
              :to="{ name: 'menu.section.index', params: { section: section.code } }"
            >
              {{ section.name }}
            </AppButton>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script setup lang="ts">
  import useHttp from '@/shared/api/useHttp';
  import { MenuSection } from '@/shared/api/models/MenuSection';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const { http } = useHttp();

  const curSectionCode = computed(() => route.params.section as string);

  const { data: sections } = await http.get<MenuSection[]>('menu_sections.php');
</script>

<style scoped lang="scss">
  .menu-nav {
    @apply tw-bg-neutral tw-rounded-1.5xl tw-p-8;
  }

  .list {
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
