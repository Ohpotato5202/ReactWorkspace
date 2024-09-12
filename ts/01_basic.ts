//타입주석 
//let 변수명: 타입; ( java_자료형)
let num: number; // int num;
num = 12345;
//num = '12345';
num = num * 1;

// 배열 타입 주석 
// typeof [] ==> object
let animals:string[];
animals = ['hamster', 'cat'];

// 객체타입 주석 - 타입 맞춰야지 안맞추면 오류남. 
let animal:{name:string};
animal = {name:'햄스터'};

//타입추론 
let animal2 = {name : 'cat' , age : 11};
//animal2 = {name : 'dd' age : 1234};

//튜플? 자리수와 넘버값이 정해진 녀석! / '자릿수'가 맞아야함. 넘치거나 적음 안돼
//값 여러개를 묶어준다. 
let numArr:number[];
numArr = [1,2,3];
console.log(numArr[2]); //3
console.log(numArr[3]); // undefined
numArr = [1,2,3,4];

let numTuple:[number, number, number];
numTuple = [1,2,3];
console.log(numTuple[2]); //3
//console.log(numTuple[3]); //값없어서 오류 남. 

let tuple:[number, string, boolean];
tuple = [1, 'kh', true];

tuple.push(4); // 값 추가 //[1, 'kh', true, 4]
tuple.splice(0,1); //삭제 메소드 (0번째부터 하나 지우기)
console.log(tuple);

//값의 변경 불가(읽기 전용 속성으로 만들어주는것) : readonlyTuple
let readonlyTuple:readonly[number, string, boolean];
readonlyTuple = [1, 'kh', true];

//readonlyTuple.push(4); //메서드 사라짐. 
let readonlyObject:{readonly name : string, age: number}
readonlyObject = {name : 'kh', age: 11};
//readonlyObject.name = "mkm"; //읽기 전용이라 변경 안돼서 오류남. 
readonlyObject.age = 15; //읽기 전용 아니라 오류안남. 
//readonlyObject['name'] = 'mkm'; //읽기 전용 이라 변경 안돼서 오류안남. 

