const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const mysql = require('mysql');
const config = require('./config')
const routes = require('./routes.js')
const port = config.server.port;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/',routes)
app.listen(process.env.PORT || port,() =>{
	console.log('server start on port 5000')
})

/* // ----------------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    reply(reply_token)
    res.sendStatus(200)
})
app.get('/', (req, res) =>
    res.send('webhook api reply messages auto by sittichai.jitvimas')
); 
// app.post('/webhook', (req, res) => res.sendStatus(200));
// ----------------------------------


 app.listen(port, () => {
    console.log('server start on port 5000');
});
// --FUNCTION-----------------------------------------------------------------//
function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {c6ZI0iTQOeAo4Rhmbyo8WsgoNtnfGQwptJx+uEiVd+YcNXfaDoAwhaSlOyuqwmLKVF1i43Ctk0jKHodj5MCBD3G5+fyKLu49idaFttydulTN38dJLnDlRl+XZ+Oy5vL3F9qhc+FeC9+EjCJry6ws6AdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
                type: 'text',
                text: 'Hello'
            },
            {
                type: 'text',
                text: 'How are you?'
            }
        ]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}
// --FUNCTION-----------------------------------------------------------------//
 */