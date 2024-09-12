//가져오기 위해서는 내보내기 기능 필요 
function sayHi(){
    console.log('hello module');
}
//export{sayHi}; //sayHi라는 함수를 내보낸다.

const abc = "abcde";
export {sayHi, abc};//한번에 여러개 내보낼 수 있음. 

export const fn1 = (a) => {console.log(a)};
//함수 호출과 동시에 내보낼 수 있다. 
export function fn2(b){
    console.log(b);
}

export default abc;// 기본 내보내기 값이 abc가 됨. (한개의 값만 default가 됨)
