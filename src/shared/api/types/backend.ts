export type YesNo = 'Да' | 'Нет';

export interface Image {
  height: string;
  width:  string;
  src:    string;
}

export type WithPrefix<P, O extends Record<string, any>> = {
  [
    K in keyof O
    as K extends string
    ? P extends string
      ? `${P}${K}` : never
    : never
  ]: O[K]
};
