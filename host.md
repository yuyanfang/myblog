```
/**
 * @file 本地开发发布配置
 * 服务搭建，参见：
 * https://github.com/fex-team/receiver 或
 * https://github.com/fex-team/fis-command-release/blob/master/tools/receiver.php
 */

var host = 'http://cp01-nativeads-fe03.epc.baidu.com:8999/';

var staticDeployer = {
    host: host + 'receiver',
    to: '/home/work/odp/webroot/vuitemplate/src/'
};

var templateDeployer = {
    host: host + 'receiver',
    to: '/home/work/odp/webroot/vuitemplate/src/'
};

module.exports = {
    feCdn: host,
    feStatic: staticDeployer,
    templateReceiver: templateDeployer
};

```
