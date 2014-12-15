requirejs.config({
	baseUrl : '/public/js',
	paths : {
		app : 'app',
		jquery : 'lib/jquery/jquery',
		angular : 'lib/angularjs/angular'
	},
	shim : {}
});

requirejs([ 'app' ], function(app) {
	app.hello();
});