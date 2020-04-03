import React from 'react';
import './App.css';
import FormContainer from "./FormContainer/FormContainer";
import UserList from "./UserList/UserList";


function App() {
  return (
    <div className="App">
        <UserList/>
        <FormContainer/>

    </div>
  );
}

export default App;
