var express 	= require('express');
var mysqldb 	= require('../../queries/supervision');

var app = module.exports = express();

//routes
app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/supervision', function(req, res){
	res.render('index', {a: req.session.persona});
});

app.get('/supervision/offline', function(req, res){	
	res.render('offline');
});

//queries
app.get('/getPendientePcrc', function(req, res){	
	mysqldb.getPendientePcrc(function (err, results, fields){
		if(err){ throw err; }						
		res.send(results);
	});	
});

app.get('/getOperadoresOnline', function(req, res){
	var persona =  req.session.persona;		
	mysqldb.getOperadoresOnline(persona, function (err, results, fields){
		if(err){ throw err; }
		res.send(results);
	});
});

app.get('/getTrabajoOnlinePorEquipoDetalle', function(req, res){
	var persona = req.session.persona;	
	mysqldb.getTrabajoOnlinePorEquipoDetalle(persona, function (err, results, fields){
		if(err){ throw err; }
		res.send(results);
	});	
});

app.get('/getSupervisionOfflinePcrc', function(req, res){			
	var data = {
		persona: req.session.persona,
		startDate: req.query.startDate,
		endDate: req.query.endDate
	};	
	console.log(data);	
	if(typeof data === "undefined"){
		console.log('data is undefined');
	}
	else {
		mysqldb.getSupervisionOfflinePcrc(data, function (err, results, fields){
			if(err) { throw err; }
			res.send(results[0]);
		});    		
	}
});

app.get('/getSupervisionOfflineCentro', function(req, res){
	var data = {
		persona: req.session.persona,
		pcrcId: req.query.pcrcId,
		startDate: req.query.startDate,
		endDate: req.query.endDate
	};	
	console.log(data);	
	mysqldb.getSupervisionOfflineCentro(data, function (err, results, fields){
		if(err) throw err;
		res.send(results[0]);
	});
});

app.get('/getSupervisionOfflineEquipo', function(req, res){
	var data = {
		persona: req.session.persona,
		pcrcId: req.query.pcrcId,
		startDate: req.query.startDate,
		endDate: req.query.endDate
	};	
	console.log(data);	
	mysqldb.getSupervisionOfflineEquipo(data, function (err, results, fields){
		if(err) throw err;
		res.send(results[0]);
	});
});

app.get('/getSupervisionOfflineOperadores', function(req, res){
	var data = {
		persona: req.session.persona,
		supervisorId: req.query.supervisorId,
		pcrcId: req.query.pcrcId,
		startDate: req.query.startDate,
		endDate: req.query.endDate
	};	
	console.log(data);	
	mysqldb.getSupervisionOfflineOperadores(data, function (err, results, fields){
		if(err) throw err;
		res.send(results[0]);
	});
});

app.get('/getSupervisionOfflineDetalle', function(req, res){
	var data = {
		persona: req.session.persona,
		operadorId: req.query.operadorId,
		pcrcId: req.query.pcrcId,
		startDate: req.query.startDate,
		endDate: req.query.endDate
	};	
	console.log(data);	
	mysqldb.getSupervisionOfflineDetalle(data, function (err, results, fields){
		if(err) throw err;
		res.send(results[0]);
	});
});