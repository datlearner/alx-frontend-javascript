export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve();
    } else {
      reject();
    }
  });
}

handleResponseFromAPI(promise).
  then(() => {
    resolve({status: 200, body: 'success'});
  }).
  catch(() => {
    reject(new Error());
  })