const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.post('/proxy', async (req, res) => {
  const targetUrl = 'http://208.167.255.60/upload';

  try {
    const proxyResponse = await fetch(targetUrl, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const content = await proxyResponse.json();

    res.status(proxyResponse.status).json(content);
  } catch (error) {
    res.status(500).json({ error: 'Error when trying to proxy request' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
