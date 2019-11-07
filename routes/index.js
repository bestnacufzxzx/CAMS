// import {feature} from '../src/Map/Map';
// var mysql = require('mysql');

// var config={
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'project'
// }

// var connection = mysql.createConnection(config);

// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected");
//     data = feature;
//     sql = "insert into room(roomID,location,buildingID) value('10','10.2,321.220','feature')";
//     con.query(sql,function(err,result){
//         if(err) throw err;
//         console.log("insert Complete");
//     });
// });

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'project'
})

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    data = feature;
    sql = "insert into room(roomID,location,buildingID) value('10','10.2,321.220','feature')";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("insert Complete");
    });
});

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

connection.end()
