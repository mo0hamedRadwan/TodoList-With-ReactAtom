import { atom } from '@mongez/react-atom';

type activeCardType = number | null;

export const activeCardAtom = atom<activeCardType>({
  key: 'activeCard',
  default: null,
});
