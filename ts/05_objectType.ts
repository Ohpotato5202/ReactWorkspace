type Person = { // 저장해두고 재사용하는것이 type주석임
    name : string;
    age : number;
};
type ID = string | number;
type strOrNumberArr = (string | number)[];


let person:Person; //타입 별칭 
person = {name : 'mkm', age: 15};

//interface - type보다 interface쓰는 것 권장. 
interface Animal{
    name : string;
    kind : string;
    birth? : Date;
}

type AnimalAliases = {
    name : string;
    kind : string;
    birth? : Date;
}

//interface와 type 공통점 : 객체타입 미리저장 하고 가져옴
//interface와 type 차이점 : interface가 확장성 더 높다. 

//extends 
interface Cat extends Animal{
    // name : string;
    // kind : string;
    // birth? : Date;
    food : string;
}

const cat: Cat = {food : '츄르', name:'coco', kind: 'cat'}//상속받은 추가적인 속성도 함꼐 기록해줘야 함.

interface Bird{ //동일한 interface 이름 : 안에 속성이 합쳐짐. (인터페이스만의 속성 : 중복선언 가능 )
    name : string;
}

interface Bird{ //마지막으로 선언한 interface
    //name : string;
    wings: number;
}

let bird1:Bird = {wings:4, name:'앵무새'};

//object intersection / union
type strOrNum = string | number;
//type strOrNum2 = string & number; //intersection연산자 : 사용처 - 객체타입끼리 교집합 선언할 때 사용
 
//intersection연산자 : 객체타입간의 속성 확장할 때 사용
type Dog = AnimalAliases & {food:string}; // name: string, kind:string는 AnimalAliases에 선언되어있음. 

const dog:Dog = {name:'꽃분이', kind:'dog', food:'개껌'};

//모든 객체타입은 interface다..?

type SuccessResponse = {
    status : boolean;
    data : any
}

type FailResponse = {
    status : boolean;
    errorMessage : string
}

type Response = SuccessResponse | FailResponse; // 둘중하나 선택하게 할 수 있는 type별칭

type bool = boolean;
type Num = number;





export default Response;