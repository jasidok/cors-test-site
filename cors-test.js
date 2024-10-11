fetch('https://us.trip.com/restapi/soa2/14839/json/hotelList', {
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
