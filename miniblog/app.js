var express = require('express')
  , bodyParser = require('body-parser')
  , path = require('path')
  , level = require('level')
  , uuid = require('node-uuid')
  , db = level('./miniblog.db', {valueEncoding: 'json'})
  , app = express()
;

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.route('/')
  .get(function(req, res) {
    var posts = [];  
    var stream = db.createValueStream();
    stream.on('data', function(post) {
      posts.push(post);
    });
    stream.on('end', function() {
      return res.render('index', {posts: posts});
    });
  })
  .post(function(req, res) {
    db.put(uuid.v1(), req.body.post, function(err) {
      return res.redirect('/');
    });
  });

app.listen(3000, function() {
  console.log('MiniBlog running...');
});