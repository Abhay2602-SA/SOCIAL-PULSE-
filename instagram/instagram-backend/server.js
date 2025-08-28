const express = require('express');
const axios = require('axios');
const app = express();

app.get('/auth/instagram/callback', async (req, res) => {
  const code = req.query.code;
  try {
    const response = await axios.post('https://api.instagram.com/oauth/access_token', null, {
      params: {
        client_id: '1097717499158343',
        client_secret: 'b3edc65898303527bffabfd4f5ec6ef5',
        grant_type: 'authorization_code',
        redirect_uri: 'https://localhost:8080/auth/instagram/callback',
        code,
      },
    });
    res.json(response.data); // Contains access_token
  } catch (error) {
    res.status(500).json({ error: error.message, details: error.response?.data });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));