//인덱스 시그니처 문법 - 데이터 전체를 관리 
type User = {
    name:string,
    age: number,
    interest : string[]
}
type UserList = {
    [x:string] : User//반환값이 string (key값)인 특정 변수명 x (key값에는 string, number밖에 올 수 없음.)
}


const responseData:UserList = {
    "user01" :{//객체 배열로 생각하기 
        name:"kh 호랑이",
        age: 50,
        interest : ['낮잠']
    },
    "user02" :{
        name : 'kh 수달',
        age: 5,
        interest: ['잠수']
    }
}

type Class={
    [x:string] : string | number //studentCount 만 number속성값 적용시킬수는 없음. 
}

const responseData2 = {
    name : 'kh academy',
    classRoom : 'C CLASS',
    teacher : 'mkm',
    student1 : '...',
    //...
    studentCount:30
}


//ReturnType : ts Utily Type. - 반환형을 type으로 만들고 싶을 때 
function foo() : {a:number, b:number}{
    return {a:1, b:2}
}

type FooReturnType = ReturnType<typeof foo>;

//in 문법 
type A = {
    a : string
}

type B = {
    b : string
}
function checkIn(obj: A | B){ // 바로 obj.a 접근 불가. in 구문 써야함. 
    if("a" in obj){ // a가 obj에 있을 떄 반환 
        return obj.a;
    }
    if("b" in obj){ // b가 obj에 있을 떄 반환 
        return obj.b;
    }
    return 1;
}

// instanceof : 클래스로부터 생성된 객체에서 사용됨 // 어떤 객체를 참조하는지! 참조한 것이 맞는지
const date = new Date();
console.log(date instanceof Date); //true

