import { readdir, readFileSync, createWriteStream } from 'node:fs';

function generateIconsSource() {
  const SOURCE_FILE_NAME = 'index.ts';
  const SOURCE_DIRECTORY = 'icons';

  readdir(SOURCE_DIRECTORY, (error, files) => {
    if (error) throw error;
    const filesData: string[] = [];
  
    files.forEach((file) => {
      const fileContent = readFileSync(`${SOURCE_DIRECTORY}/${file}`).toString();
      filesData.push(fileContent);
    });
  
    const indexFile = createWriteStream(`${SOURCE_DIRECTORY}/${SOURCE_FILE_NAME}`);
    filesData.forEach((data) => indexFile.write(data));
  });
}

generateIconsSource();
