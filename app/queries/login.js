var pool = require('../../config/database/connection');

exports.updateUserPassword = function(callback){
	var sql = '';
	pool.getConnection(function(err, connection) {
	if(err) { 
		console.log(err); 
		callback(true); 
		return; 
		}		
		connection.query(sql, function(err, results) {
			if(err) { 
				console.log(err); 
				callback(true); 
				return; 
			}
			callback(false, results);
		});
	});
};

exports.checkUser = function(callback){
	var sql = '';
	pool.getConnection(function(err, connection) {
	if(err) { 
		console.log(err); 
		callback(true); 
		return; 
		}		
		connection.query(sql, function(err, results) {
			if(err) { 
				console.log(err); 
				callback(true); 
				return; 
			}
			callback(false, results);
		});
	});
};