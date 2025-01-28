import { useState } from 'react';

import './App.css';


 function App() {
  /*JS*/
 const [tasks, setTasks]= useState([{id: 1, name: "Record Lac", completed: false},
  {id: 2, name: "Edit Record Lac", completed: true}, 
  {id: 3, name: "Watch Record Lac", completed: false}]);

   


  return (
    
  /*JSX*/
    <div className="App">
     <h1>Task List</h1>
     <ul>
      { tasks.map (({id, name,completed}) =>(
        <li>
          <span>{id} - {name}</span>
          <button>DELETE</button>
        </li>
      ))}
     </ul>
     </div>
     
  );
}
export default App;


