import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function Update({list , setList}){

    let {bno} = useParams();
    const m = list.find((value) => value.bno == bno);
    const [movie, setMovie]  =useState(m);
    const navi = useNavigate();

    const inputChange = (e) =>{
        const {name,value} = e.target;
        setMovie({
            ...movie,
            [name] : value
        })
    }

    const updateMovie = () =>{
        if(!(movie.title && movie.genre && movie.release_date)){
            alert("필수입력값입니다.")
            return;
        }

        let m = list.find( (value) => value.bno == movie.bno);
        m.title = movie.title;
        m.genre = movie.genre;
        m.release_date = movie.release_date;

        setList([...list]);
        navi('/list');
    }

    return(
        <div>
            <h1>Update Movie</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <td>
                        <input type='text' readOnly placeholder="Input movie id" value={movie.bno}
                         name='bno' onInput={inputChange} />
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td>
                        <input type='text' placeholder="Input movie title" value={movie.title} 
                        name='title' onInput={inputChange} />
                    </td>
                </tr>
                <tr>
                    <th>장르</th>
                    <td>
                        <input type='text' placeholder="Input movie genre" value={movie.genre}
                        name='genre' onInput={inputChange} />
                    </td>
                </tr>   
                <tr>
                    <th>출시일</th>
                    <td>
                        <input type='date' value={movie.release_date}
                        name='release_date' onInput={inputChange} />
                    </td>
                </tr>    
            </table>
            <div>
                <button onClick={updateMovie} >Update Movie</button>
            </div>
        </div>
    )
}