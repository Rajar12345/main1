// server.js
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'Kaustav-Lapi',
    user: 'root@localhost',
    database: 'vit',
  });

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Serve static files from the 'public' folder
app.use(express.static("/warden_login"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// server.js
// ... (previous code)

// API endpoint to fetch data
app.get('/api/data', (req, res) => {
    // Example: Query the database and send data to the client
    const query = 'SELECT * FROM warden_login_info';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
  });
  