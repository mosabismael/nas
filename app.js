const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
let message = '';
// Where we will keep park
var index = -1;
var timer=0,fristDate = new Date();

let parks = [
    {
        'car_number': 213,
        'park_number': 1

    },
    {
        'car_number': 3321,
        'park_number': 2
    },
    {
        'car_number': 5671,
        'park_number': 3
    },
    {
        'car_number': 2345,
        'park_number': 4
    },
    {
        'car_number': 7764,
        'park_number': 5
    },
];

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dateTimeAgo = moment().fromNow();
function function2() {
    console.log(dateTimeAgo);

    // all the stuff you want to happen after that pause
    if (timer == 10){
        console.log(timer);

    }
    timer++

}
app.post('/park', (req, res) => {
    message = 'Parking lot is full';
    for (const park of parks) {
        if (park.car_number == req.body.car_number) {
            message = `Car parking on ${park.park_number}`;
        }
    }
    res.send(message);
});
app.post('/unpark_the_car', (req, res) => {
    var count=0;
    // setTimeout(function2, 10000);
    function2()
        for (const park of parks) {

        if (park.car_number == req.body.car_number) {
            delete parks[count]['car_number'];
                }
                count++;
    }
    res.send(parks);


});
app.post('/get_car_Information', (req, res) => {
    var filteredObj = parks.find(function (item, i) {
        if (item.car_number === req.body.car_number || item.park_number === req.body.park_number) {
            index = i;
            return i;
        }
    })
    res.send(filteredObj);
});



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
