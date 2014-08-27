$(function() {
	$.get( "/test", function(d) {		
  		var nest = d3.nest()
    			.key(function(d) { return d.persona_id; })
    			.key(function(d) { return d.fecha; })
    			.entries(d);
    		
    		//	var flare = tree(d);
		debugger;
	});
});

function tree(nodes) {

	var nodeById = {};

	// Index the nodes by id, in case they come out of order.
	nodes.forEach(function(d) {
		nodeById[d.row] = d;
 	});

	// Lazily compute children.
	nodes.forEach(function(d) {
		if ("clasificacion" in d) {
			var clasificacion = nodeById[d.clasificacion];
			if (clasificacion.children) clasificacion.children.push(d);
				else clasificacion.children = [d];
		}
	});
	return nodes[0];
}

