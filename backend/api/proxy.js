const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Or configure specific origins:
app.use(cors({
  origin: 'https://shopping-tau-taupe.vercel.app/',
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.listen(5000, () => console.log('server running on port 5000'));
