let isMomHappy: boolean = false;

const willGetNewPhone: Promise<Object> = new Promise((resolve, reject) => {
    let phone: Object = {
        brand: 'Apple',
        color: 'black',
    };

    if (isMomHappy) {
        resolve(phone);
    }
    reject(`mom is not happy`);
});

willGetNewPhone
    .then((phone) => {
        console.log(phone);
    })
    .catch((str: String) => {
        console.error(str);
    });
