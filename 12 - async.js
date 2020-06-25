setTimeout(() => {
  console.log('isso acontece após 1 segundo');
}, 1000);

setInterval(() => {
  console.log('isso acontece de 1 em 1 segundo')
}, 1000);

const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const res = { user: 'Edgar', error: true, message: 'User not found!' };

    if (res.error) reject(new Error(res.message));

    resolve('vou retornar esse valor após 1 segundo');
  }, 1000);
});

minhaPromise.then((text) => {
  console.log(text);
}).catch((err) => {
  console.log(err);
});

(async () => {
  const text = await minhaPromise();
  console.log(text);
})();

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

// const wait = (time) => new Promise((res) => setTimeout(res, time));

(async () => {
  console.log('primeiro');
  await wait(3000);
  console.log('3 segundos depois...')
})();
