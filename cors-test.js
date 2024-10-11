fetch('https://example.com/api/data', {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Origin': 'https://jasidok.github.io'
    }
})
.then(response => response.json())
.then(data => {
    console.log('CORS Test Successful:', data);
})
.catch(error => {
    console.error('CORS Test Failed:', error);
});
