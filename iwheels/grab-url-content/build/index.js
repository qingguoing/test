'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var http = require('http');
var https = require('https');
var fs = require('fs');
var process = require('process');

var mime = require('mime');
var chalk = require('chalk');

var _require = require('url'),
    parse = _require.parse;

var minimist = require('minimist');
var spinner = require('ora')('start request ...');

var handleError = function handleError(e) {
  console.error('\n\r', chalk.red(e.message));
  spinner.fail('some error was caught above');
};

var grabFile = function grabFile(url, fileName) {
  var _parse = parse(url),
      _parse$protocol = _parse.protocol,
      protocol = _parse$protocol === undefined ? 'http:' : _parse$protocol,
      rest = _objectWithoutProperties(_parse, ['protocol']);

  var _ref = protocol === 'http:' ? http : https,
      request = _ref.request;

  spinner.start();
  var req = request(_extends({ protocol }, rest), function (res) {
    var contentType = res.headers['content-type'];
    var fileType = mime.getExtension(contentType);
    spinner.text = `clear the file ${fileName}.${fileType} ...`;
    var file = `${fileName}.${fileType}`;
    try {
      fs.writeFileSync(file, '');
    } catch (e) {
      handleError(e);
    }
    spinner.text = 'writeFile ...';
    res.on('data', function (chunk) {
      try {
        fs.appendFileSync(file, chunk);
      } catch (e) {
        handleError(e);
      }
    });
    res.on('end', function () {
      spinner.succeed(chalk.green('success'));
    });
  });

  req.on('error', handleError);
  req.end();
};

// const cli = module.exports = {
//   run: (cmd) => {
//     const { u = 'https://google.com', n = 'test', h = false, help = false } = minimist(cmd);
//     if (!cmd.length || h || help) return cli.help();
//     grabFile(u, n);
//   },
//   help: () => {
//     console.warn(chalk.yellow('generate a file of the url response body, use as:'), 'grab -url https://google.com -name test');
//   }
// }

var cli = module.exports = grabFile;

module.exports.run = function (cmd) {
  var _minimist = minimist(cmd),
      _minimist$u = _minimist.u,
      u = _minimist$u === undefined ? 'https://google.com' : _minimist$u,
      _minimist$n = _minimist.n,
      n = _minimist$n === undefined ? 'test' : _minimist$n,
      _minimist$h = _minimist.h,
      h = _minimist$h === undefined ? false : _minimist$h,
      _minimist$help = _minimist.help,
      help = _minimist$help === undefined ? false : _minimist$help;

  if (!cmd.length || h || help) return cli.help();
  grabFile(u, n);
};
module.exports.help = function () {
  console.warn(chalk.yellow('generate a file of the url response body, use as:'), 'grab -url https://google.com -name test');
};
