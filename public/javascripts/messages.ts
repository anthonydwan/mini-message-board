interface message {
  text: String;
  user: String;
  added: Date;
}

const changeTime = (hr: number, min: number) => {
  let d = new Date();
  d.setHours(d.getHours() - hr);
  d.setMinutes(d.getMinutes() - min);
  return d;
};

const messages: message[] = [
  {
    text: "Obviously Javascript is the best language ever created.",
    user: "Amando",
    added: changeTime(2, 13),
  },
  {
    text: "Hello Everyone! I just started learning from the Odin Project, nice to meet you all",
    user: "Charles",
    added: changeTime(5, 34),
  },
];

export default messages;
