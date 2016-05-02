var express = require('express');
var app = express();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'adelporte',
  password : '',
  database: 'reddit'
});

function getRedditPosts(callback) {
  connection.query(`SELECT p.title, p.url, p.createdAt, p.updatedAt, p.subredditId, u.username 
      FROM posts p 
      JOIN users u 
      ON p.userId=u.Id 
      WHERE userId=1
      ORDER BY p.createdAt 
      LIMIT 5`,
    function(err, res) {
      if (err) {
        callback(err);
      }
      else {
        callback(null, res);
      }
    });
}

app.get('/posts', function(req, res) {
  getRedditPosts(function(err, posts) {
    if (err) {
      res.status(500).send('oops try again later!');
    }
    else {
      var allPosts = posts.map(function(post) {
        return `
          <li class="content-item">
            <h2 class="content-item__title">
              <a href=${post.url}>${post.title}</a>
            </h2>
            <p>Created by ${post.username}</p>
          </li>`});
        
        
      res.send(`
          <div id="contents">
            <h1>List of posts</h1>
              <ul class="contents-list">
                ${allPosts.join('')}
              </ul>
          </div>
      `);
    }
  });
});


/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});