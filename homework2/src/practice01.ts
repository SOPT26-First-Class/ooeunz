const greet = () => {
    console.log('Hello!');
};

const timer = () => {
    return setTimeout(() => {
        console.log('End!');
    }, 3000);
};

greet();
timer();
