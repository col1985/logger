// require stdout-Logger
var Logger = require('./lib/Logger');

Logger.set('level', 'verbose');
Logger.init();

var logger = Logger.getLogger();

var sampleObj = {
    type: 'Example implementation of stdout-logger',
    data: {
        hello: ['W', 'o', 'r', 'l', 'd']
    }
};

// Now use logger
logger('silly', 'This is an example output using logger `-silly:` level.', sampleObj);
logger('debug', 'This is an example output using logger `-debug:` level.', sampleObj);
logger('verbose', 'This is an example output using logger `-verbose:` level.', sampleObj);
logger('info', 'This is an example output using logger `-info:` level.');
logger('warn', 'This is an example output using logger `-warn:` level.');
logger('error', 'This is an example output using logger `-error:` level.', sampleObj);
