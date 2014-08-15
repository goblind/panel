var utils = require('../../config/database/utils');

exports.getPendientePcrc = function(callback) {	
	var query = "SELECT vpp.PCRC as pcrc, vpp.Unidad as unidad, vpp.Pendiente as pendiente, vpp.Antigüedad as antiguedad FROM vw_pendiente_pcrc vpp";	
	utils.exec(query, null, function(err, results){
		if(err){
			console.log(err);
			callback(true);
			return;
		}		
		callback(null, results);
	});
	//utils.exec(query, null, callback);
};

exports.getOperadoresOnline = function(persona, callback){	
	var query = "CALL supervisionGetOperadoresOnline('"+persona+"');";		
	utils.exec(query, null, callback);
};

exports.getTrabajoOnlinePorEquipoDetalle = function(persona, callback){
	var query = "CALL supervisionGetTrabajoOnlinePorEquipoDetalle ('"+persona+"');";
	utils.exec(query, null, callback);
};

exports.getSupervisionOfflinePcrc = function(data, callback){
	var query = "CALL supervisionGetOfflinePcrc('"+data.persona+"','"+data.startDate+"','"+data.endDate+"');";	
	utils.exec(query, null, callback);
};

exports.getSupervisionOfflineCentro = function(data, callback){
	var query = "CALL supervisionGetOfflineCentro('"+data.persona+"','"+data.pcrcId+"', '"+data.startDate+"','"+data.endDate+"');";	
	utils.exec(query, null, callback);
};

exports.getSupervisionOfflineEquipo = function(data, callback){
	var query = "CALL supervisionGetOfflineEquipo('"+data.persona+"','"+data.pcrcId+"', '"+data.startDate+"','"+data.endDate+"');";	
	utils.exec(query, null, callback);
};

exports.getSupervisionOfflineOperadores = function(data, callback){
	var query = "CALL supervisionGetOfflineOperadores('"+data.persona+"', '"+data.supervisorId+"', '"+data.pcrcId+"', '"+data.startDate+"','"+data.endDate+"');";	
	utils.exec(query, null, callback);
};

exports.getSupervisionOfflineDetalle = function(data, callback){
	var query = "CALL supervisionGetOfflineDetalle('"+data.persona+"', '"+data.operadorId+"', '"+data.pcrcId+"', '"+data.startDate+"','"+data.endDate+"');";	
	utils.exec(query, null, callback);
};