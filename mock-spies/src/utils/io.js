import * as fs from 'fs/promises';
import path from 'path';

export async function writeData(data, fileName) {
  return new Promise((resolve, reject) => {
    const storagePath = path.join(process.cwd(), 'data', fileName);

    fs.writeFile(storagePath, data);
    resolve();
    // , data, (err) => {
    //   if (err) {
    //     reject(err);
    //   }

    //   resolve('The file has been saved!');
    // });
  });
}

export function deleteFile(fileName) {
  return new Promise((resolve, reject) => {
    const storagePath = path.join(process.cwd(), 'data', fileName);

    fs.unlink(storagePath, (err) => {
      if (err) {
        reject(err);
      }

      resolve('The file has been deleted!');
    });
  });
}
