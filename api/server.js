const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  host: 'db',
  user: 'postgres',
  password: 'postgres',
  database: 'appdb',
  port: 5432,
});

app.get('/message', async (req, res) => {
  try {
    const result = await pool.query('SELECT content FROM messages LIMIT 1');
    res.json({ message: result.rows[0]?.content || 'No message found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});