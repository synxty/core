import { ParseThemeColors } from 'types/index.ts';

const symbolIconsColorsProps = [
  'symbolIcon.arrayForeground',
  'symbolIcon.booleanForeground',
  'symbolIcon.classForeground',
  'symbolIcon.colorForeground',
  'symbolIcon.constantForeground',
  'symbolIcon.constructorForeground',
  'symbolIcon.enumeratorForeground',
  'symbolIcon.enumeratorMemberForeground',
  'symbolIcon.eventForeground',
  'symbolIcon.fieldForeground',
  'symbolIcon.fileForeground',
  'symbolIcon.folderForeground',
  'symbolIcon.functionForeground',
  'symbolIcon.interfaceForeground',
  'symbolIcon.keyForeground',
  'symbolIcon.keywordForeground',
  'symbolIcon.methodForeground',
  'symbolIcon.moduleForeground',
  'symbolIcon.namespaceForeground',
  'symbolIcon.nullForeground',
  'symbolIcon.numberForeground',
  'symbolIcon.objectForeground',
  'symbolIcon.operatorForeground',
  'symbolIcon.packageForeground',
  'symbolIcon.propertyForeground',
  'symbolIcon.referenceForeground',
  'symbolIcon.snippetForeground',
  'symbolIcon.stringForeground',
  'symbolIcon.structForeground',
  'symbolIcon.textForeground',
  'symbolIcon.typeParameterForeground',
  'symbolIcon.unitForeground',
  'symbolIcon.variableForeground',
] as const;

export type SymbolIconsColors = ParseThemeColors<typeof symbolIconsColorsProps>;