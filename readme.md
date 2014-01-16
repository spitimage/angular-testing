
# Angular Testing
This is a project to demonstrate the current _unit_ and _end-to-end_ testing capabilities in [AngularJS][angular]. Currently these are the relevant technologies:

* [Karma][karma] for __unit testing__
* [Protractor][protractor] for __end-to-end testing__

To make things as standardized as possible, I created this project with the latest [Yeoman][yeoman] generator for Angular. Since the Angular generator doesn't support [Protractor][protractor] yet, I added all the protractor stuff.

## Slides
The presentation slides for this project are located [here][prez].

## The Story
So this is a simple application to manage the planning of a Super Bowl party. You can add, edit, and remove guests. Also, you can assign goodies (food and drink) for guests to bring. These simple user stories bring some good testing discussion to the surface. The project includes both unit and E2E tests, and we can discuss the merits of both in the context of the application.

### Where's the Backend?
If this were a real project, we'd probably use $http or $resource to interact with a real backend. Here we're only demonstrating frontend testing, so the data services are only temporary.

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
[yeoman]: http://yeoman.io/
[generator]: https://github.com/yeoman/generator-angular
[ypg]: https://github.com/andresdominguez/generator-protractor
[mit]: http://en.wikipedia.org/wiki/MIT_License

