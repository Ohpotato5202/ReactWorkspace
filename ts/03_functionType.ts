//함수에 type적용 : 함수에는 매개변수 뿐 아니라 반환되는 타입도 정할 수 있다. 
function greet(name:string):void{//: void => 반환시키는 값이 없을 떄 
    console.log('안녕'+name);
   
}

greet('어머니');
//greet(1234); 이상한 값 넣으면 오류 남. 

let b:() => number = function():number{//:number -> 함수 타입
    return 1;
};
//let b:(매개변수) => number (함수 타입)

//Optional Parameter
//:{name:string}
let arr = [1,2,3,4,5]
arr.forEach((value)=>{
    console.log(value);
})

function fnOptional(a:number, b?:number){ // ?쓴 이유는 값 넣어도 되고, 안넣어도 돼서.
    // if(b != undefined)
    // return a * b ; // a*b같이 산술연산 불가. b - undf일 수 있으므로 (쓰려면 if문 쓰기)

    //return b != undefined ? a * b : 0;
    return b ? a*b : 0;
}

console.log(fnOptional(1));
console.log(fnOptional(1, 2));
