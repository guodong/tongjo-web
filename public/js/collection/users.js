define(['backbone', 'model/user'], function(Backbone, User) {
	return Backbone.Collection.extend({
		url: API+'user',
		model: User
	});
})