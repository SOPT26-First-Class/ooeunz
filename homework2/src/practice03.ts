import crypto from 'crypto';

const secretKey: string = 'abcdefg';

const pwd: string = crypto
    .createHmac('sha256', secretKey)
    .update('이 문장을 해싱')
    .digest('base64');

console.log(pwd);
