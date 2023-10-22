import './App.css';
import Login from './Components/Login/login';
import PasswordReset from './Components/PasswordReset/passwordreset';
import SignUp from './Components/SignUP/signup';
import { Route, Routes } from 'react-router-dom';
import LoginSuccess from './Components/LoginSuccess/home';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/login/success" element={<LoginSuccess />} />
        <Route path="/password-reset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}

export default App;
