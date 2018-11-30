module.exports = {
	lintOnSave: process.env.NODE_ENV !== 'production',
	productionSourceMap: false,
  	devServer: {
    	overlay: {
      		warnings: true,
      		errors: true
    	},
    	proxy: 'http://localhost:8080'
  	},
  	parallel: true,
  	baseUrl: './'
}