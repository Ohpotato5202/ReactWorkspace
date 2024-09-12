// state 초기값 설정
type Counter = {
    count : number;
}

const initialState:Counter = {count : 0};

// reducer 함수 정의

// 2) action 타입지정
type CounterAction = {
    type : string
    payload : any
}


function reducer(state = initialState , action = CounterAction){
    switch(action.type){
        case 'increase' :
            return {count : state.count + 1};
        case 'decrease' :
            return {count : state.count - 1};
        default :
            return state;
    }
}
export default reducer;