// import React from "react";
// import Bubble from "../Bubble/Bubble";
// import "./chatlist.css";
// import { useState } from "react";

// const ChatList = ({ user, chatWith, msgList, sendMsg }) => {
//   const [txt, setTxt] = useState("");
//   const handleChange = (event) => {
//     setTxt(event.target.value);
//   };
//   return (
//     <>
//       <h1>Chating With {chatWith.userName} </h1>
//       <div id="msg-list">
//         {Array.isArray(msgList) &&
//           msgList.map((msg) => {
//             console.log(msg.sender);
//             console.log(user);
//             return (
//               <Bubble
//                 message={msg.message}
//                 isMine={msg.sender.userId === user.userId}
//                 key={msg.msgID}
//               />
//             );
//           })}

//         <div id="flex">
//           <input
//             type="text"
//             placeholder="Enter your message here"
//             onChange={handleChange}
//             value={txt}
//           />
//           <button
//             onClick={() => {
//               setTxt("");
//               sendMsg(txt);
//             }}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChatList;

import React, { useState } from "react";
import Bubble from "../Bubble/Bubble";
import "./chatlist.css";

const ChatList = ({ user, chatWith, msgList, sendMsg }) => {
  const [txt, setTxt] = useState("");

  const handleChange = (event) => {
    setTxt(event.target.value);
  };

  const handleSend = () => {
    if (txt.trim() !== "") {
      sendMsg(txt);
      setTxt("");
    }
  };

  return (
    <div className="chat-list-container">
      <h1>Chatting With {chatWith.userName}</h1>
      <div className="message-container">
        {Array.isArray(msgList) &&
          msgList.map((msg) => (
            <Bubble
              message={msg.message}
              isMine={msg.sender.userId === user.userId}
              key={msg.msgID}
            />
          ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message here"
          onChange={handleChange}
          value={txt}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatList;
