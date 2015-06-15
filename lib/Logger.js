var Logger = require('winston'),
  ENV = process.env.FH_ENV || 'Local Development',
  moment = require('moment');

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
    console.error('[stdout-logger] :: Deployed environment cannot be resolved. PLease check environment configuration.')
  }

  //set new custom Logger definition
  Logger.add(Logger.transports.Console, config);
}

function setEnvConfig(env) {
  switch (env) {
  case 'dev':
    set('colorize', false);
    set('level', 'debug');
    console.log('FeedHenry dev environment detected, LogLevel set to: ' + config.level);
    break;
  case 'live':
    set('colorize', false);
    set('level', 'info');
    console.log('FeedHenry live environment detected, LogLevel set to: ' + config.level);
    break;
  case 'debug':
    set('colorize', false);
    set('level', 'silly');
    set('json', true);
    console.log('FeedHenry debug logging enabled, LogLevel set to: ' + config.level);
    break;
  default:
    console.log('Default develeopment environemnt detected, setting Loglevel to: ' + config.level = ', enabling colorised output.');
    break;
  }
}

function set(key, val) {
  config[key] = val;
};

function get(key, val) {
  return config[key];
};
