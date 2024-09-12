import { useState, useReducer } from "react";

function Counter(){

    const [count, setConunt] = useState(0);

    // 함수 4개로
    // count값을 +1, +10, -1, -10 시키는 기능 만들기.
    function plusOne(){
        setConunt(count+1);
    }
    function minusOne(){
        setConunt(count-1);
    }
    const plusTen = () => setConunt(count+10);
    const minusTen = () => setConunt(count-10);

    return(
        <>
            <button onClick={minusTen}> -10 버튼 </button>
            <button onClick={minusTen}> - 버튼 </button>
            {count}
            <button onClick={minusTen}> + 버튼 </button>
            <button onClick={minusTen}> +10 버튼 </button>
        </>
    )

}
export default Counter;