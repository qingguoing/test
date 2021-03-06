const http = require('http');
const https = require('https');
const fs = require('fs');
const process = require('process');

const mime = require('mime');
const chalk = require('chalk');
const { parse } = require('url');
const minimist = require('minimist');
const spinner = require('ora')('start request ...');

const handleError = (e) => {
  console.error('\n\r', chalk.red(e.message));
  spinner.fail('some error was caught above');
};

const grabFile = (url, fileName) => {
  const { protocol = 'http:', ...rest } = parse(url);
  const { request } = protocol === 'http:' ? http : https;
  spinner.start();
  const req = request({ protocol, ...rest }, (res) => {
    const contentType = res.headers[ 'content-type' ];
    const fileType = mime.getExtension(contentType);
    const file = `${fileName}.${fileType}`;    
    spinner.text = `clear the file ${file} ...`;
    try {
      fs.writeFileSync(file, '');
    } catch (e) {
      handleError(e);
    }
    spinner.text = 'writeFile ...';
    res.on('data', (chunk) => {
      try {
        fs.appendFileSync(file, chunk);
      } catch (e) {
        handleError(e);
      }
    });
    res.on('end', () => {
      spinner.succeed(chalk.green(`success, generate file ${file}`));
    });
  });

  req.on('error', handleError);
  req.end();
}

const cli = module.exports = grabFile;

module.exports.run = (cmd) => {
  const { u = 'https://google.com', n = 'test', h = false, help = false } = minimist(cmd);
  if (!cmd.length || h || help) return cli.help();
  grabFile(u, n);
};
module.exports.help = () => {
  console.warn(chalk.yellow('generate a file of the url response body, use as:'), 'grab -url https://google.com -name test');
};