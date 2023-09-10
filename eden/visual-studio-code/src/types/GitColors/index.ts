import { ParseThemeKeys } from 'types/index.ts';

const gitColorsProps = [
  'gitDecoration.addedResourceForeground',
  'gitDecoration.modifiedResourceForeground',
  'gitDecoration.deletedResourceForeground',
  'gitDecoration.renamedResourceForeground',
  'gitDecoration.stageModifiedResourceForeground',
  'gitDecoration.stageDeletedResourceForeground',
  'gitDecoration.untrackedResourceForeground',
  'gitDecoration.ignoredResourceForeground',
  'gitDecoration.conflictingResourceForeground',
  'gitDecoration.submoduleResourceForeground',
] as const;

export type GitColors = ParseThemeKeys<typeof gitColorsProps>;
