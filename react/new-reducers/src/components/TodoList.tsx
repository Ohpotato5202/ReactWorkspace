import { useState  } from "react"
import { useSelector, useDispatch  } from "react-redux"
import { addTodos, checkTodos, deleteTodos } from "../features/todoListSlice";
import { RootState } from "../store/store";


export default function TodoList(){

    let [input, setInput] = useState('');
    const {todolist} = useSelector((state:RootState)=> state);
    const dispatch = useDispatch();

    const textDeco = {textDecoration: 'line=through'};

    return (
        <div>
            <h2>Todo List</h2>
            <input type="text" value={input} onChange={(e)=> {
                setInput(e.target.value);
            }}/>
            <button onClick={()=> {dispatch(addTodos(input))}}>Add</button>
            <ul>
                {
                 todolist.todos.map((todoItem) => {
                    return (

                        <li style={{listStyle:"none"} }>
                           <span style={
                                todoItem.isDone ? textDeco : {}
                           } onClick={()=>{
                                dispatch(deleteTodos(todoItem))
                           }}>{todoItem.text}</span>
                           <span onClick={()=>{
                                dispatch(deleteTodos(todoItem))
                           }}>❌</span>
                            </li>
                    )
                 })
                }
            </ul>
        </div>
    )
}