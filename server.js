var express	= require('express'),
	path 		= require('path'),
	passport 	= require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	flash 	= require('connect-flash');
//require('./app/routes.js')(app, passport);
		
//NODE_PATH=lib para eliminar los ./lib/
var app = express();
var login = require('./app/routes/login');
var supervision = require('./app/routes/supervision');

app.set('port', process.env.PORT || 1337);
app.use(express.logger('dev')); 
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({ secret: 'keyboard dog' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(login);
app.use(supervision);
app.use('/javascripts', express.static(path.join(__dirname, 'public/javascripts')));
app.use('/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/', function(req, res){	
	res.redirect("/login");
});



app.listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});


passport.use(new LocalStrategy(
	function(username, password, callback) {
		return check_auth_user(username,password,done);
	}
));

//select length(sha2('asdasd',256))
/*
app.get('/', function (req, res) {
	res.render('index', { user : req.user });
 });
*/


/*
app.post('/users', function(req, res){
	var post = {
		name: req.body.name, 
		movie: req.body.movie
	};		
	connection.query('INSERT INTO users SET ?',			
			post,								
		function(err, results){
			if(err)
				throw err;
			//res.send('User added to database with ID: ' + result.insertId);		
			res.send(results);				
		}
	);	
});
*/
//app.listen(3000);
//console.log('Express server listening on port %d in %s mode', app.address().port, app.settings.env);