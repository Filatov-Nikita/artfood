import { useGrid, useScreen } from 'vue-screen';

export function useAppScreen() {
  return useScreen();
}

export function useAppGrid() {
  const grid = useGrid({
    lg: '1024px',
    xl: '1440px',
  });

  return grid;
}
