var Logger = require('winston'),
    ENV = process.env.DEV_ENV || 'DEV';

var config = {
    colorize: true,
    json: false,
    slient: false,
    handleExceptions: true,
    level: 'debug',
    timestamp: function () {
        return new Date().toUTCString();
    }
};

// initialize
init();

// return logger, getter and setter
module.exports = {
    getLogger: function () {
        return Logger.log;
    },
    set: set,
    get: get
};

function init() {
    console.log(config.timestamp() + ' :: myLogger init() called. Updating Logger config...');

    // remove old transport defintion
    Logger.remove(Logger.transports.Console);

    //set logger output levels
    Logger.setLevels({
        debug: 0,
        info: 1,
        silly: 2,
        warn: 3,
        error: 4
    });

    // set Logger out colors
    Logger.addColors({
        debug: 'green',
        info: 'cyan',
        silly: 'magenta',
        warn: 'yellow',
        error: 'red'
    });

    // if env is set to 'PROD' turn off
    // colorized log out
    if (ENV === 'PROD') {
        set('colorize', false);
        set('level', 'info');
        console.log('Production environment detected, configure logging output to :: ' + config.level);
    }

    //set new custom Logger definition
    Logger.add(Logger.transports.Console, config);
}

function set(key, val) {
    config[key] = val;
};

function get(key, val) {
    return config[key];
};
