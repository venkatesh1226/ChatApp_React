import { useEffect, useState } from "react";
import Navbar from "./components/NavBar/navbar";
import "./App.css";
import Users from "./components/Users/Users";
import ChatList from "./components/chatlist/ChatList";

function App() {
  const BASE_URL = "http://localhost:8008";
  const [curUser, setCurUser] = useState({ userId: 1, userName: "user A" });
  const [chatWith, setChatWith] = useState(curUser);
  const [users, setUsers] = useState([{ userId: 1, userName: "user A" }]);
  const [msgList, setMsgList] = useState([
    { msgID: 1, sender: {}, receiver: {}, message: "Hello", time: "1:00PM" },
  ]);
  const [msg, setMsg] = useState("Hello");

  useEffect(() => {
    fetch(`${BASE_URL}/get-users`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/get-msg-list/${curUser.userId}/${chatWith.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMsgList(data));
  }, [chatWith, curUser]);

  const sendMsg = (msg) => {
    // setMsg(msg);
    fetch(`${BASE_URL}/send-msg`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: curUser,
        receiver: chatWith,
        message: msg,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMsgList(data);
      });
  };

  return (
    <>
      <Navbar users={users} curUser={curUser} setCurUser={setCurUser} />
      <div className="main">
        <div className="chat-users">
          <Users users={users} setChatWith={setChatWith} />
        </div>
        <div className="chat-list">
          <ChatList
            user={curUser}
            chatWith={chatWith}
            msgList={msgList}
            sendMsg={sendMsg}
          ></ChatList>
        </div>
      </div>
    </>
  );
}

export default App;
