import './App.css';
// import { Button } from 'antd';
import Notes from './components/Notes';
// import TodoList from './TodoList';


function App() {
  let list = [1, 2, 3, 4]
  const handleclick = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className="App">
      <input className='test' onClick={handleclick}></input>
    </div>
  );
}

export default App;
