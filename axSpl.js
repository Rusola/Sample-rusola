let axios=require('axios');

axios.get('https://jsonplaceholder.typicode.com')
    .then(function (response) {
        console.log(response.status);
    })
    .catch(function (error) {
        console.log(error);
    });