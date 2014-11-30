module.exports = function(grunt) {

	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			scss: {
				options: {
					sassDir: 'public/sass',
					cssDir: 'public/css',
					outputStyle: 'nested',
					sourcemap: true,
					require: 'susy'
				}
			}
		},
		watch: {
			css: {
			files: ['public/sass/{,**/}*.scss'],
			tasks: ['compass'],
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('build',['compass']);
}