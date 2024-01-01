// 데이터 유형
let id = "KIM" + "RACHEL";
console.log(id); // KIMRACHEL

// 데이터 타입에 따라 연산이 달라지므로,
// 변수에 저장된 데이터 타입을 알고 있어야 한다.
let num = "21";
let total = num +10;
console.log(total); // 2110

// Boolean 형
let first = true;
let second = false;

// 배열
let names = ['kim', 'lee', 'kim', 'jin']
names.push('park')
console.log(names) // [ 'kim', 'lee', 'kim', 'jin', 'park' ]
console.log(names[0]) // kim
console.log(names.length) // 5

// 객체: 여러 개의 데이터를 키-값으로 관리
let member = {'name': 'kim', 'age': 30, 'city': 'seoul'}
member['membership'] = 'gold' // 요소 추가
console.log(member) // { name: 'kim', age: 30, city: 'seoul', membership: 'gold' }
console.log(member['membership']) // gold

// 배열과 객체 함께 쓰기
let members = [{'name': 'kim', 'age': 30, 'city': 'seoul', 'membership': 'gold'}, 
    {'name': 'lee', 'age': 35, 'city': 'seoul', 'membership': 'silver'}]
console.log(members);

// 배열에 객체 요소 추가하기
members.push({'name': 'seo', 'age': 31, 'city': 'suwon', 'membership': 'basic'})

