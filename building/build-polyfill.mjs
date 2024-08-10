import builder from 'core-js-builder'

builder({
	// entry / module / namespace / an array of them, by default - all `core-js` modules
	modules: [
		'esnext.array.to-sorted',
	],
	// a blacklist of entries / modules / namespaces, by default - empty list
	exclude: [],
	// optional browserslist or core-js-compat format query
	targets: 'Chrome >= 99',
	// shows summary for the bundle, disabled by default
	summary: {
		// in the console, you could specify required parts or set `true` for enable all of them
		console: { size: true, modules: true },
		// in the comment in the target file, similarly to `summary.console`
		comment: {},
	},
	// output format, 'bundle' by default, can be 'cjs' or 'esm', and in this case
	// the result will not be bundled and will contain imports of required modules
	format: 'bundle',
	// optional target filename, if it's missed a file will not be created
	filename: '../dist/polyfill.js',
})
