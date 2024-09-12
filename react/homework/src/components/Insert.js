import { useState } from "react";

function Insert({list, setList}){

    let [movie, setMovie] = useState({
        bno: 0,
        title : '',
        genre : '',
        release_date : ''
    });

    function inputChange(e){
        let {name, value} = e.target;
        setMovie({
            ...movie , 
            [name] : value
        })
    }

    function insertMovie(){
        if(!(movie.bno && movie.title && movie.genre && movie.release_date)){
            alert('모든 입력값은 필수입니다');
            return;
        }
        let vaild = list.find((value) => value.bno == movie.bno)// {} / null ;
        if(vaild){
            alert('이미 사용중인 아이디 입니다.')
            return;
        }

        setList([...list, movie]);

        // 입력값 비워주기.
        setMovie({
            bno: 0,
            title : '',
            genre : '',
            release_date : ''
        })
    }

    return(
        <div>
            <h1>Create Movie</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <td>
                        <input type='text' placeholder="Input movie id" value={movie.bno}
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
                <button onClick={insertMovie} >Add Movie</button>
            </div>
        </div>
    )
}
export default Insert;