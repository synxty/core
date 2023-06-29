import { ListsAndTrees } from 'types/index.ts';
import { lists } from './lists.ts';
import { trees } from './trees.ts';

export const listsAndTrees: ListsAndTrees = {
  ...lists,
  ...trees,
};
