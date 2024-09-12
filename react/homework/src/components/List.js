import { useNavigate } from 'react-router-dom';
import {Table, Button, Input} from 'reactstrap';

function List(props){

    let {list, setList} = props;

    let navi = useNavigate();

    function deleteMovie(bno){
        // let index = 0;
        // for(let i =0; i<list.length; i++){
        //     if(list[i].bno == bno){
        //         index = i;
        //         break;
        //     }
        // }
        // list.splice(index,1);
        // console.log(list);
        let filteredArr = list.filter((value) => value.bno !== bno);

        //setList([...list]);
        setList(filteredArr);

    }

    return <div id='movie-area'>
        <h1>KH1-Movies</h1>
        <table>
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>장르</th>
                    <th>개봉날짜</th>
                    <th>상세보기</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map( (value,index) => (
                        <tr key={index} onClick={() => {
                            navi('/detail/'+value.bno)
                        }} >
                           <td>{value.bno}</td>
                           <td>{value.title}</td>
                           <td>{value.genre}</td> 
                           <td>{value.release_date}</td>
                           <td>
                            <button onClick={(e)=>{
                                e.stopPropagation();
                                deleteMovie(value.bno)
                            }} >Delete</button>
                           </td>
                        </tr>
                    ))  
                }
            </tbody>
        </table>

        {/* 게시글 등록 */}
        <button onClick={()=> navi('/insert')}>add Movie</button>

    </div>
}
export default List;