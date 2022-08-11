const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const { exec } = require('child_process');
//Static Theme Locations
var themeStatic = 'pub/static/frontend/';

let modules = [
	{folder:'Adam/AnotherExtension', namespace:'Adam_AnotherExtension', lang:'en_GB', themefolder:'Adam/Luma_Child'},
	{folder:'Adam/AnotherExtension', namespace:'Adam_AnotherExtension', lang:'en_GB', themefolder:'Adam/AnotherExtension'},
];
let themes = [
	{folder:'Adam/Another', lang:'en_GB'}, 
	{folder:'Adam/Luma_Child',lang:'en_GB'}];

//Themes
themes.forEach(element => {
	mix.sass('app/design/frontend/'+element.folder+'/web/scss/styles.scss', 'app/design/frontend/'+element.folder+'/web/css/styles.css');
})

//Modules
modules.forEach(element => {
	mix.sass('app/code/' + element.folder + '/view/frontend/web/scss/styles.scss', 'app/code/' + element.folder + '/view/frontend/web/css')
})
mix.sourceMaps(false, 'source-map')

// exec('yarn magento-static', (err, stdout, stderr) => {
// 	if (err) {
// 	  // node couldn't execute the command
// 	  console.log(`stdout: ${stderr}`);
// 	  return;
// 	}
  
// 	// the *entire* stdout and stderr (buffered)
// 	console.log(`stdout: ${stdout}`);
// 	console.log(`stderr: ${stderr}`);
//   });

// Move 
themes.forEach(element => {
	mix.copy('app/design/frontend/'+element.folder+'/web/images/*', themeStatic + element.folder + '/' + element.lang + '/images/');
	mix.copy('app/design/frontend/'+element.folder+'/web/css/*', themeStatic + element.folder + '/' + element.lang + '/css/')
	mix.copy('app/design/frontend/'+element.folder+'/web/js/*', themeStatic + element.folder + '/' + element.lang + '/js/')
})

modules.forEach(element => {
	mix.copy('app/code/'+element.folder+'/view/frontend/web/images/*', themeStatic + element.themefolder + '/' + element.lang + '/' + element.namespace + '/images/');
	mix.copy('app/code/'+element.folder+'/view/frontend/web/css/*', themeStatic + element.themefolder + '/' + element.lang + '/' + element.namespace + '/css/')
	mix.copy('app/code/'+element.folder+'/view/frontend/web/js/*', themeStatic + element.themefolder + '/' + element.lang + '/' + element.namespace + '/js/')
})


// LiveReload
mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
})



// Disable OS notifications for successful builds
mix.disableSuccessNotifications();
