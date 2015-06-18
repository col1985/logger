stdout-logger
====

![Build Passing](https://travis-ci.org/col1985/logger.svg?branch=master)
[![NPM version](https://badge.fury.io/js/stdout-logger.svg)](http://badge.fury.io/js/stdout-logger)

This is my preferred config and implementation of Winston module that I use for logging out while developing and maintaining Node.js applications deployed in the FeedHenry platform. 

stdout-logger default logging level is ```verbose```. It will look for the ```process.env.FH_ENV``` environment varible and setting logger config accrodingly. The logger level can also be set depending on value of environment variables ```process.env.DEV_LOG_LEVEL```

### How to install?

From command line.. 

```bash
npm install stdout-logger --save
```

### stdout-logger default config

Default settings of instance Winston Logger.

```javascript

  {
      "colorize": true, // set to false to turn colorized messaging off.
      "json": false, // set to true to turn json formated messaging on.
      "slient": false, // set to true to turn off messaging
      "handleExceptions": true, // set to false to turn off handling exceptions
      "level": "verbose", 
      "timestamp": function () {
          return new Date().toISOString();
      }
  }

```

### stdout-logger levels

+ Level 0 :-:  ```silly```
+ Level 1 :-: ```debug```
+ Level 2 :-: ```verbose```
+ Level 3 :-: ```info```
+ Level 4 :-: ```warn```
+ Level 5 :-: ```error```


### How to use?

The logger will look for environment variables

Very easy to implement using default config, see example below...

```javascript
    
// require module
var Logger = require('stdout-logger'),
  logger = Logger.getLogger();

var sampleObj = {
  type: 'Example implementation of stdout-logger',
  data: {
    hello: ['W', 'o', 'r','l','d'];
  }
};

// Now use logger 
logger('silly', 'This is an example output using logger `-silly:` level.', sampleObj);
logger('debug', 'This is an example output using logger `-debug:` level.', sampleObj);
logger('verbose', 'This is an example output using logger `-verbose:` level.', sampleObj);
logger('info', 'This is an example output using logger `-info:` level.');
logger('warn', 'This is an example output using logger `-warn:` level.');
logger('error', 'This is an example output using logger `-error:` level.', sampleObj);

```

Or an example using your own personal config options by using the setter and getter helpers functions available.

```javascript
    
// require module
var Logger = require('stdout-logger');

// set desired config
Logger.set('colorize', true);
Logger.set('level', 'silly');

// defensive checking for specfic 
// config property
if(Logger.get('json') === true) {
  Logger.set('json', false);  
}

// re-init stdout-logger
Logger.init();

// get instnace of logger
var logger = Logger.getLogger();

// sample obj 
var sampleObj = {
  type: 'Example implementation of stdout-logger',
  data: {
    hello: ['W', 'o', 'r','l','d'];
  }
};

// Now use logger 
logger('silly', 'This is an example output using logger `-silly:` level.', sampleObj);
logger('debug', 'This is an example output using logger `-debug:` level.', sampleObj);
logger('verbose', 'This is an example output using logger `-verbose:` level.', sampleObj);
logger('info', 'This is an example output using logger `-info:` level.');
logger('warn', 'This is an example output using logger `-warn:` level.');
logger('error', 'This is an example output using logger `-error:` level.', sampleObj);

```

###Basic look and feel... 

![logger_output](https://github.com/col1985/logger/raw/master/logger_output.png)

###Contributions

Please feel free to sumbit a pull request of any fucntionality you deem useful to the logger or if you feel it can be done in a better way :). But please ensure all tests pass and formating is inline with current implementation
