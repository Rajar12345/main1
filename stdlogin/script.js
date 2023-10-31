
// public/script.js
document.addEventListener('DOMContentLoaded', () => {
  // Example: Fetch data from the server
  fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log('Data from server:', data))
    .catch(error => console.error('Error fetching data:', error));
});
