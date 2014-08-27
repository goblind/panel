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
<<<<<<< HEAD
	var a = req.session.persona;	
=======
>>>>>>> f46711e9fc05642497976d1a605c41f2ce3170ea
	//req.user = req.body.persona;	
	res.redirect('/supervision');
});