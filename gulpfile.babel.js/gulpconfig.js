// CONFIG

const THEME_NAME = 'armel'
const THEME_PATH = './web/themes/' + THEME_NAME + '/'

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
	proxy: 'localhost:8000/Wordpress-boilerplate/public'
}
