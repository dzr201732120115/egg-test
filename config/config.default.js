/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1599465925750_5725';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'dzr20140937',
      // database
      database: 'webpage',
    },
    // load into app,default is open //加载到应用程序，默认为打开
    app: true,
    // load into agent,default is close //加载到代理中，默认值为“关闭”
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  /*   config.security = {
    csrf: {
      enable: false,
    },
  }; */

  return {
    ...config,
    ...userConfig,
  };
};
