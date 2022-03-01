import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

const employeeContext=React.createContext();

function App()
{
  const [employee,setEmployee]=useState({Id:101,Name:'Reshmi',Location:'hyd',Salary:12345})
  return(
    <div>
      <h2>
        Welcome to App Component...
        
      </h2>
      <employeeContext.Provider value={employee}><Employee></Employee></employeeContext.Provider>

    </div>
  )
}

function Employee()
{
  let context=useContext(employeeContext)
  return(
    <div>
      <h2>
        Welcome to Employee Component...
        <Salary></Salary>
      </h2>
      <p>
        <label>Employee ID: <b>{context.Id}</b></label>
      </p>
      <p>
        <label>Employee Name: <b>{context.Name}</b></label>
      </p>
      <Salary></Salary>
    </div>
  )
}

function Salary()
{
  let context=useContext(employeeContext)
  return(
    <div>
      <h2>
        Welcome to Salary Component...
      </h2>
      <p>
        <label>Employee ID: <b>{context.Id}</b></label>
      </p>
      <p>
        <label>Employee Salary: <b>{context.Salary}</b></label>
      </p>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
