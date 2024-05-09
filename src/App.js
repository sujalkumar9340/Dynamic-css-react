import logo from './logo.svg';
import './App.css';
import Background from './components/Background.jsx'
import Login from './components/Login.jsx'
const login=true;
function App() {
  if(login){
    return <div>
      <Login/>
    </div>
  }
  else{
    return(<div>
      <Background/>
    </div>)
  }
}
export default App;
