const express = require('express');
//const bodyParser = require('body-parser');
const request = require('request');
//const mysql = require('mysql');
//const _mysql = require('sync-mysql');
const router = express.Router();
/* const con = mysql.createConnection({
	host: "sql12.freemysqlhosting.net",
	database : 'sql12255812',
	user: "sql12255812",
	password: "wvHaJ43Hml"
}); */
/* const con = new _mysql({
	host: "sql12.freemysqlhosting.net",
	database : 'sql12255812',
	user: "sql12255812",
	password: "wvHaJ43Hml",
	charset: "utf8_general_ci"
}); */
/* con.connect(function(err) {
	if (err) throw err;
	console.log("Connect Database Successfully!");
}); */



router.post('/webhook', (req, res) => {
	/* console.log(req);
	let reply_token = req.body.events[0].replyToken;
	var _sql_log = "INSERT INTO Inbox (type, replyToken, source_userId, source_type, timestamp, message_type, message_id, message_text) VALUES ('"+req.body.events[0].type+"', '"+req.body.events[0].replyToken+"', '"+req.body.events[0].source.userId+"', '"+req.body.events[0].source.type+"', '"+req.body.events[0].timestamp+"', '"+req.body.events[0].message.type+"', '"+req.body.events[0].message.id+"', '"+req.body.events[0].message.text+"');";
	var sql = "select * from Reply where Run_No = 1";
	let _messages = [];
	const _log = con.query(_sql_log);
	const _result = con.query(sql);
	_result.forEach(element => {
		var _elm = {
			type: element.Messages_Type,
            text: element.Massages_Reply
		};
		_messages.push(_elm);
	});
	console.log(_messages);
	
    reply(reply_token,_messages); */
	
	/*con.query(sql,function (error, results, fields) {
		if (error)throw error;
		console.log("Connected!");
		results.forEach(result => {
			//_body.push(result);
			console.log(result);
		});
		console.log(_body);
	});
	con.end(); */
	let reply_token = req.body.events[0].replyToken
	 let _body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                type: 'text',
                text: 'How are you?'
            }
        ]
    }) 
	reply(reply_token,_body); 
	res.header("Content-Type", "application/json; charset=utf-8");
    res.sendStatus(200) 
})
router.get('/', (req, res) =>
    res.send('webhook api reply messages auto by sittichai.jitvimas')
); 

/* 
router.get('/',function (req,res) {
	res.json({test:'test.....'})
})
router.get('/books',(req,res) =>{
	console.log(books)
	res.json(books)
})

router.get('/books/:id', (req, res) => {
	console.log(req.params)
  res.json(books.find(book => book.id === req.params.id))
}) */


function reply(reply_token,_messages) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {c6ZI0iTQOeAo4Rhmbyo8WsgoNtnfGQwptJx+uEiVd+YcNXfaDoAwhaSlOyuqwmLKVF1i43Ctk0jKHodj5MCBD3G5+fyKLu49idaFttydulTN38dJLnDlRl+XZ+Oy5vL3F9qhc+FeC9+EjCJry6ws6AdB04t89/1O/w1cDnyilFU=}'
    }
     /* let body = JSON.stringify({
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
	}) */
	let body = JSON.stringify({
        replyToken: reply_token,
        messages: _messages
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}

module.exports = router;
