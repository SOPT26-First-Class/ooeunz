const firstClass: Array<Object> = [
    {
        name: '윤자이',
        age: '26',
        language: 'Java, Typescript, Javascript, Python',
        framework: [
            'Spring Framework',
            'Spring Boot',
            'Express.js',
            'React.js',
        ],
        database: ['MySQL', 'MariaDB', 'MongoDB'],
        devops: [
            {
                aws: ['ec2', 'rds', 's3'],
            },
            'docker',
        ],
        award: [
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
