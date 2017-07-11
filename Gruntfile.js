module.exports = function(grunt){
	
	//project configuration
	grunt.initConfig({
			pkg:grunt.file.readJSON('package.json'),
			uglify:{
				build:{
					src:'js/dev/script.js',
					dest:'js/build/script.min.js'
				}
			},
			
			jshint:{
				files:['Gruntfile.js','js/dev/script.js'],
				
				options:{
					unused:true
				
				}		
			}
			
			
		});
	
	
	
	
	//Load the plugin uglify 
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	
	//Default tasks
	grunt.registerTask('default',['uglify','jshint']);
	
};