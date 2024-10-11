fetch('https://us.trip.com/restapi/soa2/14839/json/hotelList', {
    method: 'GET',
    headers: {
        'Origin': 'https://evil.com'
    }
})
.then(response => response.json())
.then(data => {
    console.log('CORS Test Successful:', data);
    alert('Data retrieved successfully from us.trip.com: ' + JSON.stringify(data));
})
.catch(error => {
    console.error('CORS Test Failed:', error);
    alert('CORS request failed. Check the console for more details.');
});
