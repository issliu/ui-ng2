var path = require('path');

//定义APP根目录
var ROOT = path.resolve(__dirname, '..');

//是否设置了名为flag的命令行参数
function hasProcessFlag(flag) {
    return process.argv.join('').indexOf(flag) > -1;
}

//是否启用webpack-dev-server 模式
function isWebpackDevServer() {
    return process.argv[1] && !!(/webpack-dev-server$/.exec(process.argv[1]));
}

//根据传入的参数 返回生成的目录
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

function checkNodeImport(context, request, cb) {
    if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
        cb(null, 'commonjs ' + request);
        return;
    }
    cb();
}

exports.hasProcessFlag = hasProcessFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
exports.checkNodeImport = checkNodeImport;
