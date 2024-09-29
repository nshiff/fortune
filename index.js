const express = require('express');
const app = express();
const port = 3000;

const responses = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

app.use(express.static('public'));

app.get('/ask', (req, res) => {
  const randomIndex = Math.floor(Math.random() * responses.length);
  res.json({ response: responses[randomIndex] });
});

app.listen(port, () => {
  console.log(`Fortune app listening at http://localhost:${port}`);
});