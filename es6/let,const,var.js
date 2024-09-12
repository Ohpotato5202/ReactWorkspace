function testScope(){
    var foo = 1; //poo, bar 모두 호출 가능
    if(foo ==1){
        var poo = 2;
    }
    for(var bar =3; true;){
        break;
    }
    console.log(foo);// var 변수는 어느 위치에서든 실행 가능 
    console.log(poo);
    console.log(bar);
}

//testScope();

function testScope2(){
    const foo = 1;
    if(foo == 1){
        const poo = 2; // 함수 최상단으로 끌어올려지지 않고 블록 레벨 스코프 
    }
    for(let bar =3; false;){

    }
    console.log(foo);
    console.log(poo);//poo가 정의되지 않는 에러 뜸 어디에서도 선언되지 않은 변수로 인해 에러 뜸 
    console.log(bar); 
}
//testScope2();

//let(값이 바뀌어도 상관없는 함수에 사용) vs. const (값이 바뀌면 안되는 함수에 사용)
const a = 1; // 바뀌면 안되는 함수값에 const주로 사용함 
//a =2;  // 오류남. const변수에 새로운 값을 정의하려 하고있다는 오류 ( Assignment to constant variable.)

let b = 1;

var fn1 = function(){
    console.log('fn1');
}
var fn1 = function(){
    console.log('new fn1');
}
const fn2 = function(){
    console.log('new const fn1'); //오류남. (Identifier 'fn1' has already been declared)
    //변수의 중복선언 막아주기 때문에 const사용
}

//const fn2 = function(){
//}
fn2();




