function print(str:string) :void{
    console.log(str);
}
type Print = (s:string) => void;
const print2:Print = (str) => {
    console.log(str);
}

function hello(callback:(s:string) => void) :void{
    callback("hello ts");
}

const hello2 = (callback:(s:string) => void) : void => {
    callback("hello ts");
}

const hello3 :(callback:(s:string) => void) => void = (callback:(s:string)=> void): void =>{
    callback("hello ts");
}
hello(print2);

type PrintFunction = (s:string) => void;
type HelloFunction = (callback:PrintFunction) => void;

const hello4:HelloFunction = (callback) => callback("hello ts");


//restParameter
function restParameter(...m:number[]){//길이가 정해진 함수 
    console.log(m);
}
restParameter();
restParameter(1);
restParameter(1,2);

const spreadArr = [1,2.3,4,5]; // 1,2,3,4,5
restParameter(...spreadArr);

function normalFn(a:number, b:number){
    console.log(a,b);
}
const spreadArr2:[number, number] = [11,22] as const; //리터럴 블록으로 만들기 
normalFn(13,14);
normalFn(...spreadArr2); //길이 2짜리 튜플이 됨



//==============================================
function objectDestructuringFn({a,b,c}){//매개변수 객체 형태로 받기 
    console.log(a,b,c);
}
function arrayDestructionFn([a,b,c]:[number, string, boolean]){
    console.log(a,b,c);
}

function arrayDestructionFn2([a, ...rest] : [a:number, ...rest:number[]]){
    console.log(a,rest); //1 [ 2, 3, 4 ]
}
arrayDestructionFn2([1,2,3,4]);


const obj = {
    a : 1, 
    b : '2',
    c: true
};
objectDestructuringFn(obj); // 1 2 true 출력

//객체 타입에서는 ...rest사용하는것이 복잡하고 어려움. 
function objectDFn2({a, ...rest} : {
    a : number,
    [x:string] : number | boolean | string

}){//객체 형태로 넣기  (타입 지정이 안됨, 하려면 타입을 any로 해야함.)
    console.log(a,rest);
}
objectDFn2(obj);
