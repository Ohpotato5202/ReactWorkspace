//1)  타입 주석 작성해보기 
let animal:string[] = ['panda','cat','wombat','frog','hamster'];
let human: {name : string, age : number, height: number, married : boolean} = {name : 'mkm', age : 25, height: 180.5, married : false};


//2) 타입주석 작성 2
let zoo:{
    animals:string[],
    total:number, 
    isClosed:boolean,
    location:string,
    masterInfo:{name:string, age:number, height:number}
    } = {
    animals : ['panda','cat','wombat','frog','hamster'],
    total   : 120,
    isClosed : false,
    location : "용인",
    masterInfo : {
        name : 'mkm',
        age : 25,
        height : 180.5
    }
};


//3) 조건에 만족하는 타입 만들기 (tuple형태 만들 때 readonly권장)
const response:readonly[number, string] = [200 , "response success"]

//4) 타입 지정 
let array:(number|string|boolean|undefined|{name:string})[] = [12345, 'mkm', true, undefined]; // ok
array = ['mkm' , 12345, true]; // ok
array.push({name : 'mkm'}); // ok

//5) 자료형 맞추기 
//Q1. test1이라는 변수에는 undefined를 넣을 수 있습니다.
//    '1234'라는 값도 넣을수 있죠. 
//    1234를 넣으면 컴파일 에러가 발생하네요.
//    true값을 넣어도 컴파일 에러가 발생하네요.
//    test1의 타입은 무엇일까요?
let test1: string | undefined  = undefined; // ok
test1 = '1234'; // ok
//test1 = 1234; // compile error
//test1 = true; //compile error

//Q2. test2에는 true값을 넣을수 있습니다.
//    test1에 test2변수를 넣을수도 있죠.
//    test2는 UnionType은 아니고 , boolean타입 또한 아닙니다.
//    test2는 무슨 타입일까요? 
let test2 : any = true; // boolean(x) , UnionType(x)
test1 = test2; // ok

//Q3. test3에는 undefined값을 넣을수 있습니다.
//    test1에 test3을 넣으면 에러가 발생하네요
//    test3은 undefined타입이나 Union Type은 아닙니다.
//    test3의 타입은 무었일까요?
let test3 : unknown = undefined; // undefined (x) , UnionType(x)
//test1 = test3; // compile error


//6) 함수 타입 정의
//const apply:() => number = (a,b) => a+b;
const apply: (a: number, b: number) => number = (a, b) => a + b;

//7) racoonInfo함수 생성하기

const racoonInfo:(name:string, weight:number, gender:string, Neutralizing?:boolean) => string = function(name, weight, gender, Neutralizing){
    return "이름 : "+name+" 무게 : "+weight+" 성별 : " +gender+" 중성화 : "+Neutralizing
    // `이름 : ${name}, 무게 : ${weight} .....` 가능 
}


let data:string;
 
data = racoonInfo('podong' , 10, 'male', true );
console.log(data);//이름 : podong , 무게 : 10 , 성별 : male, 중성화 : true
data = racoonInfo('coco',4, 'female' );
console.log(data);//이름 : coco , 무게 : 4 , 성별 : female

//8) sum함수 몸통부분 완성하기 
const arrays: (string | number)[] = ['1', 2, 3, 4, '5'];

function sum(array: (string | number)[]): number {
    // let sum = 0;
    // for (const value of array) {
    //     sum += typeof value === 'string' ? parseInt(value) : value;
    // }
    let sum = 0;
    arrays.forEach((value) => {
        if(typeof value =='string'){
            sum += Number(value);   
        }else{
            sum += value;
        }
    })
    return sum;
}
const total = sum(arrays);
console.log(sum); // 15

// 9) 
// 매개변수로는 다음 데이터유형들이  전달됩니다.

// abc('11'), abc('12') , abc(['11','12','13','14'])

// 매개변수로 들어온 데이터가 string이라면 number자료형값을,  string[]이라면 number[]값을 반환합니다.

// 반환시킬 데이터는 전달받은 값이 '11'이라면 11, '12'라면 12, ['11','12','13','14'] 라면 [11,12,13,14]

function abc(param:string|string[]):number|number[]{
    if(typeof param == 'string'){
        return Number(param); //1조건 만족
    }
    else if(typeof param == "object"){
        let numberArr: number[] =[]; //2조건 만족

        for(let i =0; i<param.length; i++){
            numberArr[i] = Number(param[i])
        }
        return numberArr;
    }else{
        throw new Error();
    }

}










export const a = 1;
