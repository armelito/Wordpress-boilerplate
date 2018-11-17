# Awesome wordpress boilerplate

My wordpress boilerplate. Great to use if you want to start a wordpress project with Timber. The structure is heavily inspired by [Mickael](https://github.com/mickaelzhang) who helps me  to learn more about Timber. Enjoy !

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

## Installation
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

> Create a new database. Put its name in .env file, user name and user password

** The boilerplate assumed that mamp run on port 8000 **
** If yours is different please go in mamp preferences so you can switch mamp port to 8000 **

> If you prefere you can change the .env and gulpconfig file to listen the port you want.

** * You're ready to start **

* If autoload.php file in vendor directory is missing don't forget to create it !
* If you rename the project folder, or if you are no longer in local host, be sure to have changed the proxy and site url.
* Don't forget to create a new database and to linked the project to it.

## Scripts
Some script can help you during the development process of your wordpress site.
Feel free to use them :

* `composer env:regenerate` : Regenerate the .env file
* `yarn run start` : Start the dev environment

- A script which builds all assets is missing. Useless to run build. Coming soon ! 
