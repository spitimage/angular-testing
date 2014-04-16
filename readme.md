
# Angular Testing
This is a project to demonstrate the current _unit_ and _end-to-end_ testing capabilities in [AngularJS][angular]. Currently these are the relevant technologies:

* [Karma][karma] for __unit testing__
* [Protractor][protractor] for __end-to-end testing__

To make things as standardized as possible, I created this project with the latest [Yeoman][yeoman] generator for Angular. Since the Angular generator doesn't support [Protractor][protractor] yet, I added all the protractor stuff.

## Front Range AngularJS Slides
The presentation slides for this meetup are located [here][prez].

## Colorado Springs Open Source Slides
The presentation slides for this meetup are located [here][prez2] (special thanks to Rich Beaudoin).

## The Story
So this is a simple application to manage the planning of a Super Bowl party. You can add, edit, and remove guests. Also, you can assign goodies (food and drink) for guests to bring. These simple user stories bring some good testing discussion to the surface. The project includes both unit and E2E tests, and we can discuss the merits of both in the context of the application.

### Where's the Backend?
If this were a real project, we'd probably use $http or $resource to interact with a real backend. Here we're only demonstrating frontend testing, so the data services are only temporary.

## Building
This is a standard yeoman project, so building is straightforward. Assuming you have npm installed, run these commands from the project root:

    npm install -g grunt-cli
    npm install -g bower
    npm install
    bower install
    grunt test

To run _only_ the karma tests:

    grunt karma

To run _only_ the protractor tests:

    grunt protractor

To run the development server:

    grunt serve

## Selenium
The protractor project includes handy scripts for managing both the Selenium server and the individual browser web drivers. To download the latest Selenium and web drivers:

    ./node_modules/.bin/webdriver-manager update

Next, you can use the same script to launch a local Selenium server instance for all your protractor testing:

    ./node_modules/.bin/webdriver-manager start

This command takes awhile, so be patient. The script kills the server when it detects anything on standard input.

## Running Standalone Protractor
If you need to run protractor outside of grunt:

    ./node_modules/.bin/protractor protractor-config.js

This is effectively the same as:

    grunt protractor


## Credits

* [Yeoman][yeoman]
* [Yeoman Angular Generator][generator] (version 0.7.1)
* Example E2E test from the [Yeoman protractor generator][ypg] project

## License
[MIT License][mit]


[angular]: http://angularjs.org/
[karma]: http://karma-runner.github.io/0.10/index.html
[protractor]: https://github.com/angular/protractor
[prez]: http://spitimage.com/angular-testing-prez
[prez2]: https://docs.google.com/presentation/d/1UHkWDlSGTuDaN9yrc_Jh0Fmv2ofXPetwTurSxqfykK0/pub?start=false&loop=false&delayms=3000
[yeoman]: http://yeoman.io/
[generator]: https://github.com/yeoman/generator-angular
[ypg]: https://github.com/andresdominguez/generator-protractor
[mit]: http://en.wikipedia.org/wiki/MIT_License

