/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  // hasOwnProperty() {
  //   return '이게 된다고..?'
  // }
};

// in문 : 객체 안에 내가 원하는 값(property)이(가) 있어?
const key = 'nickName';
const key1 = 'toString';

// console.log(key in javaScript);
// console.log(key1 in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 찐객체에 접근하여 강제로 수정한 것(Bad!!!!!)
Object.prototype.nickName = 'tiger';
// Object.prototype.hasOwnProperty = 'a';

// 객체 자신의 속성인지 확인하는 방법
// - "자신의(own) 속성(property)을 가지고(has) 있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?


// console.log(javaScript.hasOwnProperty(key));


Object.prototype.hasOwnProperty.call(javaScript, key);

// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

// for(let key in javaScript) {
//   console.log(key);
// }

// Object.prototype = ({})
for(let key in javaScript) {
  if(({}).hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

// - 배열 객체 순환에 사용할 경우?
const tens = [10,100,1000,10_000];

for(let key in tens) {
  console.log(tens[key]);
}

// for ... in 객체를 순환하는 용도로 사용이 가능함.
// 배열에서는 좀.. 그래요... for in은 객체에 양보하세요.. (성능적인 측면에서도 안좋음)

// for .. of (최신 문법이므로 권장함)