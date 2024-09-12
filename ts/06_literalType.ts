//literal : 값 자체를 의미함 
const PI = 3.14; // 한개의 변수값만 저장할 수 있는 const
//PI = 3.1456;


//literal type : 값을 여러개 관리할 수 있게 하는 문법 

//ex) 응답코드 (200, 400 등 쓸 때 사용되기도 함.) / 결제 수단 (은행, 카드, 계좌이체) - 고유한 값을 관리할 때 사용함. 안전하게 검증 가능 
let x:'kh 수달' | 'kh 호랑이' = 'kh 수달'; //문자열이면서 kh수달, kh호랑이 이라는 값 저장할 수 있다는 뜻
x = 'kh 호랑이';
//x = 'kh 앵무새'; //오류남. 


function pay(name:string, price:number, method:'card'|'bank' ) : 1 | 0{ // 반환형으로도 리터럴값 제시 가능. (결제 실패 0)
    console.log(`${name}님이 선택하신 결제방법은 ${method}이고, 가격은 ${price}입니다.`);
    return 1;
}

//let any2:any = '1234'
pay('kh 웸벳', 10000, 'card');
pay('kh 수달', 10000, 'bank');
//pay('kh 호랑이', 10000, 'point');


//리터럴 타입 쓸 때 많이 하는 실수 

let payInfo = {
    name : 'kh 웜벳',
    price : 10000,
    method : 'card'
};


let payInfo2 = {
    name : 'kh 웜벳',
    price : 10000,
    method : 'card' as 'card'
};
//pay(payInfo2.name, payInfo2['price'], /*payInfo2.method as 'card'*/payInfo2.method); //타입 단언문 사용 

//기장 안전한 방법 . 
let payInfo3 = {
    name : 'kh 웜벳',
    price : 10000,
    method : 'card'
} as const; // 모든 타입을 리터럴 타입으로 바꿔버리고, readonly도 걸어버림. 불변성확보해서 안전함. 
pay(payInfo.name, payInfo['price'], payInfo3.method); //타입 단언문 사용 

