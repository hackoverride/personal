export function getRandomContent() {
    return content[getRandomInt(0, content.length - 1)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const content = [
    {
        title: 'Who am I?',
        rolledContent: [
            'I am a fullstack software developer with a passion for learning and creating complete systems.',
            'I am a husband, a father, a brother, and a friend.',
            'I am a passionate problem solver, solution finder and bug hunter.',
            'I believe in the power of the internet to connect people and change the world.',
        ]
    }
];