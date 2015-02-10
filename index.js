'use strict';

module.exports = {
    getLogger: function () {
        return Logger.log
    },
    setLogLevel: function (level) {
        if (!level) {
            return 'debug';
        }
        return level;
    },
    enableJson: function () {

    }
};


var winston = require('winston'),
    Logger = new winston(),
    date = new Date();

// remove old transport defintion
Logger.remove(winston.transports.Console);

// //set logger output levels
// logger.setLevels({
//     debug: 0,
//     info: 1,
//     silly: 2,
//     warn: 3,
//     error: 4
// });

// // set logger out colors
// logger.addColors({
//     debug: 'green',
//     info: 'cyan',
//     silly: 'magenta',
//     warn: 'yellow',
//     error: 'red'
// });


//set new custom logger definition
logger.add(logger.transports.Console, {
    level: 'debug',
    colorize: true,
    handleExceptions: true,
    json: false,
    timestamp: function () {
        return date;
    }
});