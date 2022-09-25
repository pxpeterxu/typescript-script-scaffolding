import winston from 'winston';

/**
 * This logger should be used to log everything instead of console.log,
 * which should only be used for non-production/testing logging
 */
export const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});
