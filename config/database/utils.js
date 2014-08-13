var pool = require('./connection');

module.exports = {
  	getDBConnection: function(callback) {
		pool.getConnection(function(err, connection){
	        		if(err){
	           			 console.log(err);
	           			 return callback(err);
	        		}
	        	callback(null, connection);
	    	});
	},
  	endDBConnection: function(connection) {
    		connection.release();
	},
   	exec: function(query, data, callback) {
	   	var _this = this;
	    	this.getDBConnection(function(err, connection){
	       		 if(err){
	            			console.log(err);
	            			return callback(err);
	        		}
	        		connection.query(query, data, function(err, results) {
	            		_this.endDBConnection(connection);
	            		if(err) {
	                		return callback(err);
	            		}
	            		callback(null, results);
	        		});
	    	});
	}
}




