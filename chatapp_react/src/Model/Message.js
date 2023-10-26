export default class Message {
    constructor(msgID, sender, receiver, time, message) {
        this.msgId = msgID;
        this.sender = sender;
        this.receiver = receiver;
        this.time = time;
    this.message = message;
  }
}