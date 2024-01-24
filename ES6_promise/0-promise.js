function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
    resolve('true');
    reject('false');
  });
}
export default getResponseFromAPI;
