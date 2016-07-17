var qiniu = require('qiniu');
var express = require('express');
var config = require('./config/index.js');
var app = express();
app.set('views', __dirname + '/src/views');
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded());
app.use('/bower_components', express.static(__dirname + '/../bower_components'));
app.use('/src', express.static(__dirname + '/../src'));

app.get('/uptoken', function(req, res, next) {
    var token = uptoken.token();
    res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    if (token) {
        res.json({
        	code: 100,
            uptoken: token
        });
    }
});
qiniu.conf.ACCESS_KEY = config.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.SECRET_KEY;

var uptoken = new qiniu.rs.PutPolicy(config.Bucket_Name);


app.listen(config.Port, function() {
    console.log('Listening on port %d', config.Port);
});
