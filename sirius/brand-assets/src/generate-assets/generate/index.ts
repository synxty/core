import { readdir, readFileSync, createWriteStream } from 'node:fs';
import { IMPORT_DIRECTORY, EXPORT_DIRECTORY, EXPORT_FILE_NAME } from '../constants';

function generateAssetsSource() {

  readdir(IMPORT_DIRECTORY, (error, files) => {
    if (error) throw error;
    const filesData: string[] = [];
  
    files.forEach((file) => {
      const fileContent = readFileSync(`${IMPORT_DIRECTORY}/${file}`).toString();
      filesData.push(fileContent);
    });
  
    const indexFile = createWriteStream(`${EXPORT_DIRECTORY}/${EXPORT_FILE_NAME}`);
    filesData.forEach((data) => indexFile.write(data));
  });
}

generateAssetsSource();
