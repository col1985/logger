var Logger = require('winston'),
    ENV = process.env.FH_ENV || 'Local Development',
    moment = require('moment'),
    date = moment().toISOString();

var prefix = date + ' - [stdout-logger] :: ';

var config = {
    colorize: true,
    json: false,
    slient: false,
    handleExceptions: true,
    level: 'debug',
    timestamp: function () {
        return moment().toISOString();
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

    if (ENV) {
        setEnvConfig(ENV);
    } else {
        console.error(prefix + 'Deployed environment cannot be resolved. PLease check environment configuration.')
    }

    //set new custom Logger definition
    Logger.add(Logger.transports.Console, config);
}

/**
 * Set logging configuration based on detected deployed environemnt
 * @param {string} env - FeedHenry/Development envirment variable passed
 */
function setEnvConfig(env) {
    switch (env) {
    case 'dev':
        set('colorize', false);
        set('level', 'debug');
        console.log(prefix + ' FeedHenry dev environment detected, LogLevel set to: ' + config.level);
        break;
    case 'live':
        set('colorize', false);
        set('level', 'info');
        console.log(prefix + ' FeedHenry live environment detected, LogLevel set to: ' + config.level);
        break;
    case 'debug':
        set('colorize', false);
        set('level', 'silly');
        set('json', true);
        console.log(prefix + ' FeedHenry debug logging enabled, LogLevel set to: ' + config.level);
        break;
    default:
        console.log(prefix + ' Default develeopment environemnt detected, setting Loglevel to: ' + config.level + ', enabling colorised output.');
        break;
    }
}

/**
 * basic log configuration setter
 * @param {string} key configure property label
 * @param {string} val configure property value
 */
function set(key, val) {
    config[key] = val;
};

/**
 * basic log configuration getter
 * @param {string} key configure property label
 * @param {string} val configure property value
 * @return {object/string} current config of prop passed
 */
function get(key, val) {
    return config[key];
};
