# dashboard.spatie.be [![Composer Cache](https://shield.with.social/cc/github/spatie/dashboard.spatie.be/master.svg?style=flat-square)](https://packagist.org/packages/laravel/framework)

This repo contains the source code of https://dashboard.spatie.be

## Example

<img style="max-width:100%; height: auto" src="http://spatie.github.io/dashboard.spatie.be/images/screenshot2017.png">

Our configured dashboard has following tiles:

- Twitter stream with all tweets mentioning [@spatie_be](https://twitter.com/spatie_be)
- Team calendar via [Google Calendar](https://google.com/calendar)
- Music currently playing via [Last.fm](https://last.fm)
- Clock/date
- Team todo's via GitHub files
- [Packagist](https://packagist.org/) stars and total downloads
- Rain forecast (for the bikers amongst us) via [buienradar.nl](http://buienradar.nl)
- Internet up/down via WebSockets

## Installation

Install this package by running cloning this repository and install like you normally install Laravel.

- Run `composer install` and `npm install yarn`
- Run `yarn` and `yarn run dev` to generate assets
- Copy .env.example to .env and fill your values (`php artisan key:generate`, database, pusher values etc)
- Run `php artisan migrate --seed`, this will seed a user based on your `BASIC_AUTH` `.env` values
- Start you queue listener and setup the Laravel scheduler.
- Open the dasboard in your browser, login and wait for the update events to fill the dasboard.

## Postcardware

If you are using our dashboard, please send us a postcard from your hometown.

Our address is: Spatie, Samberstraat 69D, 2060 Antwerp, Belgium.

The best postcards will get published on the open source page on our website.

## Support
This dashboard is tailormade to be displayed on the wall mounted tv in our office. We do not follow semver for this project and do not provide support whatsoever. However if you're a bit familiar with Laravel and Vue you should easily find your way.

For more details on the project, read our articles about the [setup and components](https://murze.be/2016/06/building-dashboard-using-laravel-vue/) or the [custom grid design](https://murze.be/2016/06/grid-layout-dashboard/).

## License

This project and the Laravel framework are open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
