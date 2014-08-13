function initialSettings(){		
	// var now = new Date();
	// var firstDatePrevMonth = moment(new Date(now.getFullYear(), now.getMonth() - 1, 1)).format('YYYY-MM-DD');		
	// var lastDayPrevMonth  = moment(new Date(now.getFullYear(), now.getMonth(), 0)).format('YYYY-MM-DD');		
	hideElements('pcrc');
	//$('#pcrc').hide();
}

function offlinePcrc(startDate, endDate) {	
	isDataTableInit('offline_pcrc');		
	var oTable = $("#offline_pcrc").dataTable({                                           
	    	//'bServerSide': true,
	    	'fnServerParams': function (aoData) {
	       		aoData.push({ "name": "startDate", "value": startDate });
	       		aoData.push({ "name": "endDate", "value": endDate });
	     	},
	     	'sAjaxSource':  '/getSupervisionOfflinePcrc',
	     	//"sServerMethod": "POST",
	     	'sAjaxDataProp': '',
	    	'bProcessing': true,          	    	    
	    	'sDom':'t',       
	    	"aoColumns": [                              
	    		{ "bVisible": false, "mDataProp": "pcrc_id"},
	        		{ "sWidth": "34%","sTitle": "PCRC", "mDataProp": "pcrc"},
			{ "sWidth": "22%","sTitle": "Volumen", "mDataProp": "volumen"},
			{ "sWidth": "22%","sTitle": "TLG", "mDataProp": "tlg"},
			{ "sWidth": "22%","sTitle": "Reitero", "mDataProp": "reitero",
	            			"mRender": function (data, type, full) {                                               
	                        			if (data == null) 
	                        				return '-';
	                        			else 
	                        				return data + '%';
	                    		} 
	                	}
	    	],              
	    	"oLanguage": {
	        		"sUrl": "/javascripts/i18n/dataTables.Spanish.json"
	    	},                 
	    	"aaSorting": [[ 0, "desc" ]],
	    	"bSort": false,
	    	"bInfo" : false,                                
	    	"bPaginate": false,
	    	"bFilter": false,
		"fnInitComplete": function(oSettings, json) {			
			oTable = $(this).dataTable();			
			if (oTable.fnSettings().fnRecordsTotal() == 1){
				$(this).children('tbody').children().trigger('click');
			}
	   	}
	});
}

function offlineCentro(startDate, endDate, pcrcId){
	isDataTableInit('offline_centro');
	var oTable = $("#offline_centro").dataTable({                                           	    	
	    	'fnServerParams': function (aoData) {
	       		aoData.push({ "name": "startDate", "value": startDate });
	       		aoData.push({ "name": "endDate", "value": endDate });
	       		aoData.push({ "name": "pcrcId", "value": pcrcId });
	     	},
	     	'sAjaxSource':  '/getSupervisionOfflineCentro',	     	
	     	'sAjaxDataProp': '',
	    	'bProcessing': true,          	    	    
	    	'sDom':'t',       
	    	"aoColumns": [                  
	    		{ "bVisible": false, "mDataProp": "pcrc_id"},            	    		
	    		{ "bVisible": false, "mDataProp": "centro_id"},
	        		{ "sWidth": "34%","sTitle": "Centro", "mDataProp": "centro"},
			{ "sWidth": "22%","sTitle": "Volumen", "mDataProp": "volumen"},
			{ "sWidth": "22%","sTitle": "TLG", "mDataProp": "tlg"},
			{ "sWidth": "22%","sTitle": "Reitero", "mDataProp": "reitero",
	            			"mRender": function (data, type, full) {                                               
	                        			if (data == null) 
	                        				return '-';
	                        			else 
	                        				return data + '%';
	                    		} 
	                	}
	    	],              
	    	"oLanguage": {
	        		"sUrl": "/javascripts/i18n/dataTables.Spanish.json"
	    	},                 
	    	"aaSorting": [[ 0, "desc" ]],
	    	"bSort": false,
	    	"bInfo" : false,                                
	    	"bPaginate": false,
	    	"bFilter": false,
	    	"fnInitComplete": function(oSettings, json) {
			oTable = $(this).dataTable();			
			if (oTable.fnSettings().fnRecordsTotal() == 1){
				$(this).children('tbody').children().trigger('click');
			}
	   	}
	});
}

function offlineEquipo(startDate, endDate, pcrcId){	
	isDataTableInit('offline_equipo');
	var oTable = $("#offline_equipo").dataTable({                                           	    	
	    	'fnServerParams': function (aoData) {
	       		aoData.push({ "name": "startDate", "value": startDate });
	       		aoData.push({ "name": "endDate", "value": endDate });
	       		aoData.push({ "name": "pcrcId", "value": pcrcId });
	     	},
	     	'sAjaxSource':  '/getSupervisionOfflineEquipo',	     	
	     	'sAjaxDataProp': '',
	    	'bProcessing': true,          	    	    
	    	'sDom':'t',       
	    	"aoColumns": [                              	    		
	    		{ "bVisible": false, "mDataProp": "persona_id"},
	    		{ "bVisible": false, "mDataProp": "pcrc_id"},
	        		{ "sWidth": "34%","sTitle": "Equipo", "mDataProp": "persona_nombre_completo"},
			{ "sWidth": "22%","sTitle": "Volumen", "mDataProp": "volumen"},
			{ "sWidth": "22%","sTitle": "TLG", "mDataProp": "tlg"},
			{ "sWidth": "22%","sTitle": "Reitero", "mDataProp": "reitero",
	            			"mRender": function (data, type, full) {                                               
	                        			if (data == null) 
	                        				return '-';
	                        			else 
	                        				return data + '%';
	                    		} 
	                	}
	    	],              
	    	"oLanguage": {
	        		"sUrl": "/javascripts/i18n/dataTables.Spanish.json"
	    	},                 
	    	"aaSorting": [[ 0, "desc" ]],
	    	"bSort": false,
	    	"bInfo" : false,                                
	    	"bPaginate": false,
	    	"bFilter": false,
	    	"fnInitComplete": function(oSettings, json) {
			oTable = $(this).dataTable();			
			if (oTable.fnSettings().fnRecordsTotal() == 1){
				$(this).children('tbody').children().trigger('click');
			}
	   	}
	});
}

function offlineOperadores(startDate, endDate, supervisorId, pcrcId){	
	isDataTableInit('offline_operadores');
	var oTable = $("#offline_operadores").dataTable({                                           	    	
	    	'fnServerParams': function (aoData) {
	       		aoData.push({ "name": "startDate", "value": startDate });
	       		aoData.push({ "name": "endDate", "value": endDate });
	       		aoData.push({ "name": "supervisorId", "value": supervisorId });
	       		aoData.push({ "name": "pcrcId", "value": pcrcId });
	     	},
	     	'sAjaxSource':  '/getSupervisionOfflineOperadores',	     	
	     	'sAjaxDataProp': '',
	    	'bProcessing': true,          	    	    
	    	'sDom':'t',       
	    	"aoColumns": [                              
	    		{ "bVisible": false, "mDataProp": "persona_id"},	
	    		{ "bVisible": false, "mDataProp": "pcrc_id"},    		 		
	        		{ "sWidth": "34%","sTitle": "Operador", "mDataProp": "persona_nombre_completo"},
			{ "sWidth": "22%","sTitle": "Volumen", "mDataProp": "volumen"},
			{ "sWidth": "22%","sTitle": "TLG", "mDataProp": "tlg"},
			{ "sWidth": "22%","sTitle": "Reitero", "mDataProp": "reitero",
	            			"mRender": function (data, type, full) {                                               
	                        			if (data == null) 
	                        				return '-';
	                        			else 
	                        				return data + '%';
	                    		} 
	                	}
	    	],              
	    	"oLanguage": {
	        		"sUrl": "/javascripts/i18n/dataTables.Spanish.json"
	    	},                 
	    	"aaSorting": [[ 1, "asc" ]],	    	
	    	"bInfo" : false,                                
	    	"bPaginate": false,
	    	"bFilter": false,
	    	"fnInitComplete": function(oSettings, json) {
			oTable = $(this).dataTable();			
			if (oTable.fnSettings().fnRecordsTotal() == 1){
				$(this).children('tbody').children().trigger('click');
			}
	   	}
	});
}