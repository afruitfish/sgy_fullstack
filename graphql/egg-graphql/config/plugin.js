'use strict';
//koa 好用 简单 但是 难以满足大项目 
//egg 约定俗成针布绰
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable:true,
    package:'egg-sequelize'
  }
};
