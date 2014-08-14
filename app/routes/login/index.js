var express 		= require('express'),
	queryDB 	= require('../../queries/login');

var app = module.exports = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/login', function(req, res){
	res.render('index');
});

app.get('/updateUserPassword', function(req, res){	
	queryDB.getPendientePcrc(			
		function (err, results, fields){
			if(err){
				throw err;
			}
			res.send(results);
		}
	);
});

app.get('/findUser', function(req, res){	
	queryDB.getPendientePcrc(			
		function (err, results, fields){
			if(err){
				throw err;
			}						
			res.send(results);
		}
	);
});

app.post('/signIn', function(req, res){
	/*passport.authenticate('local', { 
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true 
	})*/	
	req.session.lastPage = '/login';
	req.session.persona = req.body.persona;
	console.log(req);
	console.log(req.body);
	var a = req.session.persona;	
	//req.user = req.body.persona;	
	res.redirect('/supervision');
});