'use strict';

// ES6 기능: 블록 스코프 변수 선언 (const)
const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' },
];

// ES6 기능: 객체 구조 분해 할당 (Object Destructuring)
function say({ subject, verb, object }) {
    // ES6 기능: 템플릿 리터럴 (Template Literals)
    // 따옴표 대신 백틱(`)을 사용해 변수를 쉽게 넣습니다.
    console.log(`${subject} ${verb} ${object}`);
}

// ES6 기능: for..of 반복문
for (let s of sentences) {
    say(s);
}