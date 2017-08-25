const innerProm = Promise.resolve();

const test = () => {
    return new Promise((resolve, reject) => {
       resolve('333');
    });
};

innerProm.then(() => {
    // return '111';
    return Promise.resolve().then(() => test());
}).then(msg => {
    console.log(msg);
});
