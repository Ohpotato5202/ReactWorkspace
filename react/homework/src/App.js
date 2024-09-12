import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import List from './components/List';
import Insert from './components/Insert';
import Detail from './components/Detail';
import Update from './components/Update';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  let [list, setList] = useState([{
    bno : 1,
    title: 'Movie 1',
    genre: 'Drama',
    release_date:'2022-01-1'
  },{
    bno : 2,
    title: 'Movie 2',
    genre: 'Action',
    release_date:'2022-02-1'
  },{
    bno : 3,
    title: 'Movie 3',
    genre: 'Comedy',
    release_date:'2022-03-1'
  }]);
  let [name,setName] = useState('C CLASS');
  //let param = {list:list};

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<List list={list} setList={setList} ></List>}/>
        <Route path='/list' element={<List list={list} setList={setList} ></List>} />
        <Route path='/insert' element={<Insert list={list} setList={setList} />}/>
        <Route path='/detail/:bno' element={<Detail list={list} />}/>
        <Route path='/update/:bno' element={<Update list={list} setList={setList} />} />
      </Routes>
    </div>
  );
}

export default App;
