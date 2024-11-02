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
              class="nav-btn"
              :design="activeSection === section.code ? 'primary' : 'secondary-neutral'"
              :to="{ name: 'menu.section.index', params: { section: section.code } }"
              size="48"
            >
              {{ section.name }}
            </AppButton>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script setup lang="ts">
  import { useRepositories } from '@/shared/repositories';
  import useRequest from '@/shared/lib/useRequest';
  import useDataOrFail from '@/shared/lib/useDataOrFail';

  defineProps<{
    activeSection: string,
  }>();

  const api = useRepositories();
  const sectionsRes = await useRequest(api.menu.sectionsAll);
  const sections = useDataOrFail(sectionsRes);
</script>

<style scoped lang="scss">
  .menu-nav {
    @apply tw-bg-neutral tw-rounded-1.5xl tw-p-8;
  }

  .list {
    display: flex;
    align-items: center;
    gap: 8px;

    @include lg {
      flex-wrap: wrap;
    }
  }

  .item {
    @include lg {
      width: 100%;
    }
  }

  .nav-btn {
    @include lg {
      width: 100%;
      justify-content: left;
    }
  }
</style>
