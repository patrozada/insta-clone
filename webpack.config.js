//Here we're requiring node's path module. It is part of Node.js core (that's why we don't need to install it) and provides a number of methods to interact with the file system (https://nodejs.dev/learn/the-nodejs-path-module).
const path = require('path');

//Here we're exporting an object with 2 keys:
// entry specifies which module or file should webpack use to build the dependency graph upon.
//output specifies the name of the file and the path where the created bundle should be emitted
module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public')
	},
	//the module object tells webpack which loaders it needs to use.
	//Loaders allow webpack to proccess files so that they are transformed into modules that a)our application can consume, and b) can be added to our dependency graph 
	//Loaders will search for a config file in which they are told which presets (those are installed with @babel) to use.
	module: {
		rules:[{
			loader:'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}]
	},
	// the devServer key sets up the behaviour of our development server. In this case we instruct it to serve files from ./public
	devServer: {
		contentBase: path.join(__dirname, 'public')
	}
}