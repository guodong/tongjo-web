define(['backbone'], function(Backbone){
	return Backbone.Model.extend({
		url: API+'user',
		defaults : {
			id: '',
			email : '',
			realname : 'tongjo',
		}
	});
})