import { Route, Routes } from 'react-router-dom';
import './App.css';
import ToDoListFunction from './page/ToDoListFunction';
import ToDoListClass from './page/ToDoListClass';
import ToDoListUseReducer from './page/ToDoListUseReducer';
import ToDoListUseReducerImmer from './page/ToDoListUseReducerImmer';
import Header from './component/Header';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Header/>  }> 
          <Route index element={<ToDoListFunction/>}/>
          <Route path='/class' element={<ToDoListClass/>}/>
          <Route path='/usereducer' element={<ToDoListUseReducer/>}/>
          <Route path='/usereducer-immer' element={<ToDoListUseReducerImmer/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
