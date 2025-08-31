const express = require("express");
const axios = require("axios");
const app = express();

const ACCESS_TOKEN = "yaha_apna_access_token_dalo";

app.get("/profile", async (req, res) => {
  try {
    const url = `https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${ACCESS_TOKEN}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.get("/media", async (req, res) => {
  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${ACCESS_TOKEN}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});




