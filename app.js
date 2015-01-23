var express = require('express'),
  app = express(),
  router = express.Router(),
  cors = require('cors'),
  bodyParser = require('body-parser');

app.use(cors());

app.use('/reactjs', express.static(__dirname + '/react-0.12.2'));
app.use('/reactjsapp', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(router);

var comments = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
router.get('/api/comments', function(req, res){
  res.status(200).jsonp(comments);
});
router.post('/api/comments', function(req, res) {
  console.log("posted: " + JSON.stringify(req.body));
  comments.push(req.body);
  res.status(200).jsonp(comments);
});

app.listen(3000, function() { console.log('listening in port 3000');});
