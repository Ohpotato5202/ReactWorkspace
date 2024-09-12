//1. any type : 정적 타입 체크가 어럽다. (최악!)
let any:any = undefined;
any = 1;
any = 'mkm';

let str:string;
let num:number;
let undef:undefined;

str = any; //타입체크 안함. 
num = any;
undef = any;


//2. unknown Type : 어떤 값이든 넣을 수 있되(어떤 값이든 받아야하는 상황에서 사용),
//                  자료형을 확정시켜주지 않으면 쓸 수 없음.
let unknown:unknown;

unknown = 1;
unknown = 'mkm';

// str = unknown; // 타입체크 함. : 문자열 값만 넣을 수 있는데 unkown값이 들어가서 오류 
// num = unknown;

//공통점 : 모든 타입의 값을 저장할 수 있음.
//차이점: any: 타입체크 안함. unknown: unknown값을 다른 타입으로 넣으면 오류 남. 


//3. union type : 여러가지 타입 합쳐줌 (여러가지 타입 함꼐 쓸 때 best)
let stringOrNumber:string | number ; // '|' 합집합 시켜주는 연산자 / string 이나 number값 쓸 수 있다. 
stringOrNumber = "Union Type"; //타입이 정해지는 순간은 값이 대입되는 순간이다!~
stringOrNumber  = 12345;
//stringOrNumber  = true;

let unionArr: (string | number | boolean)[];
unionArr = [1,2,3,4,5,6,"7", "8", "9", "10", true, false];


export {str};