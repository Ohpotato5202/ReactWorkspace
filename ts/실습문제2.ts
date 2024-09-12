// 1) favorite1 , favorite2, favorite3에 대입된 3가지 문자열값만 
//     관리하는 타입별칭을 1개 만드시오
type Favorite = '치킨' | '햄버거' |'피자' ;

const favorite1:Favorite = '치킨';
const favorite2:Favorite = '햄버거';
const favorite3:Favorite = '피자';

//2) 실습문제1에서 구한 타입별칭을 활용하여 아래 함수 타입을 만드시오.
export type Print  = (name:string , favorite:Favorite) => void;

function print(name:string , favorite:Favorite){
    console.log(`안녕하세요 . 제 이름은 ${name}입니다. 제 최애 음식은 ${favorite}입니다,
    하나만 사주세요`);
}


//3) 다음 조건을 만족하는 Type별칭 만들기

// academy변수에는 name속성이 필수로 들어가며 항상 'kh'값만 들어가며 수정될 수 없습니다.

// academy변수에는 class속성이 필수로 들어가며 항상 문자열로된 배열데이터만 들어갑니다.

// academy변수에는 location속성이 들어갈 수도 있으며 문자열값만 들어갑니다.

// academy변수에는 manager속성이 들어갈 수도 있으며 ceo는 다음과 같은 데이터를 가질 수 있습니다. {name : 'mkm' , position: 'ceo'}

// 샘플 데이터 : {name : 'kh', class:['a','b','c','d','e'] , location : '강남' , manager : {name:'mkm', position:'ceo'}}
const academy: {
    name: 'kh';
    class: string[];
    location?: string;
    manager?: {name : string , position: string}

}={ name : 'kh', class:['a','b','c','d','e'] , location : '강남' , manager : {name:'mkm', position:'ceo'}};


//4) Object 값을 관리하는 Type별칭 만들기
// type1과 type2를 동시에 관리하는 타입별칭 1개
type Mbti1 ={
    mbti : string;
    feature: string[];
    vocation?: string;
}

const type1:Mbti1 = {mbti : 'ISTP', feature : ['망상가', '공감능력 부족'], vocation : '데이터분석가'};
const type2:Mbti1 = {mbti : 'INTJ', feature : ['완벽주의자', '무신경']};

// type3과 type4를 동시에 관리하는 타입별칭 1개
type Mbti2 ={
    mbti : string;
    bestGunghab: string[];
    worstGunghab?:string;
}

const type3:Mbti2 = {mbti : 'ISTP' , bestGunghab : ['ESFJ', 'ESTJ'] };
const type4:Mbti2 = {mbti : 'ESFJ' , bestGunghab : ['ISFP', 'ISTP'] , worstGunghab : 'ENFJ' };

// 위에서 구한 타입별칭을 활용하여 type5를 관리할 수 있는 타입별칭 만들기
type Mbti3 = Mbti1 & Mbti2;

const type5:Mbti3 = {mbti : 'ISTP' , bestGunghab : ['ESFJ', 'ESTJ'], feature : ['망상가', '공감능력 부족']  }; 

//5) 인터페이스들을 만드시오.
// mkm은 Teacher인터페이스로 관리합니다. 
// karina,winter는 Singer인터페이스를 선언하여 관리합니다.
// Teacher와 Singer의 공통속성은 제거 후  Person인터페이스에만 정의합니다.

// 다음 object를 보고 구현해야할 적절한 interface를 정의하시오

interface Person{
    name: string;
    married? : boolean;
}


interface Singer extends Person{
    songs:string[];
    group: string;

}

interface Teacher extends Person{
    major :string;
    classRoom: string;
    carrer: number;
}

const mkm = {name : 'mkm', married : false, major: 'it', classRoom : 'C' , carrer:10 };
const karina = {name : '카리나', married : false, songs: ['슈퍼노바','블랙맘바'] , group : '에스파'  };
const winter = {name : '윈터', songs: ['슈퍼노바','블랙맘바'] , group : '에스파' };

//6) 다음 같은 결과 값이 나오는 함수를 만든 후 함수타입도 함께 정의하시오.
// Destructuring문법
type Fn2 = ({name, age, location}:{name:string, age: number, location:string}) => void

const fn2:Fn2 = ({name,age,location}) => {
    console.log(`${location}에 사는 ${name}은 ${age}살입니다.`)
}
const person = {
    name : 'mkm',
    age : 35,
    location : '강남'
}
fn2(person); // 강남에 사는 mkm은 35살입니다.



// 7)  Object 타입을 정의하시오
//name에는 항상 'mkm'만 들어갈 수 있습니다.

// printName은 반환시키는 값이 없습니다.

// printName은 매개변수로 함수타입 데이터를 전달받습니다.

// callback은 반환시키는 값이 없습니다.

// callback은 매개변수로 문자열 데이터를 전달받습니다.

// call은 반환시키는 값이 없습니다.

// call은 매개변수가 없습니다.

// 각 함수의 타입은 별칭으로 구분하여 
type Callback = (str:string) => void
const obj:{
    name: 'mkm';
    printName: (callback:Callback) => void ,
    call: () => void

} = {
    name : 'mkm', 
    printName: function(callback) {        
        callback(this.name);
    },
    call : function() {
        this.printName((something)=> {
            console.log(something);
        })
    } 
};
obj.call(); // mkm

// 8) 
// fn함수의 매개변수로 전달되는 값은 반드시  길이 1이상의 number[]입니다.
// fn함수는 매개변수로 전달된 배열의 첫번째 값과 그 외 나머지값을 매개변수로 받습니다.
// fn함수는 나머지 값들에 첫번째 값을 더한 배열을 반환합니다.
// fn함수에 매개변수를 전달한 후 결과값은 다음과 같습니다.
// [1]을 전달하면 빈배열[]을 반환합니다.
// [1.2]를 전달하면 [3]을 반환합니다.
// [1,2,3]을 전달하면 [3,4]를 반환합니다.
// [1,2,3,4]를 전달하면 [3,4,5]를 반환합니다.

const fn = ([first, ...rest]:[number, ...number[]]):number[] => {
    for(let i=0; i<rest.length; i++){
        rest[i] += first;
    }
    return rest;
}
//fn([]) // error
fn([1]); // []
fn([1,2]); // [3]
fn([1,2,3]); // [3,4]
fn([1,2,3,4]); // [3,4,5]
