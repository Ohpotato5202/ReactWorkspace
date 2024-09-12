import { useNavigate, useParams } from "react-router-dom"

export default function Detail({list}){
    let {bno} = useParams();
    const movie = list.find( value => value.bno == bno);
    const navi = useNavigate();
    return (
        <div>
            <h1>Detail Movie</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <td>
                        <p>{movie.bno}</p>                       
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td>
                        <p>{movie.title}</p>
                    </td>
                </tr>
                <tr>
                    <th>장르</th>
                    <td>
                        <p>{movie.genre}</p>
                    </td>
                </tr>   
                <tr>
                    <th>출시일</th>
                    <td>
                        <p>{movie.release_date}</p>
                    </td>
                </tr>    
            </table>
            <div>
                <button onClick={()=> navi('/update/'+bno)}>Update Movie</button>
            </div>
        </div>
    )
}