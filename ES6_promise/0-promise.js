function getResponseFromAPI(){
  return new Promise((resolve, reject) => {
     if(true){
      resolve('true');
     }
     else {
      reject('false');
     }
  });

}
 export default getResponseFromAPI;
