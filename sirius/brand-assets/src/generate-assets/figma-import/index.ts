import {
  FigmaExportRC,
  ComponentsCommandOptions,
  ComponentOutputterParamOption,
} from '@figma-export/types';
import { pascalCase } from '@figma-export/utils';
import transformSvgWithSvgo from '@figma-export/transform-svg-with-svgo';
import outputComponentsAsEs6 from '@figma-export/output-components-as-es6';
import { IMPORT_DIRECTORY } from 'generate-assets/constants/index.ts';

const fileId = process.env.FIGMA_FILE_ID as string;

const componentOptions: ComponentsCommandOptions = {
  fileId,
  transformers: [
    transformSvgWithSvgo({
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
        {
          name: 'removeDimensions',
          active: true,
        },
      ],
    }),
  ],
  outputters: [
    outputComponentsAsEs6({
      output: IMPORT_DIRECTORY,
      getVariableName: (options: ComponentOutputterParamOption) =>
        pascalCase(options.componentName.trim()),
    }),
  ],
};

(module.exports as FigmaExportRC) = {
  commands: [['components', componentOptions]],
};
