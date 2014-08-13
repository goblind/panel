function setDatepickers(){		
	$('#offline_datepicker').datepicker({
		format: "dd/mm/yyyy",
		startDate: "-2m",
		endDate: "today",
		language: "es",
		autoclose: true,			
		todayHighlight: true
	});
}