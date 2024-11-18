<template>
  <Info class="tw-mb-20" />
  <div class="items">
    <CardItem
      class="element"
      v-for="item in items"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  import Info from './Info.vue';
  import CardItem from './CardItem.vue';
  import ImgDog from './dog.png';

  const items = [
    {
      title: 'В распоряжении 4 зала вместимостью от 30 до 150 человек',
      text: 'Залы внутри просторные и светлые, так что все гости будут чувствовать себя свободно и комфортно.',
    },
    {
      title: 'Наша команда состоит только из профессионалов',
      text: 'Это подтвердила и высшая награда — «Лучший catering года». Вы можете быть уверены в том, что ваш праздник точно пройдет без проблем',
      img: ImgDog,
    },
    {
      title: 'Собственная кухня позволит подобрать фуршетное и банкетное меню любой сложности',
      text: 'Шеф-повар предложит вам несколько вариантов готового меню под ваше мероприятие, или же мы вместе его составим по вашим предпочтениям',
    },
    {
      title: 'Организуем интерьер под любые желания',
      text: 'Cотрудничаем с лучшей компанией по оформлению помещений, так что любые запросы насчет цветов, шариков или текстиля будут идеально исполнены',
    },
  ];
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
  }

  .element {
    margin: 10px;
    width: calc(100% - 20px);

    @include lg {
      width: calc(50% - 20px);
    }

    @include xl {
      width: calc(25% - 20px);
    }
  }
</style>
