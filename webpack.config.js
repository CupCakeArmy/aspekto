const common = {
	stats: {
		assets: true,
		assetsSort: 'size',
		all: false,
		errors: true,
		colors: true,
		performance: true,
		timings: true,
	},
}

const src = require('./src/webpack.config.js')
const test = require('./test/webpack.config.js')

module.exports = [
	Object.assign({}, common, src),
	Object.assign({}, common, test),
]