import crypto from 'crypto';
import fs from 'fs';

let result = '';

const secretKey: string = 'passwordSecreyKey';
fs.readFile(__dirname + '/salt.txt', (err: Error | null, data: Buffer) => {
    if (err) throw err;

    crypto.pbkdf2(
        secretKey,
        data,
        10000,
        64,
        'sha512',
        (err: Error | null, pwd: Buffer) => {
            if (err) throw err;
            console.log(`암호화가 된 직후 실행: ${pwd.toString('base64')}`);
            result = pwd.toString('hex');
        }
    );
});

console.log('비동기이기 때문에 암호화보다 빠르게 실행됨:' + result);
setTimeout(() => console.log('암호화를 기다렸다가 실행: ' + result), 3000); // 예시를 위한거고 이런 식으로 코딩하면 안됨!
