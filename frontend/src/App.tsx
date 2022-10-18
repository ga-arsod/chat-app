import './App.css';

import { ChatList } from './Components/ChatList';
import { ChatPanel } from './Components/ChatPanel';
import { Login } from './Components/Login';
import { SampleChat } from './Components/SampleChat';
import { Signup } from './Components/Signup';
import { UserInfo } from './Components/UserInfo';



function App() {
  

  return (
    <div className="App">
      <SampleChat/>

      {/* <Login /> */}
      {/* <Signup /> */}

      {/* <ChatList/>
      <ChatPanel/>
      <UserInfo/> */}
    </div>
  );
}

export default App;
