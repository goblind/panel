$(function() {
	//row selection	
	$('table').on( 'click', 'tbody tr', function(){
		//toggleClass(this);		
		var _table = $(this).closest('table').attr('id');		
		var oTable = $('#'+_table).dataTable().api();				
		//addClass 
		if ($(this).hasClass('info')) {
			$(this).removeClass('info');
		}
		else {
			oTable.$('tr.info').removeClass('info');
			$(this).addClass('info');
		}
		//aData
		var aPos = $('#'+_table).dataTable().fnGetPosition(this);
    		var aRows = $('#'+_table).dataTable().fnGetData(aPos[0]);    		
    		var aRow = aRows[aPos];
    		var aData = aRow.pcrc_id;
	});
	//addClass has-error to datepicker
	$('.input-sm.form-control').on('click', function(){
		if ( $(this).closest('.form-group').hasClass('has-error') ) {
			$(this).closest('.form-group').removeClass('has-error');
			$('#refreshDates').removeClass('btn-danger');
		}
	});
	//datepicker refresh button
	$('#refreshDates').on('click', function(){
		var startDate = formatDate($('#offlineStartDate').val());
		var endDate = formatDate($('#offlineEndDate').val());		
		if(validateDates(startDate, endDate)){			
			setVisible('pcrc');		
			hideElements('centro');	
			offlinePcrc(startDate, endDate);					
		}				
	});
	//row clicks
	$('#offline_pcrc').on('click', 'tbody tr', function(){		
		if($(this).hasClass('info')){
			var bcText = $(this).children().first().text();
			setBreadcumb('liBcPcrc', bcText);
			createNextTable('offline_pcrc', this);
		}	
		else{
			hideElements('centro');
			setBreadcumb('liBcPcrc', '');
			setBreadcumb('liBcCentro', '');
			setBreadcumb('liBcEquipo','');
			setBreadcumb('liBcOperador', '');
			destroyTables('offline_pcrc');
		}	
	});	

	$('#offline_centro').on('click', 'tbody tr', function(){
		if($(this).hasClass('info')){	
			var bcText = $(this).children().first().text();
			setBreadcumb('liBcCentro', bcText);		
			createNextTable('offline_centro', this);									
		}
		else{
			hideElements('equipo');
			setBreadcumb('liBcCentro', '');
			setBreadcumb('liBcEquipo','');
			setBreadcumb('liBcOperador', '');	
			destroyTables('offline_centro');
		}
	});

	$('#offline_equipo').on('click', 'tbody tr', function(){
		if($(this).hasClass('info')){
			var bcText = $(this).children().first().text();
			setBreadcumb('liBcEquipo', bcText);
			createNextTable('offline_equipo', this);									
		}
		else{
			hideElements('operadores');
			setBreadcumb('liBcEquipo','');
			setBreadcumb('liBcOperador', '');
			destroyTables('offline_equipo');
		}
	});

	$('#offline_operadores').on('click', 'tbody tr', function(){
		if($(this).hasClass('info')){	
			var bcText = $(this).children().first().text();
			setBreadcumb('liBcOperador', bcText);					
			$(this).siblings().hide();
			//createNextTable('offline_equipo', this);
		}
		else{
			$(this).siblings().show();
			setBreadcumb('liBcOperador', '');
			hideElements('detalle');
			destroyTables('offline_operadores');
		}
	});
});

function setBreadcumb(li, value){
	//$('#' + li).text(value);
	$("#olBcPcrc").append('<li><a href="#">'+value+'</a></li>');
}

function createNextTable(tableId , _this){	
	var startDate = formatDate($('#offlineStartDate').val());
	var endDate = formatDate($('#offlineEndDate').val());			
	if(validateDates(startDate, endDate)){				
		var tables = returnTablesArray();
		var nextTableId = tables.indexOf(tableId) + 1;	
		var divName = tables[nextTableId].split('_');
		setVisible(divName[1]);
		var f = 'offline' + capitalizeFirstLetter(divName[1]);			
		var aData = aDataClicked(tableId, _this);		
		if (f == 'offlineCentro')
			offlineCentro(startDate, endDate, aData[0]);
		else if (f == 'offlineEquipo')			
			offlineEquipo(startDate, endDate, aData[0]);
		else if (f == 'offlineOperadores')
			offlineOperadores(startDate, endDate, aData[0], aData[1]);
		else if (f == 'offlineDetalle')
			offlineDetalle(startDate, endDate, aData);
	}
}

function aDataClicked(tableId, _this){	
	var aPos = $('#' + tableId).dataTable().fnGetPosition(_this);
	var aRows = $('#' + tableId).dataTable().fnGetData(aPos[0]);    		
	var aRow = aRows[aPos];
	var values = [];	
	loop1:
		for (property in aRow) {
  			if (property.indexOf('_id') > -1) {  				
     				values.push(aRow[property]);
     				if (values.length > 1)
     					break loop1;
     			}    				
		}			
	return values;
}

function destroyTables(table){	
	var tables = returnTablesArray();	
	var ix = $.inArray(table, tables);
	var ixMax = tables.length - 1;
	while (ixMax > ix) {
		isDataTableInit(tables[ixMax]);		
		tables.pop();    		
		var ixMax = tables.length - 1;    		
	}
}

function capitalizeFirstLetter(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function returnTablesArray(){
	return ['offline_pcrc', 'offline_centro', 'offline_equipo', 'offline_operadores', 'offline_detalle'];
}

function setVisible(element){	
	$('#' + element).show();
}

function hideElements(element){
	//from 'element' down
	var divs = [];
	$('.row').each(function(){
		divs.push(this.id);
	});
	divs = $.grep(divs, function(n){ 
		return (n); 
	});
	var pos = $.inArray(element, divs);
	divs = divs.slice(pos, divs.length);
	$.each(divs, function(index, value){
		$('#' + this).hide();
	});
}

function toggleClass(row){	
	var _table = $(row).closest('table').attr('id');		
	var oTable = $('#' + _table).dataTable().api();				
	if ($(row).hasClass('info')) {
		$(row).removeClass('info');
	}
	else {
		oTable.$('tr.info').removeClass('info');
		$(row).addClass('info');
	}
}

function validateDates(startDate, endDate){	
	if((startDate == 'Invalid date' || endDate == 'Invalid date')  || startDate > endDate){
		$('#offlineStartDate').closest('.form-group').addClass('has-error');		
		$('#refreshDates').addClass('btn-danger');
		$('#refreshDates').blur();
		return false;		
	}
	return true;
}

function formatDate(date){
	return moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD');
}

function isDataTableInit(tableId){
	var dataTable = $('#'+tableId);
	if ($.fn.DataTable.fnIsDataTable(dataTable)){
		$(dataTable).dataTable().fnClearTable();					
		$(dataTable).dataTable().fnDestroy();
	} 	  				
}