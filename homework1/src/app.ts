const firstClass: Array<Object> = [
    {
        name: '윤자이',
        age: '26',
        github: 'github.com/ooeunz',
        blog: 'ooeunz.tistory.com',
        language: ['Java', 'Typescript', 'Javascript', 'Python', 'C++'],
        framework: [
            'Spring Framework',
            'Spring Boot',
            'Express.js',
            'React.js',
        ],
        database: ['MySQL', 'MariaDB', 'MongoDB', 'Redis'],
        ai: ['Google Dialogflow(NLP)'],
        devops: [
            {
                aws: ['ec2', 'rds', 's3', 'lambda'],
            },
            'docker',
        ],
        awards: [
            {
                name: 'KW해커톤',
                category: '장려상',
                host: '광운대학교',
            },
            {
                name: '신한 해커톤',
                category: '장려상',
                host: '신한 금융그룹',
            },
            {
                name: 'AppJam',
                category: '최우수상',
                host: '창업 IT 연합 동아리 SOPT',
            },
        ],
    },
    {
        name: '홍준엽',
        age: '26',
        language: 'C, Java, JavaScript, TypeScript',
        framework: ['Express.js', 'Vue.js'],
        database: ['firebase', 'redis', 'MongoDB'],
        devops: [
            {
                aws: ['ec2', 's3'],
                GCP: ['Google Compute Engine'],
            },
        ],
        awards: [],
    },
    {
        name: '이유영',
    },
    {
        name: '황지혜',
    },
    {
        name: '엄서영',
    },
    {
        name: '정형일',
    },
];

firstClass.forEach((people) => console.log(people));
