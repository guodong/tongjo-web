define(['backbone'], function(Backbone){
	return Backbone.Model.extend({
		urlRoot: API+'user',
		defaults : {
			id: '',
			email : '',
			realname : 'tongjo',
		}
	});
})