import JSONDATA from './MOCK_DATA.json';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <div className="input">
      <input className="input-field" type="text" placeholder="Search..." onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      {JSONDATA.filter((val)=>{
        if(search === ''){
          return val;
        }else if(val.first_name.toLowerCase().includes(search.toLocaleLowerCase())){
          return val;
        }
      }).
        map((data, key) => {
        return(
          <div key={key}>
          <p>
            {data.first_name}
          </p>
            </div>
      )})}
    </div>
  );
}

export default App;
