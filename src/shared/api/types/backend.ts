export type YesNo = 'Да' | 'Нет';

export interface Image {
  HEIGHT: string;
  WIDTH:  string;
  SRC:    string;
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
