import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/Signin';
import AuthDetails from './AuthDetails';
import BasicExample from './components/auth/sign';
function App() {
  return (
    <div className="App">
      <SignIn/>
      <AuthDetails/>
    </div>
  );
}

export default App;
