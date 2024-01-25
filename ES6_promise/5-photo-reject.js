export default function uploadPhoto(filename) {
  return new Promise((resole, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
