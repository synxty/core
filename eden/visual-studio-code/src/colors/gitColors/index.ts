import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { GitColors } from 'types/index.ts';

const { black } = colors;
const { green, teal, red, violet, chartreuse, blue, vermilion } = aliases;

export const gitColors: GitColors = {
  'gitDecoration.addedResourceForeground': green.DEFAULT,
  'gitDecoration.modifiedResourceForeground': teal.DEFAULT,
  'gitDecoration.deletedResourceForeground': red.DEFAULT,
  'gitDecoration.renamedResourceForeground': violet.DEFAULT,
  'gitDecoration.stageModifiedResourceForeground': blue.DEFAULT,
  'gitDecoration.stageDeletedResourceForeground': red.DEFAULT,
  'gitDecoration.untrackedResourceForeground': chartreuse.DEFAULT,
  'gitDecoration.ignoredResourceForeground': black.tint[90],
  'gitDecoration.conflictingResourceForeground': vermilion.DEFAULT,
  'gitDecoration.submoduleResourceForeground': TESTING,
};
