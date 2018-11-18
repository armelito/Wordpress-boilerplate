#           Wordpress boilerplate

![GitHub Logo](/images/wordpress-i.png)


This is a start for developing Worpress themes. The project structure is quiet closed to React, Angular, etc. This boilerplate is adaptable.

Great to use if you want to start a wordpress project with Timber. The structure is heavily inspired by [Mickael](https://github.com/mickaelzhang) who helps me  to learn more about Timber. Enjoy !

###Features

* Wordpress as a submodule
* Timber for a perfect seperation between html & php
* Seperate configs for development, staging & production environments
* Gulp with browersync offers many options like seeing live changes on every devices
* SCSS
* JPG, PNG, SVG image minification
* Composer with autoloader
* Webpack to bundle (soon)


## What does it contain
* [WordPress Packagist](https://wpackagist.org)
* [Gulp](https://gulpjs.com/) (tasks runner)
* [Timber](https://upstatement.com/timber/)
* [Composer](https://getcomposer.org/) & [Yarn](https://yarnpkg.com/lang/en/) as dependency managers

## Requirement
To run this boilerplate, you need :
* At least `PHP 5.6`
* `composer` installed
* `yarn` or `npm` installed

## Getting started
- You need to install first all the dependencies.
You need to run so :
```
composer install
yarn install
```

- Then setup your `.env` file by running :

```
composer project:setup
```

> This create a .env file in the root directory. You need to put all your sensitive information here.

> Create a new database for this project.

## Change files

**You need a local php server to run wordpress**
>The .env config run on port 8000
>Change it if necessary

* Setup the example.env in /bin for your futur project. 
* Setup .env file to connect to the database
* Change gulpconfig.js to setup different config, paths
* You can create your theme folder public/themes/your-theme.
* Don't forget to add the path of files you don't want to be commit in .gitignore 

## Scripts
Some script can help you during the development process of your wordpress site.
Feel free to use them :

* `composer env:regenerate` : Regenerate the .env file
* `yarn run start` : Start the dev environment

- A script which builds all assets is missing. Useless to run build. Coming soon ! 

# Congratulation !

## Let's start 
>yarn run start

In development, gulp will do a couple things : 

* Run browersync on http://localhost:3000 
* Build scss to css files
* Watch for changes in php files, images, icons, font, etc...
* Live reloading on change

![GitHub Logo](/images/timberw.png)
