let isMomHappy = true;
let phone = {
    brand: 'Apple',
    color: 'black',
};

const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        resolve();
    }
    reject();
});

willGetNewPhone
    .then(() => {
        console.log(phone);
    })
    .catch(() => {
        console.error(`mom is not happy`);
    });
