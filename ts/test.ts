function makePerson(name:string, age:number){//export안하면 하나의 namespace에서 같이 사용 / 같은 이름 js파일 주석처리 해주기..
    console.log(name, age);
}
//makePerson(11, 'jew'); //오류남. 
makePerson('jew', 11); //정상작동
//js로 컴파일까지 해주는것 : ts-node

