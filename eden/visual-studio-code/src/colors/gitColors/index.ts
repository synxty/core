import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { GitColors } from 'types/index.ts';

const { black } = colors;
const { green, red, violet, blue, vermilion } = aliases;

export const gitColors: GitColors = {
  'gitDecoration.addedResourceForeground': green.DEFAULT,
  'gitDecoration.modifiedResourceForeground': blue.tint[40],
  'gitDecoration.deletedResourceForeground': red.DEFAULT,
  'gitDecoration.renamedResourceForeground': violet.DEFAULT,
  'gitDecoration.stageModifiedResourceForeground': blue.DEFAULT,
  'gitDecoration.stageDeletedResourceForeground': red.DEFAULT,
  'gitDecoration.untrackedResourceForeground': green.tint[40],
  'gitDecoration.ignoredResourceForeground': black.tint[90],
  'gitDecoration.conflictingResourceForeground': vermilion.DEFAULT,
  'gitDecoration.submoduleResourceForeground': TESTING,
};
