// CONFIG
// change variables if necessary
const THEME_NAME = 'armel' // theme name
const THEME_PATH = './public/themes/' + THEME_NAME + '/' // theme pathe
const PROJECT_NAME = 'Wordpress-boilerplate' // if you rename project change it
const THEME_HOST = 'localhost:8000/' // if mamp is running on other port
const DIR_PROJECT = THEME_HOST + PROJECT_NAME + '/public/' // public could be web or other
//
// EXPORT CONFIG SETTINGS
module.exports = {
  path: {
    theme: THEME_PATH,
    src: THEME_PATH + 'src/', // Dev files
    build: THEME_PATH + 'dist/', // Prod files
    dist: './dist/', // dist
    composer: './vendor/', // composer
    modules: './node_modules/', // npm 
  },

  theme: {
    name: THEME_NAME
  },
	proxy: DIR_PROJECT
}
// END 