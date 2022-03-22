const {transports} = require('winston');
const winston = require('winston');

const myFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level} ${message}`;
});

const log = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.splat(),
        myFormat
    ),
    // Meta,
    transports: [
        new winston.transports.Console(),
        // new winston.transports.File({
        //     filename: 'winston.log',
        //     level: 'error'
        // })
    ]
});

log.error('Ett error meddelande!!');
log.warn('Ett warn meddelande!!');
log.info('Ett info meddelande!!');
log.http('Ett http meddelande!!');
log.verbose('Ett verbose meddelande!!');
log.debug('Ett debug meddelande!!');
log.silly('Ett silly meddelande!!');


modeule.exports = log;