myLogger
====

![Build Passing](https://travis-ci.org/col1985/myLogger.svg?branch=master)
[![NPM version](https://badge.fury.io/js/myLogger.svg)](http://badge.fury.io/js/myLogger)

Basic logging module using node module Winston and configured to personal prefernece.

###How to install

This module has not been published to NPM yet as I need to write some tests, but if you want 
to use the module in your project you can install via npm by entering the following command, 

```bash
npm install git+https://github.com/col1985/logger.git --save
```

###How to use?

```javascript
    
// require module
var logger = require('logger')();

// Now use logger 
logger('info', 'Hello World');
logger('debug', JSON.stringify({debug: 'Object'}, null, 2));
logger('warn', 'Hello World');
logger('silly', 'Hello World');
logger('error',  JSON.stringify({error: 'Object'}, null, 2));
```

####Sample Shell output
![logger_output](https://github.com/col1985/logger/raw/master/logger_output.png)