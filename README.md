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

- You're ready to start

* If autoload.php file in vendor directory is missing don't forget to create it !

## Scripts
Some script can help you during the development process of your wordpress site.
Feel free to use them :

* `composer env:regenerate` : Regenerate the .env file
* `yarn run start` : Start the dev environment

- A script which builds all assets is missing. Comming soon ! 
