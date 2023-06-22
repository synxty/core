import { EXPORT_DIRECTORY, EXPORT_FILE_NAME, IMPORT_DIRECTORY } from 'generate-assets/constants/index.ts';
import { readdir, readFileSync, createWriteStream } from 'node:fs';


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
