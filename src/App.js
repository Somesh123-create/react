import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const employee = true;
  const [role, setRole] = useState('dev');
  return (
    <div className="App">
      {employee ?(
        <>
          <input type="text" onChange={(e) => {
              setRole(e.target.value)

          }}/>
          <Employee name='Somesh' role='Intern' />
          <Employee name='Yogesh' role={role} />

        </>
      ) : (
        <p>You cant see employeees</p>
      )}
    </div>
  );
}

export default App;
