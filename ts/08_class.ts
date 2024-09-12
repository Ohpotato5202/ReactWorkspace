
//자바스크립트 방식 - 오류남. -> ts방식으로 속성 추가해줘야함. 
class Animal {
    // public age: number; //ts에서 추가시켜줘야하는 속성 
    // public name: string;//ts에서 추가시켜줘야하는 속성 
    // //public, protected, private - 접근제한자 

    constructor(public age:number,public name:string){ // 축약버전 
        // this.age = age;
        // this.name = name;
    }
    bark(){
        console.log('어흥');
    }
} 

const khTiger = new Animal(35,'kh 호랑이');
khTiger.bark();

//자바에서는 없고 ts에서만 제공하는 문법 (접근제한자 함께 쓰기)
class ParameterProperties {
    constructor(public a:string, protected b:string, private c:string, readonly d:string){//속성 4개 가질 수 있는 class정의 
        //생성자의 매개변수로 접근제한자 쓰면 자동으로 해당 클래스 필드에 등록됨. 
        //초기화 구문 (this.a =a;)필요 없음. 담아준 값으로 알아서 생성됨. 
    }

    printProperties(){
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
        console.log(this.d);
    }
}
let PP = new ParameterProperties('1','2', '3', '4');
PP.printProperties(); 

//private접근제한자는 완벽하게 접근 제한하지 못한다.... ???
console.log(PP['b']);