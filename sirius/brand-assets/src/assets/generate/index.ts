import { EXPORT_DIRECTORY, EXPORT_FILENAME, IMPORT_DIRECTORY } from 'assets/constants/index.ts';
import { readdir, readFileSync, createWriteStream } from 'node:fs';

function generateAssetsSource() {
  readdir(IMPORT_DIRECTORY, (error, files) => {
    if (error) throw error;
    const filesData: string[] = [];

    files.forEach((file) => {
      const fileContent = readFileSync(`${IMPORT_DIRECTORY}/${file}`).toString();
      filesData.push(fileContent);
    });

    const indexFile = createWriteStream(`${EXPORT_DIRECTORY}/${EXPORT_FILENAME}`);
    filesData.forEach((data) => indexFile.write(data));
  });
}

generateAssetsSource();
