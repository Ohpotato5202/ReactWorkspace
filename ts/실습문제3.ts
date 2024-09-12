//1)class정의
// 생성된 객체에는 introduction이라는 메서드가 존재하며 생성된 객체의 name, addres, age속성을 활용하여 다음과 같은 내용을 출력합니다.  출력예시는 위의 샘플 데이터를 기준으로 작성되었습니다.
// 안녕 난 mkm이라고해.서울에 살고 나이는 1234야
// introduction은 매개변수가 없고, 반환형도 없습니다.
// name은 문자열, age는 숫자, address는 문자열 값이 들어가며 객체를 생성할때 반드시 제시해야합니다.
class Person {
    constructor(public name:string, public age: number, public address:string){

    }
    introduction = () => {
        console.log(`안녕 난 ${this.name}이라고해. ${this.address}에 살고 나이는 ${this.age}야`)
    }
}
// {name : 'mkm', 
//     age : 1234 , 
//     address : '서울', 
//     introduction : ?
//   }
  const mkm:Person = new Person('mkm',1234,'서울'); 
  mkm.introduction(); // 안녕 난 mkm이라고해.서울에 살고 나이는 1234야


  //2) class 정의 
  
// Hamster 객체 생성시 첫번째 , 두번째 매개변수는 필수이며 문자열값이 들어갑니다.
// Hamster 객체 생성시 세번째 매개변수에는 값이 전달되지 않을 수도 있습니다.
// 전달되는 값은 문자열값입니다.
// 전달된 경우와 절달 되지 않은 경우의 출력문은 다릅니다.
// Hamster에는 food속성 , Pet에는 kind,name속성이 존재합니다.
// Hamster는 Pet클래스를 상속받습니다.
// 상속방법이나 부모생성자 호출방법등 잘 모르는 기능들은 메뉴얼, 검색등을 통해 해결합니다.
class Pet{
    constructor(public kind:string, public name:string){
    }

}
class Hamster extends Pet{

    constructor(public kind:string, public name:string, public food?:string){
        super(kind, name);
    }
    info(){
        console.log(`이 햄스터는 페디그리 ${this.kind}종이며, 이름은 ${this.name}입니다.`);
        this.food && console.log(`주식은 ${this.food}를 먹습니다.`);
    }
}
const hamzzi:Hamster = new Hamster('페디그리 햄스터', '햄찌', '해바라기씨');
hamzzi.info();
//이 햄스터는 페디그리 햄스터종이며, 이름은 햄찌입니다.
//주식은 해바라기씨를 먹습니다.

const podong:Hamster = new Hamster('골든 햄스터', '포동');
podong.info();
//이 햄스터는 골든 햄스터종이며, 이름은 포동입니다.

//3) 
// coin에는 속성을 자유롭게 추가할 수 있습니다.

// coin에 추가된 속성은 반드시 string  혹은  number 타입이어야 하며 
// 그 외의 타입의 값을 추가할  시 반드시 에러가 발생해야 합니다.

const coin:{
    [x:string] : string | number;

} = {
    ticker : 'BTC',
    market : 'KRW',
    description : '최초의 암호화폐'
}
//1) price속성 추가
coin.price = 10000000; //ok
//2) rank속성 추가
coin.rank = 1; // ok
//3) trade속성추가
// coin.trade = true; // error
// coin.trade = undefined; // error
// coin.trade = null// error
console.log(coin);
