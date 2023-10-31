// app.js

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// Parse incoming JSON requests
app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'Kaustav-Lapi',
  user: 'root@localhost',
  database: 'vit'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Endpoint to handle the form submission
app.post('/submitForm', (req, res) => {
  const { warden_id, password } = req.body;

  // Insert data into the MySQL table
  const sql = 'INSERT INTO entry_warden_login (warden_id, password) VALUES (?, ?)';
  db.query(sql, [warden_id, password], (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
      return;
    }

    console.log('Data inserted into MySQL:', result);
    res.json({ success: true, message: 'Data inserted successfully' });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
