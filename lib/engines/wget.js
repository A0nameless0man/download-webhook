const { exec } = require('child_process');
const logger = require('../logger');

module.exports = (options, callback) => {
    let op = '-a logs/wget.log';
    if (options.name) {
        if (options.path) {
            exec(`mkdir -p downloads/${options.path}`);
            op += ` -O downloads/${options.path}/${options.name}`;
        } else {
            op += ` -O downloads/${options.name}`;
        }
    } else if (options.path) {
        op += ` -P downloads/${options.path}/`;
    }

    logger.info(`start download: ${JSON.stringify(options)}`);
    exec(`wget ${op} ${options.url}`, (err, stdout, stderr) => {
        if (err) {
            logger.error(`error: ${JSON.stringify(options)}, ${stderr}`);
        } else {
            logger.info(`success: ${JSON.stringify(options)}`);
        }
        callback();
    });
}