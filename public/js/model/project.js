define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		urlRoot: API + 'project',
		defaults: {
			id: '',
			name: '',
			description: '',
		}
	});
})