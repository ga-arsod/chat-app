import { useEffect, useState } from 'react';
import io from "socket.io-client";
import { nanoid } from 'nanoid';


const socket = io("http://localhost:5000", {autoConnect: false});
const userName = nanoid(6);

socket.onAny((event, ...args) => {
  console.log(event, args);
});

interface Ipayload {
    message: string,
    userName: string
};

export const SampleChat = () => {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<Ipayload[]>([]);

  useEffect(() => {
    
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
    
  }, [chat]);

  const sendChat = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket.emit("chat", {message, userName});
    setMessage("");
  }

//   console.log(chat);
  return (
    <div>
      <h1>Sample of Chat App</h1>

      <div id='messages'>
        {chat.map((ele, index) => {
          return <h3 key={index}>{ele.userName}: {ele.message}</h3>
        })}
      </div>

      <form onSubmit={sendChat}>
        <input type="text" name='chat' placeholder='send text' value={message} onChange={(ele) => {
          setMessage(ele.target.value);
        }}/>

        <button type="submit">Send</button>;
      </form>
    </div>
  )
}
