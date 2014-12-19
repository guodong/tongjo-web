define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		url: API + 'project',
		defaults: {
			id: '',
			name: '',
			description: '',
		}
	});
})