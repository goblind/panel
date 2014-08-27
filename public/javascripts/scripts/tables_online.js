function getOnline(){	
	isDataTableInit('pendiente_pcrc');					
	$.ajax({
		url: "/getPendientePcrc",							
		contentType: "application/json",
		processData: false,					
		complete: function(data){													
			$("#pendiente_pcrc").dataTable({														
				"aaData": data.responseJSON,							
				"aoColumns": [								
					{ "sTitle": "PCRC", "mDataProp": "pcrc"},
					{ "sTitle": "Unidad", "mDataProp": "unidad"},
					{ "sTitle": "Pendiente", "mDataProp": "pendiente"},
					{ "sTitle": "Antigüedad", "mDataProp": "antiguedad"}
				],
				"oLanguage": {
					"sUrl": "/javascripts/i18n/dataTables.Spanish.json"
				},
				"aaSorting": [[ 0, "desc" ]],
				"bSort": false,
				"bInfo" : false,				
				"bPaginate": false,
				"bFilter": false
			});
		}
	});
	isDataTableInit('operadores_online');
	$.ajax({
		url: "/getOperadoresOnline",
		contentType: "application/json",
		processData: false,					
		complete: function(data){														
			$("#operadores_online").dataTable({	
				"pagingType": "simple",				
				"aaData": data.responseJSON[0],					
				"aoColumns": [								
					{ "sTitle": "Operador", "mDataProp": "operador"},
					{ "sTitle": "PCRC", "mDataProp": "pcrc"},
					{ "sTitle": "Línea", "mDataProp": "linea", 'bSortable': false},								
					{ "sTitle": "Hora", "mDataProp": "hora", 'bSortable': false}
				],				
				"oLanguage": {
					"sUrl": "/javascripts/i18n/dataTables.Spanish.json"
				},					
				"bFilter": false,
				"bInfo" : false,	
				"bSort": false,
				"bLengthChange": false				
			});
		}
	});

	isDataTableInit('trabajo_online_por_equipo_detalle');
	$.ajax({
		url: "/getTrabajoOnlinePorEquipoDetalle",
		contentType: "application/json",
		processData: false,					
		complete: function(data){				
			$("#trabajo_online_por_equipo_detalle").dataTable({								
				"aaData": data.responseJSON[0],					
				"aoColumns": [								
					{ "sWidth": "8%", "sTitle": "Línea", "mDataProp": "linea", 'bSortable': false },
					{ "sWidth": "8%", "sTitle": "Unidad", "mDataProp": "unidad"},
					{"sWidth": "8%",  "sTitle": "Operador", "mDataProp": "persona", 'bSortable': false},								
					{"sWidth": "8%",  "sTitle": "Hora", "mDataProp": "tomado"},					
					{"sWidth": "8%", "sTitle": "Duración", "mDataProp": "duracion",
			            			"mRender": function (data, type, full) {                                               
			                        			if (type === 'display')
			                        				return data + ' min.';
			                        			return data;
			                    		} 
			                    	},
					{ "sWidth": "32%", "sTitle": "Clasificación", "mDataProp": "clasificacion", 'bSortable': false},
					{ "sWidth": "28%", "sTitle": "Observación", "mDataProp": "observacion", 'bSortable': false, 
						"mRender": function ( data, type, full ) {
						            	if (data != null) {
						               	return '<div class="toEllip">'+data+'</div>';
						               	//return data;  	
						               }
						            	else 
						            		return ''; 
        						}
        					}							
				],				
				"oLanguage": {
					"sUrl": "/javascripts/i18n/dataTables.Spanish.json"
				},	
				"bAutoWidth": false,
				"bLengthChange": false,
				"fnInitComplete": function(oSettings, json){									
					noLineBreak();
				}
			});
		}
	});
}

function isDataTableInit(dataTableId){		
	var dataTable = document.getElementById(dataTableId);
	if ($.fn.DataTable.fnIsDataTable(dataTable)){
		$(dataTable).dataTable().fnClearTable();
		$(dataTable).dataTable().fnDestroy();
	}
}

