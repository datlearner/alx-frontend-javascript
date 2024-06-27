import loadBalancer from './7-load_balancer';

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(((resolve, reject) => {
  setTimeout(resolve, 100, ukSuccess);
  reject();
}));

const promiseUKSlow = new Promise(((resolve, reject) => {
  setTimeout(resolve, 400, ukSuccess);
  reject();
}));

const promiseFR = new Promise(((resolve, reject) => {
  setTimeout(resolve, 200, frSuccess);
  reject();
}));

const test = async () => {
  console.log(await loadBalancer(promiseUK, promiseFR));
  console.log(await loadBalancer(promiseUKSlow, promiseFR));
};

test();
