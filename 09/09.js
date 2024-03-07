// 자바스크립트 데이터 타입
// 기본 타입
let n1 = 10; // 정수
let n2 = 10.5; // 실수
let s1 = "안녕하세요"; // 문자열

console.log("정수 : ", n1);
console.log("실수 : ", n2);
console.log("문자열 : ", s1);
console.log("문자열 요소 접근 : ", s1[1]);

// 문자열 순회 (in은 index 가져옴)
for (let i in s1) {
  console.log("문자열(for in) : ", s1[i]);
}

// 문자열 순회 (of는 value 가져옴)
for (let c of s1) {
  console.log("문자열(for of) : ", c);
}

// 배열
let arr = ["🍒", 1, "🍓", 2, "🍅", 3]; // Tailing 쉼표가능
console.log("배열 : ", arr);
console.log("배열의 요소 접근 : ", arr[1]);

for(let i in arr) {
  console.log("배열(for in) : ", arr[i]);
}

for(let c of arr) {
  console.log("배열(for of) : ", c);
}

// 배열 map 함수 -> react의 30% 차지
console.log("배열 map 함수 : 콜백");

const arr2 = arr.map((v) => {
  console.log("arr map v : ", v)
  return v + "🍕";
});
console.log("arr2 : ", arr2);

// 콜백함수 인수가 1개일때 괄호 생략가능
// 콜백함수 바디에 실행문이 없고 return만 있으면 중괄호, return 생략가능
const arr3 = arr2.map(v => v + "🌭");
console.log("arr3 : ", arr3);






// 오브젝트
let obj = { "🍉": 1, "🍊": 2, "🍋": 3 }; // Tailing 쉼표가능
console.log("오브젝트 : ", obj);
console.log("오브젝트 요소 접근 : ", obj["🍉"]);

for(let i in obj) {
  console.log("오브젝트(for in) : ", obj[i]);
}

// 오브젝트 for of 사용시 -> Object.entries(변수명) 함수 사용
for(let c of Object.entries(obj)) {
  console.log("오브젝트(for of) : ", c);
  console.log("오브젝트 key(for of) : ", c[0]);
  console.log("오브젝트 value(for of) : ", c[1]);
}

// 오브젝트 구조 분해 -> let [k, v]
for(let [k, v] of Object.entries(obj)) {
  console.log("오브젝트 key(for of) : ", k);
  console.log("오브젝트 value(for of) : ", v);
}

console.log("오브젝트 키배열 : ", Object.keys(obj));
let arr4 = Object.keys(obj).map( k => k + obj[k]);
console.log("arr4 : ", arr4);


// 문자열, 배열, 오브젝트 -> 콜렉션
