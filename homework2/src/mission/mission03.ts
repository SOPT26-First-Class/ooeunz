import crypto from 'crypto';
import fs from 'fs';

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
            console.log(pwd.toString('base64'));
        }
    );
});
