let arr = [1,2,3];
let a = arr[0];
let b = arr[1];
let c = arr[2];

let[d,e,f,g = 12345] = arr;
//arr  d = 1/ e = 2, / f = 3이 담기게 됨.
console.log(g); // g = undefined (g에는 값이 없기 떄문에) //g = 12345 -초기화 구문. 원하는 값 안에 넣을 수 있음

const [h, i] = [a, b]; // 순서에 맞춰서 값이 대입된다. 
console.log(h, i); // 1, 2


//코드 편하게 사용하기 위해 만든 것임
const obj = {
    foo : 1, //key값 
    bao : 2 // value값
}
const foo = obj.foo; // 1
const bao = obj["bao"]; //  2

//간단하게 변수로 선언할 수 있는 방법 : Destructuring문법 
//const {foo, bao} = obj;

const {foo : foo1, bao : bao1 , bar = 12345} = {foo : 1, bao : 2};
console.log(foo1, bao1, bar); //1 2 undefined  // bar = 12345 초기값 설정도 가능 .

console.log("==========================================");


const sample_arr = [1,2,3,4];
const sample_obj = {name : 'jew', job : 'teacher'};

function test(a, ...rest){//(...rest) : 함수의 매개변수에 사용 되었을 때는 나머지 값을 하나로 받아주는 것. 
    console.log(rest);
}
test();
test(1); // a에 할당됨. [] 빈값 출력됨
test(1, 2, 3);
test(sample_arr);//[] : 배열데이터 하나만 담긴걸로 인식됨
test(...sample_arr);// 배열 데이터 모두 꺼내서 쓰고싶을 때 사용 (함수의 매개변수가 아닌 다른 공간에서 ...사용하면 배열[]지우고 1,2,3,4만 사용하게 됨)

const copy_arr = sample_arr; // 얕은 복사
const copy_arr2 = [...sample_arr]; // 깊은 복사 - 배열 안에 데이터를 하나하나 가져와서 펼침. = [1,2,3,4]


//객체 형태의 배열 연산자 
const human = sample_obj; //얕은 복사 {name : 11, job:22}
const human2 = {...sample_obj}; //깊은 복사  {} 벗겨내서 내부의 값 쭉 펼침 ->  name : 11, job:22

// -----------------------------------------------------------
// 구조분해할당과 REST문법의 조합
const array = [1,2,3,4];
const [first, ...rest] = array; // first  = 1 저장 , rest = [2,3,4]묶어서 저장

const person = {name:'jew', job:'teacher', firstName : '전'};
const {firstName, ...rest2} = person;//한번에 다 받아올 수 있음. 
console.log(firstName, rest2); //전 { name: 'jew', job: 'teacher' }
//rest2 = {name:'jew', job:'teacher'} 들어감 
// => 특정 속성 제외한 나머지 값 배열 형태로 묶어주기 

function printPerson({one, two, ...rest}){
    console.log(one); //unde
    console.log(two); //unde
    console.log(rest); // person -> { name: 'jew', job: 'teacher', firstName: '전' } 

}
printPerson(person);
// const {one, two, ...rest} = person 
// 속성명 일치 여부가 중요함. one, two라는 이름 속성이 없어서 undefined










