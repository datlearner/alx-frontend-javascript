export default function getFullResponseFromAPI(success) {
<<<<<<< HEAD
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ staus: 200, body: 'Success' });
    } else {
      reject('The fake API is not working currently');
    }
  });
=======
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'Success' });
        } else {
            reject(new Error('The fake API is not working currently'));
        }
    });
>>>>>>> 8efd212ba99c037b0f5e142163ada9d83495853b
}
