import './App.css';
import { Leftmenu } from './components/Leftmenu';
import { Maincontainer } from './components/Maincontainer';
import { Rightmenu } from './components/Rightmenu';

function App() {
  return (
    <div className="App">
      <Leftmenu/>
      <Maincontainer/>
      <Rightmenu/>
      <div className="background"></div>
    </div>
  );
}

export default App;
