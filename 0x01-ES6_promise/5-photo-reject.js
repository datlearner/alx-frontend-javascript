export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    resolve();
    reject(`${filename} cannot be processed`);
  });
}
