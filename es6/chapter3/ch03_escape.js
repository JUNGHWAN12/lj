// 줄바꿈 \n
console.log('Line1\nLine2');
// 캐리지 리턴 \r
console.log('Windows line 1\r\nWindows line 2');
// \t탭
console.log("Speed:\t60kph");

let currentTemp = 19.5;

const message = `The current temperature is ${currentTemp} \u00b0C`;

console.log(message);
//여러줄 문자열
const multiline = 'line1\n' +
    'line2\n' +
    'line3\n';

console.log(multiline);
//백틱을 활용한 여러줄 문자열
const multiline2 = `Current temperature:\n`+
    `\t${currentTemp}\u00b0C\n`+
    'Don\'t worry..the heat is on!'
console.log(multiline2);

//심볼활용
const RED = Symbol('color');
const ORANGE = Symbol('color');
console.log(RED===ORANGE);

//원시 타입과 대응하는 객체 타입

const s = "hello"
s.toUpperCase()
console.log(s);

const x = 'hi'
console.log(x);
x.rating = 3;
x.rating;
console.log(x);