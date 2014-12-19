define(['backbone', 'model/Project'], function(Backbone, Project) {
	return Backbone.Collection.extend({
		  model: Project
	});
})