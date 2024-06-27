export default function uploadPhoto(filename) {
    return new Promise((resolve, reject) => {
      if (filename) {
        resolve(`Photo ${filename} uploaded successfully`);
      } else {
        reject(new Error(`${filename} cannot be processed`));
      }
    });
}
  