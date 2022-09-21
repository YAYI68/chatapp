
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { useStateContext } from './contexts/AuthContextProvider';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';


function App() {
  const { currentUser} = useStateContext();
  console.log({currentUser})
  return (
    <div className=""> 
      <Routes>
      <Route path="/">
        <Route index element={ <Home />  } />
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={ <Register/> } />
      </Route>
      
      </Routes>
    </div>
  );
}

export default App;
