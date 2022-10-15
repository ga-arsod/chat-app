import './App.css';

import { ChatList } from './Components/ChatList';
import { ChatPanel } from './Components/ChatPanel';
import { SampleChat } from './Components/SampleChat';
import { UserInfo } from './Components/UserInfo';



function App() {
  

  return (
    <div className="App">
      {/* <SampleChat/> */}

      <ChatList/>
      <ChatPanel/>
      <UserInfo/>
    </div>
  );
}

export default App;
