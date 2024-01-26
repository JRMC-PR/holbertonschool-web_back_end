function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'Success' };
    })
    .catch(() => {
      console.error('An error occurred');
      return new Error();
    });
}
export default handleResponseFromAPI;
