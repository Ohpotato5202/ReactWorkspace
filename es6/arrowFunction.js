// arrowFunction 화살표 함수 
function declareFn(a, b){
    return a*b;
}


const declareFn2 = function(a,b){// 익명함수 
    return a*b;
}

const declareFn3 = (a,b) => { //화살표 함수 (자바 람다식과 비슷)
    return a*b;
}

const declareFn4 = (a,b) =>  a*b;//화살표 함수 (자바 람다식과 비슷)

const declareFn5 = a =>  a;//매개변수 하나일 때만 괄호 생략 가능 

//--this 
// this에는 global이라는 최상위 객체 할당 window와 같은 느낌 
function callableFn(){
    console.log(this.name);
}
callableFn(); // this = global // this.name = undefined

// this : 자바에서는 누가 호출하는지에 따라 동적으로 적용됨. 
// this : obj1이 할당됨. 
const obj1 = {
    name : '객체1', 
    call : callableFn
}
obj1.call();

const obj2 = {
    name : '객체2', 
    call : callableFn
}
obj2.call();

//const arrowFn = function(){ //익명함수 -> 객체 3호출됨
//    console.log(this);
//}
//arrowFn(); // {}객체가 호출 됨. 


const arrowFn = () => {
    console.log(this); //상위 스코프의 this함수 호출됨. (arrow함수 호출된 위치에서 상위 스코프 호출됨)
}
arrowFn(); // {}객체가 호출 됨. 


const obj3 = {
    name: '객체3',
    call: arrowFn
}
obj3.call();


//화살표 함수의 this바인딩
const obj4 = {
    name : '객체4',
    arrowFn : function(){  // 보이지않는 this값 있음. 
        //메서드 추가할 때 보통은 '익명함수'로 추가함. 
        //(화살표 함수 사용하면 객체4 사용 불가. undf나옴 - 상위 스코프의 this사용하려고 하고 그건 현재 빈객체임 )
        //console.log(this.name);

        const getName = () => { //상위 스코프 찾아감. -> 익명함수 -> 익명함수 this의 name값 찾아가므로 객체4나옴
            return this.name; // 객체 4
        }

        const getName2 = () => { //상위 스코프 안찾아감 현재 스코프 안에 this가 있음. -> 익명함수 -> 익명함수 this의 name값 찾아가므로 객체4나옴
            return this; //{ name: '객체4', arrowFn: [Function: arrowFn] }
        }
        console.log(getName()); 
        console.log(getName2()); 
    }
}
obj4.arrowFn();

// 콜백함수 callback - 인수로 전달된 함수 내부에서 실행됨. 혼자 실행되지 않음. 

const obj5 = {
    name : '객체5',
    fn : function(callback){// 전달받은 메서드를 다른 함수 안에서 실행시킨다...
        callback(); 
    },
    call : function(){ 
        this.fn(()=> {
            console.log(this.name)//익명함수로 하면 글로벌 바인딩이 됨. -> this값 글로벌로 없음. 
        })
    }
}
obj5.call();

const obj6 = {
    name : '객체6',
    call : function(){
        //this ->  obj6
        // setTimeout(()=> { //정적
        //     console.log(this.name); // 객체6 -> 상위 요소의 this값 찾기 -> obj6의 name값 찾아가게됨
        // }, 1000);
        // setTimeout(function() { //동적
        //     console.log(this.name); // undefined -> this에 값 없음
        // }, 1000);
        const callback = function(){
            console.log(this.name); 
        }
         setTimeout(callback.bind(this), 1000);
    }
}
obj6.call();

//일반함수 this 강제 바인딩 
const obj7 = {
    name : '객체7', 
    callableFn : function(){
        console.log(this.name);
        console.log(arguments); //callableFn 매개인자 모두 불러옴. 
    }
}
obj7.callableFn(); // 객체7
obj7.callableFn.call(obj1);//call(); 첫번째 매개변수로 this값 정적으로 바인딩 (this = obj1) - 지정한 값으로 바인딩시킴
obj7.callableFn.call(obj1, 1,2,3,4);//배열형태
obj7.callableFn.call(obj2,[1,2,3,4]);
obj7.callableFn.call(obj3); // this만 바인딩





