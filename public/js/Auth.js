define(function() {
	return {
		check: function(callback) {
			$.ajax({
				url: API + 'session',
				async: false,
				xhrFields: {
					withCredentials: true
				},
				success: function(d) {
					if (callback) {
						callback(d);
						return;
					}
					if (d.error) {
						location.href="/login?return="+location.href;
					}
				}
			});
		},
		logout: function(callback){
			$.ajax({
				url: API + 'session/1',
				async: false,
				method: 'DELETE',
				xhrFields: {
					withCredentials: true
				},
				success: function(d) {
					if(callback){
						callback(d);
						return;
					}
					location.href="/";
				}
			});
		}
	}
})