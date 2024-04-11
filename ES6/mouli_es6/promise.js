/* const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const syncroneFunction = () => {
  console.log(`start`);
  sleep(3000).then(() => console.log(`Hello`));
  console.log(`end`);
};

syncroneFunction(); */

/* const asyncroneFunction = () => {
  console.log(`start`);
  await sleep(3000);
  console.log(`end`);
};

asyncroneFunctionsyncroneFunction(); */
/* 
const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();

      if (random > 0.5) {
        resolve(random);
      } else {
        reject(random);
      }
    }, 1000);
  });
};

const exrcFunc = () => {
  asyncFunction()
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });
}; */
