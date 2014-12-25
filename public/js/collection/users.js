define(['backbone', 'model/user'], function(Backbone, User) {
	return Backbone.Collection.extend({
		urlRoot: API+'user',
		model: User
	});
})