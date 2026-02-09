const express = require('express');
const app = express();

app.use(express.json()); // parse JSON body

app.get('/', (req, res) => res.send('Contact backend running'));

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact received:', { name, email, message });
  // temporary: respond with received payload
  return res.status(201).json({ status: 'ok', received: { name, email, message } });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));