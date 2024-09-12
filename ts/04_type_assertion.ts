//type assertion 
function typeAssertion(strOrNumber:string|number):number{
    return strOrNumber as number; // strOrNumebr를 number로 생각해라! (타입단언) - 타입 체크기능을 우회하는것임
    //return <number>strOrNumebr; -> 타입단언 옛날 구문 

}
console.log(typeAssertion('1234'));

function typeAssertion2(number?:number):number{ //선택속성이라 UNDF나올 수 있음 .
    return number!; // not null Assertion : not null이라 단언하는 것. (개발자가 속성 보증하는것 ㅎ)
}
console.log(typeAssertion2()); //undefined

function typeNarrowing(strOrNumber:string|number):void{ 
    if(typeof strOrNumber == 'string'){
        console.log(strOrNumber);//문자열과 관련된 함수 쓸 수 있다. 
    }
    else if (typeof strOrNumber == 'number'){
        console.log(strOrNumber);//유니온 타입이 number로 축소됨
    }else{
        let value:never;
        value = strOrNumber;
        throw new Error('Unexpected Value : '+value); // 예상하지 못한 에러를 넣어줬다고 메세지 띄우기
        console.log(strOrNumber);
    }
}
typeNarrowing(1);
let any:any = true;
typeNarrowing(any);

//예외처리함수 
function UnexpectedValueException(value:never) :never{
    throw new Error (`Unexpected Value : ${value}`);
    //return undefined : 리턴문에 접근할 수 없음. (반환형 never로 만들기)
}

function fnNever(){//리턴문에 도달하지 못하게 하는 방법 
    while(true){

    }
    return undefined;
}