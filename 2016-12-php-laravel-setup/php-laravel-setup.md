# PHP laravel setup on OSX

#### Disclaimer
My background in development started as a frontend web dev and later moved towards nodejs to the backend as my main stack.
Therefore, it helps me to write down the setup process 

#### Prereqs
you'll need 
- php (which should be installed on your machine)
- composer 
- laravel
- scaffold application and run local dev server
- alt - local server mamp (to get the server running via an app)

## setup composer

```
curl -sS https://getcomposer.org/installer | php 
php composer.phar
mv composer.phar /usr/local/bin/composer
composer
```

You can also create an alias but it's duplicating
`mv composer.phar /usr/local/bin/composer`  

## setup laravel

#### via laravel/installer
```
composer global require "laravel/installer"
```

afterwards to ensure that you can globally call the package

add the following to your bash/zshrc 
`export PATH=$PATH:~/.composer/vendor/bin`

by doing `laravel` you should now be able to see the command prompt for laravel.

## scaffold application and run local dev server

```
laravel new blogname
cd blogname
php artisan serve
```

#### Alt - local server 
You can also use mamp to serve the project from the project dir/  via [mamp](https://www.mamp.info/en/)    

### Author 
Denis Tsoi <denistsoi@gmail.com>  

### License 
![CCBY](../assets/by.png)  
Creative Commons Attribution License (do whatever, just attribute me) http://creativecommons.org/licenses/by/4.0/
