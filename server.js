
/**
 * Module dependencies
 */

var express = require('express'),
  http = require('http');

var app = module.exports = express();


/**
 * Configuration
 */
app.configure(function () {
	// all environments
	app.set('port', process.env.PORT || 3000);
	
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname  + '/public') //where your static content is located in your filesystem
    );
});

app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html'); 
});

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

// production only
if (app.get('env') === 'production') {
  // TODO
};

/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});