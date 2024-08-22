import { ref, watch } from 'vue';

interface Options {
  sync?: boolean,
};

export default function(swiper: any, options: Options = {}) {
  const currentInd = ref(0);
  const canNext = ref(false);
  const canPrev = ref(false);

  if(options.sync) sync();

  function sync() {
    watch(currentInd, (index) => setIndex(index));
  }

  function onSliderChange() {
    updateInd();
    updateActions();
  }

  function updateInd() {
    if(swiper.value === null) return;
    currentInd.value = swiper.value.activeIndex;
  }

  function setIndex(index: number) {
    if(swiper.value === null) return;
    currentInd.value = index;
    swiper.value.slideTo(index);
    updateActions();
  }

  function next() {
    if(swiper.value === null) return;
    swiper.value.slideNext();
    updateInd();
    updateActions();
  }

  function prev() {
    if(swiper.value === null) return;
    swiper.value.slidePrev();
    updateInd();
    updateActions();
  }

  function updateActions() {
    if(swiper.value === null) return;
    canNext.value = !swiper.value.isEnd;
    canPrev.value = !swiper.value.isBeginning;
  }

  return {
    currentInd,
    canPrev,
    canNext,
    next,
    prev,
    setIndex,
    onSliderChange,
    updateInd,
    updateActions,
  }
}
