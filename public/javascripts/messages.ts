interface message {
  text: String;
  user: String;
  added: Date;
}

const messages: message[] = [
  {
    text: "Obviously Javascript is the best language ever created.",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello Everyone! I just started learning from the Odin Project, nice to meet you all",
    user: "Charles",
    added: new Date(),
  },
];

export default messages;
